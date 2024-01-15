import { CSSProperties } from "react";

export const useUtils = () => {
  const isEmpty = (obj: object) => {
    return Object.keys(obj).length === 0;
  };

  const isValidCSSProperty = (
    key: string,
    value: any
  ): value is CSSProperties[keyof CSSProperties] => {
    return key in document.createElement("div").style;
  };

  const camelToKebab = (str: string): string => {
    return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  };

  return {
    isValidCSSProperty,
    isEmpty,
    camelToKebab,
  };
};
