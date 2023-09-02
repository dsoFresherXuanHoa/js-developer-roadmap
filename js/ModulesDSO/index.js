import doAs, { ROOT_PASSWORD } from "./SystemCTL.js";

const username = "dsoFresherXuanHoa";

console.log(doAs(username, ROOT_PASSWORD));
