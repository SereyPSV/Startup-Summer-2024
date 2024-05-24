export function removeDuplicatesId(array: any) {
  return array.reduceRight((acc: any, current: any) => {
    if (!acc.find((item: any) => item.id === current.id)) {
      acc.push(current);
    }
    return acc;
  }, []);
}
