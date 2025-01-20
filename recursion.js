let counter = 0;
function app() {
  if (counter > 3) {
    return "done";
  }

  counter++;
  return app();
}
console.log(app());
