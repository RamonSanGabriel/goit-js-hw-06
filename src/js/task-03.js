const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ul = document.querySelector(".gallery");
ul.style.backgroundColor = "tomato";
ul.style.color = "white";
ul.style.border = "3px  dotted aqua";

for (let image of images) {
  let li = document.createElement("li");
  li.innerHTML = `<img src="${image.url}" alt = "${image.alt}" width = '300px'>`;
  ul.appendChild(li);
  li.insertAdjacentHTML("afterend", "<strong>Homework 3</strong>");
}