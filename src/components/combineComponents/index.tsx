import React, { ComponentProps } from "react";

interface Props {
  children: React.ReactNode;
}

export const combineComponents = (
  ...components: React.FC<Props>[]
): React.FC<Props> => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({ children }: ComponentProps<React.FC<Props>>): JSX.Element => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }) => <>{children}</>
  );
};
