// TODO: USE ES6 CANNOT WORK?
// const greet = function() {
//   let greet = document.createElement("div");
//   greet.textContent = "Hello, my first webpack app!";
//   return greet;
// };
// export { greet };

module.exports = function() {
  var greet = document.createElement("div");
  greet.textContent = "Hi there and greetings!";
  return greet;
};
