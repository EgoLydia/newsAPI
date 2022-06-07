let allData = [];
let value = "all";
const all = document.querySelector(".all");
const home = document.getElementById('all')
const footer = document.querySelector(".footer");
const science = document.getElementById("science");
const politics = document.getElementById("politics");
const entertain = document.getElementById("entertain");
const sports = document.getElementById("sports");
const world = document.getElementById("world");
const business = document.getElementById("business");
const auto = document.getElementById("auto");
const tech = document.getElementById("tech");
let spinner = document.getElementById("spinner");
let modal = document.getElementsByClassName("card-reveal");

home.addEventListener("click", () => {
  all.innerHTML = "";
  footer.innerHTML = "";
  value = "all";
  return fetchData();
});
science.addEventListener("click", () => {
  spinner.style.display = "block"
  all.innerHTML = "";
  footer.innerHTML = "";
  value = "science";
  return fetchData();
});

politics.addEventListener("click", () => {
  all.innerHTML = "";
  footer.innerHTML = "";
  value = "politics";
  return fetchData();
});

sports.addEventListener("click", () => {
  all.innerHTML = "";
  footer.innerHTML = "";
  value = "sports";
  return fetchData();
});

business.addEventListener("click", () => {
  all.innerHTML = "";
  footer.innerHTML = "";
  value = "sports";
  return fetchData();
});

world.addEventListener("click", () => {
  all.innerHTML = "";
  footer.innerHTML = "";
  value = "sports";
  return fetchData();
});

entertain.addEventListener("click", () => {
  all.innerHTML = "";
  footer.innerHTML = "";
  value = "sports";
  return fetchData();
});

auto.addEventListener("click", () => {
  all.innerHTML = "";
  footer.innerHTML = "";
  value = "sports";
  return fetchData();
});

tech.addEventListener("click", () => {
  all.innerHTML = "";
  footer.innerHTML = "";
  value = "sports";
  return fetchData();
});

async function fetchData() {
  spinner.style.display = "block"
  const response = await fetch(
    "https://inshorts.deta.dev/news?category=" + value);
  const res = await response.json();
  if (res) {
    spinner.style.display = "none";
  }
  allData = res.data;
  allData.forEach((data) => {
    all.innerHTML += `
    <div class="col-lg-4 col-md-6 mb-2 bg-white">
      <div class="card p-3">
        <div class="card-image">
           <img
            src="${data.imageUrl}"
            alt=""
            class="img-fluid img"
          />
         </div>
        <div class="card-content">
          <div class="d-flex justify-content-between title">
             <p class="mb-2 mt-2">${data.title}</p>
             <p class="action mt-2 mb-2" "><i class="bi bi-three-dots-vertical"></i></p>
          </div>
          <p class="mb-2 author">Written by ${data.author}</p>
          <div class="d-flex justify-content-between">
             <p class="mb-2 date">${data.date}</p>
             <p class="mb-2 date">${data.time}</p>
           </div>
          <button class='buttons p-1 bg-dark text-white'><a href="${data.readMoreUrl}">Read More</a>
          </button>   
         </div>
         <div class="card-reveal">
           <span class=" d-flex justify-content-end" id="close"> <i class="p-3 close bi bi-x"></i></span>
            <p class="mb-2 content">${data.content}</p>
            <button class='buttons bg-dark p-1 text-white mt-5 text-center'><a href="${data.readMoreUrl}">Read More</a>
            </button> 
        </div>
       </div>   
   </div>
        `;
  });
  addEvent();
  footer.innerHTML = `<div class="py-5 px-0 bg-dark">
  <div class="text-white text-center">Created by Lydia</div>
  </div>`;
}

fetchData();

function addEvent() {
  let showModal = document.querySelectorAll(".action");
  for (let i = 0; i < showModal.length; i++) {
    showModal[i].addEventListener("click", (e) => {
      const parent = showModal[i].parentNode;
      parent.parentNode.parentNode.children[2].style.display = "block";
    });
  }

  let closeModal = document.querySelectorAll(".close");
  for (let i = 0; i < closeModal.length; i++) {
    closeModal[i].addEventListener("click", (e) => {
      const parent = closeModal[i].parentNode;
      parent.parentNode.parentNode.children[2].style.display = "none";
    });
  }
}
