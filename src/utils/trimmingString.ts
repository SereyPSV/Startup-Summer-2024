export function trimmingString(str: string) {
  const maxLength = 36;
  if (str.length <= maxLength) {
    return str;
  }

  var trimmedString = str.substr(0, maxLength);
  if (trimmedString.lastIndexOf(" ") >= 0) {
    trimmedString = trimmedString.substr(
      0,
      Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
    );
  }

  return trimmedString + "...";
}
