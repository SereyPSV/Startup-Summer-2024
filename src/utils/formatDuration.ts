export function formattingDuration(duration: number) {
  const newDurationFormat = `${Math.floor(duration / 60)}h ${duration % 60}m `;
  return newDurationFormat;
}

// TODO сделать проверку если длительность фильма меньше 60 минут
