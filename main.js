const togglebtn = document.getElementById("togglebtn");
const navigation = document.querySelector(".top-navigation");
const menu = document.querySelector(".menu");


menu.addEventListener("click", () => {
  navigation.classList.toggle("active");
  togglebtn.classList.toggle("active");
});




const reviews = [
  {
    img: "./Screenshot_20231202-125456.png",
    author: "Alpha grafix",
    job: "Graphics Designer",
    info: "Has been great working with my guy stanley for about a year now, great guy, pure creativity, delivers works with precision. Such a perfectionist, lol.",
  },
  {
    img: "./IMG-20231126-WA0066.jpg",
    author: "Adaeze",
    job: "Product Manager",
    info: "Stanley is such a talent, i have had the opportunity of working on different projects with him, extraordinary",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwRcVwDSHRBEaV7VT3dGvWlRZW2ov2JTXYfYpjYiD_w&s",
    author: "Ayra Star",
    job: "Artist",
    info: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit expedita quidem dolorem, modi eligendi illo, repellendus eveniet qui accusamus accusantium odit non ab. Quis delectus itaque ipsum, expedita blanditiis nemo",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAeF-BseTRHu5NvLpi8izhvva1Up49exohAA_wD04L&s",
    author: "Rema",
    job: "Singer",
    info: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit expedita quidem dolorem, modi",
  },
];

const img = document.getElementById("img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const nextbtn = document.querySelector(".nextbtn");
const prevbtn = document.querySelector(".prevbtn");

let currentitem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

function showPerson() {
  const item = reviews[currentitem];
  img.src = item.img;
  author.textContent = item.author;
  job.textContent = item.job;
  info.textContent = item.info;
}

nextbtn.addEventListener("click", function () {
  currentitem++;
  if (currentitem > reviews.length - 1) {
    currentitem = 0;
  }
  showPerson();
});
prevbtn.addEventListener("click", function () {
  currentitem--;
  if (currentitem < 0) {
    currentitem = reviews.length - 1;
  }
  showPerson();
});



//links toggle//

const links = document.getElementById("links");


links.addEventListener("click", function(){
navigation.classList.remove("active");
togglebtn.classList.remove("active")
});

// footer-date//
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//about animation//

const words = ['"AFFORDABILTY"', '"FAST"', '"RESPONSIVE"', '"USERABILITY"'];
const aboutAnimate = document.querySelector(".about-animate");
let currentWord = 0;


window.addEventListener("DOMContentLoaded", function(){
showWord();
});

 function showWord(){ 
  setInterval(function(){
    currentWord++;
    aboutAnimate.textContent = words[currentWord]

    if(currentWord > words.length - 1){
      currentWord = 0;
    }
  }, 7000)
};




//scroll-up//

const scrollUpBtn = document.querySelector(".scroll-down");
const home = document.getElementById("Home-container");


window.addEventListener("scroll", function(){

const scrollHeight = window.pageYOffset;

if(scrollHeight > 300){
  scrollUpBtn.classList.add("showscrollupbtn");
}
else{
  scrollUpBtn.classList.remove("showscrollupbtn")
}
})

const scrollLinks = document.querySelectorAll(".scroll-links");


scrollLinks.forEach(function (link) {
link.addEventListener("click", function (e) {
e.preventDefault();

const id = e.currentTarget.getAttribute("href").slice(1);
const element = document.getElementById(id);
const topBar = document.querySelector(".topbar"); 
const topbarHeight = topBar.getBoundingClientRect().height;
let position = element.offsetTop;
window.scrollTo({
  left:0,
  top:position - topbarHeight 
})

});
});





