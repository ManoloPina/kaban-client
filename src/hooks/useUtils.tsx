export const useUtils = () => {
  const isEmpty = (obj: object) => {
    return Object.keys(obj).length === 0;
  };

  return {
    isEmpty,
  };
};
