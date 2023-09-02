const json =
  '{"employees":[{"firstName":"John", "lastName":"Doe"},{"firstName":"Anna", "lastName":"Smith"},{"firstName":"Peter", "lastName":"Jones"}]}';

const jsonObject = JSON.parse(json);
const jsonString = JSON.stringify(jsonObject);

console.log(jsonObject);
console.log(jsonString);
