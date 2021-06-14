const imageInput = document.querySelector("#meme-insert");

imageInput.addEventListener('change', function(e) {
  const memeImage = document.querySelector("#meme-image");

  memeImage.src = URL.createObjectURL(e.target.files[0]); // https://stackoverflow.com/a/27165977
  memeImage.onload = function() {
    URL.revokeObjectURL(memeImage.src);
  };
  memeImage.id = "meme-image";

  const memeImageContainer = document.querySelector("#meme-image-container");
  memeImageContainer.style.width = memeImage.style.width;
  memeImageContainer.style.height = memeImage.style.height;
});

const textInput = document.querySelector("#text-input");

textInput.addEventListener('keyup', function(e) {
  const memeText = document.querySelector("#meme-text");

  memeText.innerText = e.target.value;
});

const buttons = ["fire", "water", "earth"];

for (i = 0; i < buttons.length; i += 1) {
  const button = document.querySelector("#" + buttons[i]);

  button.addEventListener('click', function(e) {
    const memeImageContainer = document.querySelector("#meme-image-container");

    if (e.target.id === "fire") memeImageContainer.style.border = "3px dashed red";
    if (e.target.id === "water") memeImageContainer.style.border = "3px dashed blue";
    if (e.target.id === "earth") memeImageContainer.style.border = "3px dashed green";
  });
}

const imgs = document.querySelectorAll(".imgs");

for (i = 0; i < imgs.length; i += 1) {
  imgs[i].addEventListener("click", function(e) {
    const memeImage = document.querySelector("#meme-image");
    memeImage.src = e.target.src;
  })
}
