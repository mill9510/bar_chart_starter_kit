const list = document.querySelector("ul");

//const li = document.createElement("li");
//li.style.setProperty("--height", "30");
//list.appendChild(li);

const valueArray = [];

setInterval(generateBarCharts, 500);

function generateBarCharts() {
  const randomNum = Math.floor(Math.random() * 100);

  const li = document.createElement("li");
  li.style.setProperty("--height", randomNum);
  list.appendChild(li);

  valueArray.push(randomNum);

  if (valueArray.length > 20) {
    valueArray.shift();
    list.removeChild(list.firstChild);
  }

  console.log("function", valueArray);
}
