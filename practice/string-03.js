export function statisticsCharacters(str) {
  if (str === '') return {};

  const statistics = {};
  str.split('').forEach((x) => {
    if (statistics[x]) {
      statistics[x] += 1;
    } else {
      statistics[x] = 1;
    }
  });

  return statistics;
}
