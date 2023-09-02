const p = $("p");
const tfUsername = $("#username");

p.html("<h1>dsoFresherXuanHoa</h1>");
p.text("dsoFresherXuanHoa");
tfUsername.val("dsoFresherXuanHoa");

p.attr("title", "dsoFresherXuanHoa");

console.log(p.html());
console.log(p.text());
console.log(tfUsername.val());
console.log(p.attr("title"));
