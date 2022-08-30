let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// onclick at color btn the function will run and creat a random color
document.getElementById("color-btn").onclick = () => {
  let colorParts = [];
  for (let i = 0; i < 6; i++) {
    colorParts.push(hexArray[Math.floor(Math.random() * hexArray.length)]);
  }

  let finalColor = `#${colorParts.join("")}`;

  // Init the elements
  let title = document.querySelector(".title");
  let colorArea = document.querySelector(".colorArea");

  // Append coloreTitle to Color Box
  title.innerHTML = finalColor;

  // Change background color in ColorArea
  colorArea.style.backgroundColor = finalColor;
};
