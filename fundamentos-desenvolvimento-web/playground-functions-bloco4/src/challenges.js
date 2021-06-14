// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 && bool2) return true;

  return false;
}

// Desafio 2
function calcArea(base, height) {
  const area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(string) {
  const arrString = string.split(" ");

  return arrString;
}

// Desafio 4
function concatName(arr) {
  let newString = arr[0];

  for (i = 1; i < arr.length; i += 1) {
    const string = ", " + arr[i];
    newString += string;
  }

  return newString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;

  if (typeof wins === "number") {
    for (i = 1; i <= wins; i += 1) {
      points += 3;
    }
  }
  
  if (typeof ties === "number") {
    for (i = 1; i <= ties; i += 1) {
      points += 1;
    }
  }

  return points;
}

// Desafio 6
function highestCount(array) {
  if (array[0] === undefined) return "Invalid";

  let count = 0;
  let highestNumber = 0;

  for (i = 0; i < array.length; i += 1) {
    if (array[i] >= highestNumber) {
      highestNumber = array[i]
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (
    typeof mouse !== number ||
    typeof cat1 !== number ||
    typeof cat2 !== number
  ) {
    return "Dados inválidos";
  };

  const distanceCats = [cat1 - mouse, cat2 - mouse] ;

  for (i = 0; i < distanceCats.length; i += 1) {
    if (distanceCats[i] < 0) distanceCats[i] = distanceCats[i] * -1;
  }

  if (distanceCats[0] < distanceCats[1]) return "O primeiro gato pegará o rato";
  if (distanceCats[0] > distanceCats[1]) return "O segundo gato pegará o rato";

  return "Os gatos se trombam e não pegam o rato";
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];

  for (i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      newArray[i] = "fizzbuzz";
    } else if (array[i] % 5 === 0) {
      newArray[i] = "buzz";
    } else if (array[i] % 3 === 0) {
      newArray[i] = "fizz";
    } else {
      newArray[i] = "bug!";
    }
  }

  return newArray;
}

// Desafio 9
function encode(string) {
  const arrString = string.split('');

  for (i = 0; i < arrString.length; i += 1) {
    switch (arrString[i]) {
      case 'a':
        arrString[i] = 1;
      break;
      case 'e':
        arrString[i] = 2;
      break;
      case 'i':
        arrString[i] = 3;
      break;
      case 'o':
        arrString[i] = 4;
      break;
      case 'u':
        arrString[i] = 5;
      break;
    }
  }

  const newString = arrString.join('');

  return newString;
}

function decode(string) {
  const arrString = string.split('');

  for (i = 0; i < arrString.length; i += 1) {
    switch (arrString[i]) {
      case '1':
        arrString[i] = 'a';
      break;
      case '2':
        arrString[i] = 'e';
      break;
      case '3':
        arrString[i] = 'i';
      break;
      case '4':
        arrString[i] = 'o';
      break;
      case '5':
        arrString[i] = 'u';
      break;
    }
  }

  const newString = arrString.join('');

  return newString;
}

// Desafio 10
function techList(arrayTechs, name) {
  const response = [];

  for (i = 0; i < arrayTechs.length; i += 1 ) {
    response.push(
      { tech: arrayTechs[i], name }
    );
  }

  return response;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
}
