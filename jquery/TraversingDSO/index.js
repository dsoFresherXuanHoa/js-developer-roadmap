const firstBox = $(".box:first");

console.log("Parent: ");
console.log(firstBox.parent());
console.log(firstBox.parents());
console.log(firstBox.parentsUntil("html"));

console.log("Child: ");
console.log(firstBox.children());
console.log(firstBox.find(".vip"));

console.log("Siblings");
console.log(firstBox.siblings());
console.log(firstBox.next());
console.log(firstBox.nextUntil(".child"));
console.log(firstBox.nextAll());

console.log($(".box").first());
console.log($(".box").last());
console.log($(".box").eq(1));
console.log($(".box").not(".vip"));
