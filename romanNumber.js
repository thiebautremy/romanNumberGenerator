function convertToRoman(num) {
  let milles = 0;
  let cent = 0;
  let dizaine = 0;
  let unite = 0;
  let romanNumber = "";
  if (parseInt(num / 1000) > 0) {
    milles = parseInt(num / 1000);
  }
  if (parseInt((num - milles * 1000) / 100) > 0) {
    cent = parseInt((num - milles * 1000) / 100);
  }
  if (parseInt((num - milles * 1000 - cent * 100) / 10) > 0) {
    dizaine = parseInt((num - milles * 1000 - cent * 100) / 10);
  }
  if (num > 0) {
    unite = parseInt(num - milles * 1000 - cent * 100 - dizaine * 10);
  }
  console.log(milles, cent, dizaine, unite);
  function insertMilles(nbr) {
    for (let i = 0; i < nbr; i++) {
      romanNumber += "M";
    }
  }
  function insertCent(nbr) {
    switch (nbr) {
      case 9:
        romanNumber += "CM";
        break;
      case 5:
        romanNumber += "D";
        break;
      case 4:
        romanNumber += "CD";
        break;
      default:
        if (nbr > 5 && nbr < 9) {
          romanNumber += "D";
          for (let i = 0; i < nbr - 5; i++) {
            romanNumber += "C";
          }
        } else {
          for (let i = 0; i < nbr; i++) {
            romanNumber += "C";
          }
        }
        break;
    }
  }
  function insertDizaine(nbr) {
    switch (nbr) {
      case 9:
        romanNumber += "XC";
        break;
      case 5:
        romanNumber += "L";
        break;
      case 4:
        romanNumber += "XL";
        break;
      default:
        if (nbr > 5 && nbr < 9) {
          romanNumber += "L";
          for (let i = 0; i < nbr - 5; i++) {
            romanNumber += "X";
          }
        } else {
          for (let i = 0; i < nbr; i++) {
            romanNumber += "X";
          }
        }
        break;
    }
  }
  function insertUnite(nbr) {
    switch (nbr) {
      case 9:
        romanNumber += "IX";
        break;
      case 5:
        romanNumber += "V";
        break;
      case 4:
        romanNumber += "IV";
        break;
      default:
        if (nbr > 5 && nbr < 9) {
          romanNumber += "V";
          for (let i = 0; i < nbr - 5; i++) {
            romanNumber += "I";
          }
        } else {
          for (let i = 0; i < nbr; i++) {
            romanNumber += "I";
          }
        }
        break;
    }
  }

  insertMilles(milles);
  insertCent(cent);
  insertDizaine(dizaine);
  insertUnite(unite);
  return romanNumber;
}

convertToRoman(649);
