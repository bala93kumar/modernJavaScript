alert("sairam");
console.log("from logs");

const names = ["bala", "krithiga", "ram"];

for (let i = 0; i < names.length; i++) {
  let result = "<div>${names[i]}</div>";
  console.log(result);
}

// methods

function greet(x) {
  alert("this is from the " + x + " function");
}

greet("bala");

// cat objects

let cat = {
  name: "catie",
  age: 3,
  meow() {
    alert("meowww");
  },
};

console.log(cat.age);

cat.meow();

function newFunc() {
  alert("message from new new function");
}
document.addEventListener("click", newFunc);
