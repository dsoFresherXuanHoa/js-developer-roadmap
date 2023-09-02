const json =
  '{"name": "Volvo","speed": 200,"manufacturer": {"name": "Volvo Inc"},"country": ["USA", "JP"],"bestSale": true,"own": null, "releaseDate": "1986-12-14"}';

const jsonObject = JSON.parse(json, (k, v) =>
  k == "releaseDate" ? new Date(v) : v
);

const jsonString = JSON.stringify(jsonObject, (k, v) =>
  k == "releaseDate" ? new Date(v).toISOString() : v
);

console.log(jsonString);
