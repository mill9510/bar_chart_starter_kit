//parrent
const list = document.querySelector("ul");

const valueArray = [];

setInterval(generateBarCharts, 500);

function generateBarCharts() {
  const randomNum = Math.floor(Math.random() * 100);

  const li = document.createElement("li");
  li.style.setProperty("--height", randomNum);
  // child til list
  list.appendChild(li);

  valueArray.push(randomNum);

  if (valueArray.length > 20) {
    valueArray.shift();
    list.removeChild(list.firstChild);
  }

  console.log("value", valueArray);
}
