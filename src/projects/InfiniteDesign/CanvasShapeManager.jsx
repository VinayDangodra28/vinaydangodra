import React, { useRef, useState, useEffect } from "react";

const CanvasShapeManager = () => {
  const canvasRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({ width: 500, height: 500 });
  const [shapes, setShapes] = useState([]);
  const [selectedShape, setSelectedShape] = useState(null);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      shapes.forEach((shape) => {
        shape.updatePosition(canvas.width, canvas.height);
        shape.draw(ctx, canvas.width, canvas.height);
      });
      requestAnimationFrame(draw);
    };

    draw();
  }, [shapes]);

  class Shape {
    constructor(x, y, size, color) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.color = color;
      this.type = "shape";
    }

    draw(ctx, canvasWidth, canvasHeight) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      this.wrapAround(ctx, canvasWidth, canvasHeight);
    }

    isClicked(mx, my) {
      return Math.hypot(mx - this.x, my - this.y) <= this.size;
    }

    wrapAround(ctx, canvasWidth, canvasHeight) {
      const positions = [
        { x: this.x - canvasWidth, y: this.y },
        { x: this.x + canvasWidth, y: this.y },
        { x: this.x, y: this.y - canvasHeight },
        { x: this.x, y: this.y + canvasHeight },
        { x: this.x - canvasWidth, y: this.y - canvasHeight },
        { x: this.x + canvasWidth, y: this.y - canvasHeight },
        { x: this.x - canvasWidth, y: this.y + canvasHeight },
        { x: this.x + canvasWidth, y: this.y + canvasHeight },
      ];

      positions.forEach(({ x, y }) => {
        ctx.beginPath();
        ctx.arc(x, y, this.size, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    updatePosition(canvasWidth, canvasHeight) {
      if (this.x < 0) this.x += canvasWidth;
      if (this.x > canvasWidth) this.x -= canvasWidth;
      if (this.y < 0) this.y += canvasHeight;
      if (this.y > canvasHeight) this.y -= canvasHeight;
    }
  }

  const handleMouseDown = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const clickedShape = shapes.find((shape) => shape.isClicked(x, y));
    setSelectedShape(clickedShape);
    if (clickedShape) setDragging(true);
  };

  const handleMouseMove = (e) => {
    if (dragging && selectedShape) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      selectedShape.x = x;
      selectedShape.y = y;
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const addShape = () => {
    const x = Math.random() * canvasSize.width;
    const y = Math.random() * canvasSize.height;
    const size = 20 + Math.random() * 30;
    const color = `hsl(${Math.random() * 360}, 70%, 50%)`;
    setShapes([...shapes, new Shape(x, y, size, color)]);
  };

  const deleteShape = () => {
    if (selectedShape) {
      setShapes(shapes.filter((shape) => shape !== selectedShape));
      setSelectedShape(null);
    }
  };

  const downloadCanvas = () => {
    const link = document.createElement("a");
    link.download = "canvas.png";
    link.href = canvasRef.current.toDataURL();
    link.click();
  };

  const updateCanvasSize = () => {
    const width = parseInt(document.getElementById("canvasWidth").value);
    const height = parseInt(document.getElementById("canvasHeight").value);
    setCanvasSize({ width, height });
  };

  return (
    <div>
      <div>
        <label htmlFor="canvasWidth">Width:</label>
        <input id="canvasWidth" type="number" defaultValue={canvasSize.width} />
        <label htmlFor="canvasHeight">Height:</label>
        <input id="canvasHeight" type="number" defaultValue={canvasSize.height} />
        <button onClick={updateCanvasSize}>Update Canvas Size</button>
      </div>
      <div>
        <button onClick={addShape}>Add Shape</button>
        <button onClick={deleteShape}>Delete Selected</button>
        <button onClick={downloadCanvas}>Download Canvas</button>
      </div>
      <canvas
        ref={canvasRef}
        width={canvasSize.width}
        height={canvasSize.height}
        style={{ border: "1px solid black" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      ></canvas>
    </div>
  );
};

export default CanvasShapeManager;