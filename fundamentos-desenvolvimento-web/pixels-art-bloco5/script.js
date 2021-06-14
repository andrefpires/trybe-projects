function getColor(e) {
  const oldColorSelected = document.querySelector('#' + sessionStorage.getItem('color'));
  oldColorSelected.classList.remove('selected');

  const newColorSelected = document.querySelector('#' + e.target.id);
  newColorSelected.classList.add('selected');

  sessionStorage.setItem("color", newColorSelected.id);
}


function paint(e) {
  e.target.style.backgroundColor = sessionStorage.getItem('color');
}

function clearBoard() {
  const pixel = document.querySelectorAll('.pixel');

  for (i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}

function initialSettings() {
  const arrPalleteColors = ["black", "yellow", "green", "pink"];

  for (i = 0; i < arrPalleteColors.length; i += 1) {
    const color = document.querySelector("#" + arrPalleteColors[i]);
  
    color.addEventListener("click", getColor);
  }

  const pixel = document.querySelectorAll('.pixel');

  for (i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', paint);
  }

  const button = document.querySelector('#clear-board');
  button.addEventListener('click', clearBoard);

  sessionStorage.setItem('color', 'black');
}

initialSettings();