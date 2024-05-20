export const trimmingNum = (num: number) => {
  if (num >= 10000000) {
    return Math.round(num / 1000000) + "M";
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 10000) {
    return Math.round(num / 1000) + "K";
  } else if (num >= 1000) {
    return (num / 1000)?.toFixed(1) + "K";
  } else {
    return num?.toFixed(1).toString();
  }
};
