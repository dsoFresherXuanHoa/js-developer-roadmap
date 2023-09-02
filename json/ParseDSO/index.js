const json =
  '{"name": "Volvo","speed": 200,"manufacturer": {"name": "Volvo Inc"},"country": ["USA", "JP"],"bestSale": true,"own": null, "releaseDate": "1986-12-14"}';

const jsonObject = JSON.parse(json, (k, v) =>
  k == "releaseDate" ? new Date(v) : v
);

console.log(jsonObject);
