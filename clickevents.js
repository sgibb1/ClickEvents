const fooBtn = document.getElementById("foo");
const barBtn = document.getElementById("bar");
const foobarBtn = document.getElementById("foobar");
const main = document.querySelector("main");

fooBtn.addEventListener("click", function () {
  let text = document.createElement("h3");
  text.textContent = "Foo";
  main.appendChild(text);
})

barBtn.addEventListener("click", function () {
  let text = document.createElement("h3");
  text.textContent = "Bar";
  main.appendChild(text);
})

foobarBtn.addEventListener("click", function () {
  let text = document.createElement("h3");
  text.textContent = "FooBar";
  main.appendChild(text);
})
