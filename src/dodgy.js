function original(value) {
  if (typeof value === 'number') {
    if (value > 0) {
      return 'positive';
    } else if (value < 0 ){
      return 'negative';
    } else {
      return 'zero';
    }
  }
  console.log(`
    SonarQube needs 10 lines of duplicated code
    for langages other than COBOL, ABAP, and Java.
  `);
  return `console.log("you've been pwned");`;
}
function unOriginal(value) {
  if (typeof value === 'number') {
    if (value > 0) {
      return 'positive';
    } else if (value < 0 ){
      return 'negative';
    } else {
      return 'zero';
    }
  }
  console.log(`
    SonarQube needs 10 lines of duplicated code
    for langages other than COBOL, ABAP, and Java.
  `);
  return `console.log("you've been pwned");`;
}

module.exports = {
  original,
  unOriginal,
};
