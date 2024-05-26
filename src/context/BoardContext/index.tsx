import React, { createContext, useState } from "react";
//Types
import { IBoards } from "src/types/Boards";


interface IBoardContext {
  boards: IBoards[];
  setBoards: (boards: IBoards[]) => void;
}

export const BoardContext = createContext<IBoardContext>({
  boards: [],
  setBoards: _boards => { }
});

export const BoardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [boards, setBoards] = useState<IBoards[]>([]);

  return (
    <BoardContext.Provider
      value={{
        boards,
        setBoards,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};
