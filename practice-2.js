const checkString = str => {
  let myStr = "";
  for (i = 0; i < str.length; ++i) {
    if (checkAlpha(str[i]) && !myStr.includes(str[i])) myStr += str[i];
    if (myStr.length >= 13) return true;
  }
  return false;
};

const checkAlpha = letter => {
  const map = "abcdefghijklmnopqrstuvwxyz";
  if (map.includes(letter.toLowerCase())) return true;
  return false;
}

let myString = "aBCdefghijkl";
console.log(checkString(myString))
