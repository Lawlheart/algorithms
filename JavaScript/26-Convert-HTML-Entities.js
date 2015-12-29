

// CONVERT HTML ENTITIES
// Convert the characters "&", "<", ">", '"' (double quote), and "'" (apostrophe), in a string to their corresponding HTML entities.

function convert(str) {
  // &colon;&rpar;
  return str;
}

convert("Dolce & Gabbana");

// TESTING
// convert("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
// convert("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
// convert("Sixty > twelve") should return Sixty &​gt; twelve.
// convert('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
// convert("Shindler's List") should return Shindler&​apos;s List.
// convert("<>") should return &​lt;&​gt;.
// convert("abc") should return abc.