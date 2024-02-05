const createBubble = () => {
  const section = document.getElementById("section");
  const span = document.createElement("span");
  const size = Math.random() * 60;
  const left = Math.random() * innerWidth;

  span.style.width = size + "px";
  span.style.height = size + "px";
  span.style.left = left + "px";
  section.append(span);
  setTimeout(() => span.remove(), 4000);
};

setInterval(createBubble, 50);
