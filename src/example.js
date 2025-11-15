// This file has intentional linting errors to test the workflow
function testFunction() {
  let unusedVariable = "I'm not used in the code";
  console.log("Using console.log which is a warning");
  let missingSemicolon = "This line is missing a semicolon"
  let doubleQuotes = "Using double quotes instead of single quotes, which is an error";
  return
}