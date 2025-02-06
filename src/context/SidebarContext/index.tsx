import React, { createContext, useState } from "react";


interface ISidebarContext {
  show: boolean;
  setShow: (show: boolean) => void;
  isAnimating: boolean;
  setIsAnimating: (isAnimating: boolean) => void;
}

export const SidebarContext = createContext<ISidebarContext>({
  show: true,
  setShow: _show => { },
  isAnimating: false,
  setIsAnimating: _isAnimating => { },
});

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [show, setShow] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <SidebarContext.Provider value={{ show, setShow, isAnimating, setIsAnimating }}>
      {children}
    </SidebarContext.Provider>
  );
};
