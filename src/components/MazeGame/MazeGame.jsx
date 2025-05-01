import { useState, useMemo, useEffect, useRef } from "react";
import { generateMaze, solve } from "./util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./maze.css";

export default function MazeGame() {
  const [gameId, setGameId] = useState(1);
  const [status, setStatus] = useState("not-started");
  const [steps, setSteps] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [timeTaken, setTimeTaken] = useState(0);
  const [lastChangeTime, setLastChangeTime] = useState(0);
  const [showRestartButton, setShowRestartButton] = useState(false);

  const mazeRef = useRef(null); // Add a ref for the maze container


  const isMobile = window.innerWidth <= 768;


  const rows = isMobile ? 10 : 10;
  const cols = isMobile ? 12 : 45;
  

  const [userPosition, setUserPosition] = useState([0, 0]);

  const maze = useMemo(() => generateMaze(cols, rows), [gameId]);

  const solution = useMemo(() => {
    const s = new Set();
    const solutionPath = solve(maze, userPosition[0], userPosition[1]);
    solutionPath.forEach((path) => {
      const [x, y] = path;
      s.add(String(x) + "-" + String(y));
    });
    return s;
  }, [userPosition[0], userPosition[1], gameId]);

  useEffect(() => {
    const lastRowIndex = maze.length - 1;
    const lastColIndex = maze[0].length - 1;

    if (userPosition[0] === lastRowIndex && userPosition[1] === lastColIndex) {
      setStatus("won");
      setTimeTaken(Date.now() - startTime);
      setShowRestartButton(true);
    }
  }, [userPosition[0], userPosition[1], maze, startTime]);

  useEffect(() => {
    let timer;
    if (status === "playing" && startTime) {
      timer = setInterval(() => {
        setTimeTaken(Date.now() - startTime);
      }, 100);
    }
    return () => clearInterval(timer);
  }, [status, startTime]);

  useEffect(() => {
    if (status === "playing" && timeTaken >= 10000) {
      if (Date.now() - lastChangeTime >= 10000) {
        setGameId((prevGameId) => prevGameId + 1);
        setLastChangeTime(Date.now());
        setTimeTaken(0);
      }
    }
  }, [timeTaken, status, lastChangeTime]);

  const makeClassName = (i, j) => {
    const rows = maze.length;
    const cols = maze[0].length;
    let arr = [];
    if (maze[i][j][0] === 0) {
      arr.push("topWall");
    }
    if (maze[i][j][1] === 0) {
      arr.push("rightWall");
    }
    if (maze[i][j][2] === 0) {
      arr.push("bottomWall");
    }
    if (maze[i][j][3] === 0) {
      arr.push("leftWall");
    }
    if (i === rows - 1 && j === cols - 1) {
      arr.push("destination");
    }
    if (i === userPosition[0] && j === userPosition[1]) {
      arr.push("currentPosition");
    }
    return arr.join(" ");
  };

  const handleKeyPress = (e) => {
    if (status !== "playing") return;

    const key = e.code;
    if (key === "ArrowUp" || key === "KeyW") handleMove("up");
    if (key === "ArrowRight" || key === "KeyD") handleMove("right");
    if (key === "ArrowDown" || key === "KeyS") handleMove("down");
    if (key === "ArrowLeft" || key === "KeyA") handleMove("left");
  };

  const handleMove = (direction) => {
    const [i, j] = userPosition;
    let moved = false;

    if (direction === "up" && maze[i][j][0] === 1) {
      setUserPosition([i - 1, j]);
      moved = true;
    }
    if (direction === "right" && maze[i][j][1] === 1) {
      setUserPosition([i, j + 1]);
      moved = true;
    }
    if (direction === "down" && maze[i][j][2] === 1) {
      setUserPosition([i + 1, j]);
      moved = true;
    }
    if (direction === "left" && maze[i][j][3] === 1) {
      setUserPosition([i, j - 1]);
      moved = true;
    }

    if (moved) {
      setSteps((prevSteps) => prevSteps + 1);
      if (!startTime) setStartTime(Date.now());
    }
  };

  const restartGame = () => {
    setUserPosition([0, 0]);
    setStatus("playing");
    setSteps(0);
    setStartTime(null);
    setTimeTaken(0);
    setGameId((prevGameId) => prevGameId + 1);
    setLastChangeTime(Date.now());
    setShowRestartButton(false);
  };
  useEffect(() => {
    if (status === "playing" && mazeRef.current) {
      mazeRef.current.focus(); // Automatically focus the maze on game start
    }
  }, [status]);

  const startGame = () => {
    setStatus("playing");
    setStartTime(Date.now());
    if (mazeRef.current) {
      mazeRef.current.focus(); // Ensure focus is set
    }
  };


  return (
    <div id="mazegame" onKeyDown={handleKeyPress} tabIndex={0} ref={mazeRef}>
      <div className="maze-setting-bar">
        <div className="left-setting">
            <div className="setting">
              <button onClick={restartGame}>Restart game</button>
            </div>
          <div className="steps-taken">Steps Taken: {steps}</div>
          <div className="timer">
            Time Taken: {status === "won" ? (timeTaken / 1000).toFixed(2) : (timeTaken / 1000).toFixed(2)} seconds
          </div>
        </div>
        <div className="right-setting">
          <p>Use WSAD or Arrow Keys to move</p>
          <div className="controls">
            <button onClick={() => handleMove("up")}><FontAwesomeIcon icon={faArrowUp} /></button>
            <div>
              <button onClick={() => handleMove("left")}><FontAwesomeIcon icon={faArrowLeft} /></button>
              <button onClick={() => handleMove("down")}><FontAwesomeIcon icon={faArrowDown} /></button>
              <button onClick={() => handleMove("right")}><FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
          </div>
        </div>
      </div>

      <table id="maze" className={status === "not-started" ? "blur" : ""}>
        <tbody>
          {maze.map((row, i) => (
            <tr key={`row-${i}`}>
              {row.map((cell, j) => (
                <td key={`cell-${i}-${j}`} className={makeClassName(i, j)}>
                  <div />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {status === "not-started" && (
        <div className="start-overlay">
          <div className="game-instructions">
            <h2>Maze Game Instructions</h2>
            <p>🕹️ Use <strong>Above Arrow Keys</strong> or <strong>WASD</strong> to move.</p>
            <p>🚀 Reach the glowing destination to win!</p>
            <p>⏳ The maze <strong>changes every 10 seconds</strong> if you're too slow!</p>
            <p>🔄 Click "Restart Game" anytime to start fresh.</p>
            <button className="start-button" onClick={startGame}>
              Start Round
            </button>
          </div>
        </div>
      )}



{status === "won" && (
        <div className="start-overlay">
          <div className="game-instructions">
            <h2>🎉 Congratulations!</h2>
            <p>🏆 You reached the destination!</p>
            <p>🚀 Steps Taken: <strong>{steps}</strong></p>
            <p>⏳ Time Taken: <strong>{(timeTaken / 1000).toFixed(2)} seconds</strong></p>
            <button className="start-button" onClick={restartGame}>
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
