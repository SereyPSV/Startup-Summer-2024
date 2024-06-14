export function formattingPrise(amount: number) {
  const newMoneyFormat = amount
    .toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })
    .slice(0, -3);
  return newMoneyFormat;
}
