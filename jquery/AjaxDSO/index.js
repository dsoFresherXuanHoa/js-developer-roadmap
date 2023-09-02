const btnGet = $("#btnGet");
const btnPost = $("#btnPost");
const btnLoad = $("#btnLoad");

const tfText = $(".tfText");

console.log(btnGet, btnPost, btnLoad, tfText);

btnLoad.on("click", () => {
  console.log("Load");
  tfText.load("./index.txt", (res, status, xhr) => {
    if (status == "error") {
      tfText.text("Error");
    } else {
      tfText.text(res);
    }
  });
});

btnGet.on("click", () => {
  console.log("Get");
  $.get("./index.txt", (data, status) => {
    if (status == "error") {
      tfText.text("Error");
    } else {
      console.log(data);
      tfText.text(data);
    }
  });
});

btnPost.on("click", () => {
  console.log("Post");
  $.post("./index.txt", (data, status) => {
    if (status == "error") {
      tfText.text("Error");
    } else {
      console.log(data);
      tfText.text(data);
    }
  });
});
