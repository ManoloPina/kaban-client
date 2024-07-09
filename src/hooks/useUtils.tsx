import { CSSProperties } from "react";

export const useUtils = () => {
  const isEmpty = (obj: object) => {
    return Object.keys(obj).length === 0;
  };

  const isValidCSSProperty = (
    key: string,
    value: any
  ): value is CSSProperties[keyof CSSProperties] => {
    const div = document.createElement("div");
    div.style.setProperty(key, value);
    return div.style.getPropertyValue(key) !== "";
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
