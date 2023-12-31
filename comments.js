let firstDiv = document.querySelector(".firstDiv");
let send = document.querySelector("button");
let nameInput = document.querySelector(".name");
let comInput = document.querySelector(".comment");

let commentsArr = JSON.parse(localStorage.getItem("comments")) || [];

commentsArr.forEach(commentObj => {
  let commentText = document.createElement("div");
  firstDiv.appendChild(commentText);
  commentText.textContent = commentObj.name + ": " + commentObj.comment;
});

send.addEventListener("click", function () {
  let commentText = document.createElement("div");
  firstDiv.appendChild(commentText);
  commentText.textContent = nameInput.value + ": " + comInput.value;

  let commentObj = {
    name: nameInput.value,
    comment: comInput.value,
  };

  commentsArr.push(commentObj);

  localStorage.setItem("comments", JSON.stringify(commentsArr));

  nameInput.value = "";
  comInput.value = "";
//   localStorage.clear()
});
