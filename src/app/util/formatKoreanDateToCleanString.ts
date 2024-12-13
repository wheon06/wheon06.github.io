export const formatKoreanDateToCleanString = (date: string): number => {
  const [year, month, day] = date.match(/\d+/g)!.map(Number);
  return Number(String(year) + String(month) + String(day));
};
