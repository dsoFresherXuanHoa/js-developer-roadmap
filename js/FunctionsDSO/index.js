function whoAmI() {
  console.log("dsoFresherXuanHoa");
}

const doAs = function (username, password = 1111) {
  return username == password;
};

const args = function (...rest) {
  console.log(arguments.length);
};

const rest = (...rest) => console.log(rest);

const username = "dsoFresherXuanHoa";
const password = "dsoFresherXuanHoa";

whoAmI();
console.log(doAs(username, password));
console.log(doAs(username));
args(username, password);
rest(username);
rest(username, password);
