import { createContext, useReducer } from "react";
import { songReducer } from '../reducer/songReduser';

export const SongContextComponent = createContext({});

export function SongContext({ children }) {
    const [state, dispatch] = useReducer(songReducer, {});

  return (
    <SongContextComponent.Provider value={[state, dispatch]}>
        {children}
    </SongContextComponent.Provider>
  );
}

export default SongContext;
