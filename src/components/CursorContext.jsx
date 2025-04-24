import { createContext, useContext, useRef } from "react";
import CustomCursor from "./CustomCursor";

const CursorContext = createContext(null);
// useCursor Hook Usage  
//
// example usage
// const cursorRef = useCursor();  
// cursorRef.current?.stopAttraction(); // Disables cursor attraction  
// cursorRef.current?.startAttraction(); // Enables cursor attraction 

export const CursorProvider = ({ children }) => {
  const cursorRef = useRef(null);

  return (
    <CursorContext.Provider value={cursorRef}>
      <CustomCursor ref={cursorRef} />
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  return useContext(CursorContext);
};
