const titleColor = document.querySelector(".js-colortitle");

titleColor.classList.toggle("title-color");

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

titleColor.style.color = getRandomColor();

const button = document.querySelector(".js-click");
button.addEventListener("click", onclick);

function onclick(evt) {
  console.log(evt.currentTarget);
}