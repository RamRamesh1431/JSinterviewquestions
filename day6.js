//first question
function m() {
  let h1 = document.createElement("h1");
  h1.innerText = "MERN stack";
  console.log(h1.innerText);
  let div = document.getElementsByClassName("heading")[0];
  div.appendChild(h1);
}

//time question
function time1() {
  let date = new Date();
  let hr = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  document.getElementsByClassName("hrs")[0].innerText = hr;
  document.getElementsByClassName("mins")[0].innerText = mins;
  document.getElementsByClassName("secs")[0].innerText = secs;
}
setInterval(time1, 10);

//4 question
function change() {
  document.getElementsByClassName("heading4")[0].innerText =
    "Welcome to Elevation academy";
}

// 5. question
function hide() {
  document.getElementsByClassName("heading5")[0].style.display = "none";
}

let arr = [0, 1, 0, 0, 1, 1, 0];
let count = 0;
for (let i in arr) {
  if (arr[i] === 0) {
    count++;
  }
}
console.log(count);

let abc = {
  name: "ramesh",
  arr1: [2, 3, 4, 5, 6, 8],
};
let bce = {
  name: "nikhil",
  arr2: [2, 3, 4, 5, 6, 7],
};
if (bce.arr2.length == abc.arr1.length) {
  for (var i = 0; i < bce.arr2.length; i++) {
    if (bce.arr2[i] != abc.arr1[i]) {
      console.log("arrays not same");
      break;
    }
  }
} else {
  console.log("arrays not same");
}
if (i == bce.arr2.length) {
  console.log("arrays are same");
}
