const Color = () => {
  const string = "0123456789abcdef";
  let hex = "#";
  let string2;
  for (let i = 0; i < 6; i++) {
    string2 = Math.floor(Math.random() * string.length);
    hex += string[string2];
  }
  return hex;
};
const Time = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const now = new Date();
  const year = now.getFullYear();
  const month = months[now.getMonth()];
  const date = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  const headtime = `${month} ${date}, ${year}`;
  const time = hours + ":" + minutes;
  const fullTime = headtime + " " + time;
  return fullTime + `:${seconds}`;
};
const wrap = document.querySelector(".wrapper");
const year = document.querySelector(".span");
const time = document.querySelector("p");
const headwrap = document.querySelector(".wrap2");
const title = document.querySelector(".challenge");
const Khatai = document.querySelector(".Khatai");
const Title = document.querySelector("h2");
const ul = document.querySelector("ul");
const lists = document.querySelectorAll("li");
wrap.style.width = "90%";
wrap.style.margin = "auto";
wrap.style.marginTop = "2rem";
headwrap.style.width = "65%";
headwrap.style.margin = "auto";
year.style.fontSize = "4rem";
title.style.display = "flex";
title.style.gap = "0.3rem";
title.style.alignItems = "center";
title.style.textAlign = "center";
title.style.fontFamily = "sans-serif";
title.style.fontWeight = 700;
title.style.fontSize = "2.5rem";
Title.style.textAlign = "center";
Title.style.fontFamily = "sans-serif";
Title.style.fontWeight = 700;
Title.style.textDecoration = "underline";
time.style.textAlign = "center";
time.style.fontFamily = "sans-serif";
time.style.fontWeight = 600;
for (const list of lists) {
  list.style.listStyle = "none";
  list.style.padding = "1rem";
  list.style.margin = "0.3rem";
  list.style.fontFamily = "sans-serif";
  list.style.fontWeight = 300;
  list.style.border = "none";
  if (list.textContent.includes("Done")) {
    list.style.background = "#21bf73";
  } else if (list.textContent.includes("Ongoing")) {
    list.style.background = "#fddb3a";
  } else {
    list.style.background = "#fd5e53";
  }
}
setInterval(() => {
  Khatai.style.color = Color();
  Title.style.color = Color();
  year.style.color = Color();
  year.style.fontSize = "4rem";
  year.style.fontWeight = 700;
  time.textContent = Time();
  time.style.background = Color();
  time.style.width = "25%";
  time.style.margin = "auto";
  time.style.padding = "10px";
}, 1000);
