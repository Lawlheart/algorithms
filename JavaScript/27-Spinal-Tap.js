function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str.replace(/(?!\s|^)+([A-Z])/g, "-$1").toLowerCase().replace(/\s|_/g, "-").replace(/--/g, "-");
}
spinalCase('This Is Spinal Tap');
spinalCase('thisIsSpinalTap');
spinalCase('The_Andy_Griffith_Show');
spinalCase('Teletubbies say Eh-oh');