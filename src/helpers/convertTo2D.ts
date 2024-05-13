export const convertTo2D = (array: Array<number | null>) => {
  return [array.slice(0, 3), array.slice(3, 6), array.slice(6, 9)];
};
