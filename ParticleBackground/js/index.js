const number = 500;
const randomNum = (number = 0) => Math.random() * number;

const createBox = (number) => {
  const wrap = document.getElementById("wrap");

  for (let i = 0; i < number; i++) {
    const box = document.createElement("div");
    const particle = document.createElement("div");
    const size = randomNum(40);
    const left = randomNum(1000);
    const top = randomNum(100);
    const background = `rgba(${randomNum(225)}, ${randomNum(225)}, ${randomNum(
      225
    )}, ${randomNum(1)})`;
    const boxShadow = `0 0 ${randomNum(100)}px rgba(${randomNum(
      225
    )}, ${randomNum(225)}, ${randomNum(225)}, ${randomNum(1)})`;

    particle.className = "particle";
    particle.style.width = size + "px";
    particle.style.height = size + "px";
    particle.style.left = left + "vh";
    particle.style.top = top + "vh";
    particle.style.background = background;
    particle.style.boxShadow = boxShadow;

    box.className = "box";
    box.append(particle);
    wrap.append(box);
  }
};

const setAnimation = () => {
  const boxs = document.getElementsByClassName("box");
  const particles = document.getElementsByClassName("particle");
  let count = 0;

  let timer = setInterval(() => {
    boxs[count].style.animation = `moveY 30s linear infinite`;
    particles[count].style.animation = `moveX 6s linear infinite`;
    count++;
    count >= boxs.length && (clearInterval(timer), (timer = null));
  }, 10);
};

createBox(number);
setAnimation();
