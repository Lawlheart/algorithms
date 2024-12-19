// Caesar's Cipher
//One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

function rot13(encodedStr) {
  return encodedStr.split("").map(function(l) {
    var c = l.charCodeAt(0);
    return c < 65 || c > 90 ? l : String.fromCharCode(c < 78 ? c + 13 : c - 13);
  }).join("");
}

rot13("SERR CVMMN!");

// rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"
// rot13("SERR CVMMN!") should decode to "FREE PIZZA!"
// rot13("SERR YBIR?") should decode to "FREE LOVE?"
// rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
