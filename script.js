function encriptar(text, key) {
  let encriptedText = "";
  for (let i = 0; i < text.length; i++) {
    let symbol = text[i];
    if (symbol.match(/[a-z]/i)) {
      let Code = symbol.charCodeAt(0);
      let base = symbol === symbol.toUpperCase() ? 65 : 97;
      let newCode = ((Code - base + key) % 26) + base;

      encriptedText += String.fromCharCode(newCode);
    } else {
      encriptedText += symbol;
    }
  }
  return encriptedText;
}

let text = "Hello World";
let key = 3;
let encriptedText = encriptar(text, key);
console.log(encripedText);
// Output; "Khoor Zruog"
