let frmObj1 = document.getElementById("ourForm");

let formObj = document.getElementById("formValue");

let ulList = document.getElementById("ulList");

console.log(formObj);

frmObj1.addEventListener("submit", (e) => {
  e.preventDefault();

  creatItem(formObj.value);
});

function creatItem(x) {
  let htmlItem = `<li> ${x} <button onclick="deleteItem(this)" >Delete</button> </li>`;
  ulList.insertAdjacentHTML("beforeend", htmlItem);
  //   alert("hi clicked form");
  console.log(x);
  formObj.value = "";
  formObj.focus();
}

function deleteItem(itemToDel) {
  //   alert("are you sure you want to delete item?");
  itemToDel.parentElement.remove();
}
