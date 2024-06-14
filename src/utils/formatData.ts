export function formattingDate(data: string) {
  const newDataFormat = new Date(data).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return newDataFormat;
}
