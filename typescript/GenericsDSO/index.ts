function createPair<K, V>(key: K, value: V): void {
  console.log(typeof key);
  console.log(typeof value);
}

createPair("1", "11");
createPair(1, 11);

export default {};
