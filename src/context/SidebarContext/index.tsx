import React, { createContext, useState } from "react";


interface ISidebarContext {
  show: boolean;
  setShow: (show: boolean) => void;
}

export const SidebarContext = createContext<ISidebarContext>({
  show: true,
  setShow: _show => { },
});

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [show, setShow] = useState(true);

  return (
    <SidebarContext.Provider value={{ show, setShow }}>
      {children}
    </SidebarContext.Provider>
  );
};
