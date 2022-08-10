var programmingLanguages = [
  "Scala",
  "Java",
  "Go",
  "Swift",
  "Cobol",
  "JavaScript",
  "Python",
  "Ruby",
  "Elm",
  "Rust",
  "C#"
];
for (var language of programmingLanguages) {
  console.log(`I want to learn ${language}!`);
}
programmingLanguages.forEach(function (item, index) {
  console.log(`${index + 1}.${item.toUpperCase()}`);
});
// console.log(programmingLanguages);
