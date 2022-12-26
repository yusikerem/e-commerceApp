export function filterFarebaseKeys(data) {
  let arr = [];
  for (let key in data) {
    data[key].payload.key = key;
    arr.push(data[key].payload);
  }
  return arr;
}
