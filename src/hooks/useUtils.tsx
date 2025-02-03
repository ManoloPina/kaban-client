import { CSSProperties } from "react";

export const useUtils = () => {
  const isEmpty = (obj: object) => {
    return Object.keys(obj).length === 0;
  };

  const camelToKebab = (str: string): string => {
    return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  };

  const isValidCSSProperty = (
    key: string,
    value: any
  ): value is CSSProperties[keyof CSSProperties] => {
    if (value == null) {
      return false;
    }

    const div = document.createElement("div");
    const kebabKey = camelToKebab(key);

    div.style.setProperty(kebabKey, value);
    return div.style.getPropertyValue(kebabKey) !== "";
  };

  return {
    isValidCSSProperty,
    isEmpty,
    camelToKebab,
  };
};
