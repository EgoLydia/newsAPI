let sportsData = [];
let businessData = [];
let politicsData = [];
let scienceData = [];
let techData = [];
let allData = [];
let enterData = [];
let autoData = [];
let startData = [];
let worldData = [];
let sports = document.querySelector(".sports");
let all = document.querySelector(".all");
let business = document.querySelector(".business");
let tech = document.querySelector(".tech");
let politics = document.querySelector(".politics");
let science = document.querySelector(".science");
let entertain = document.querySelector(".entertainment");
let automobile = document.querySelector(".automobile");
let startup = document.querySelector(".startup");
let world = document.querySelector(".world");
let footer = document.querySelector(".footer");
let spinner = document.getElementById("spinner");
let spinner1 = document.getElementById("spinner1");
let spinner2 = document.getElementById("spinner2");
let spinner3 = document.getElementById("spinner3");
let spinner4 = document.getElementById("spinner4");
let spinner5 = document.getElementById("spinner5");
let spinner6 = document.getElementById("spinner6");
let spinner7 = document.getElementById("spinner7");
let spinner8 = document.getElementById("spinner8");
let spinner9 = document.getElementById("spinner9");
let modal = document.getElementsByClassName("card-reveal");

async function fetchData() {
  const response = await fetch("https://inshorts.deta.dev/news?category=all");
  const res = await response.json();
  if (res) {
    spinner.style.display = "none";
  }
  allData = res.data;
  allData.forEach((data) => {
    all.innerHTML += `
    <div class="col-lg-3 col-md-4 mb-2 bg-white">
      <div class="card p-3">
        <div class="card-image">
           <img
            src="${data.imageUrl}"
            alt=""
            class="img-fluid img"
          />
         </div>
        <div class="card-content">
          <div class="d-flex justify-content-between">
             <p class="mb-2 mt-2">${data.title}</p>
             <p class="action mt-2 mb-2" "><i class="bi bi-three-dots-vertical"></i></p>
          </div>
          <p class="mb-2">Written by ${data.author}</p>
          <div class="d-flex justify-content-between">
             <p class="mb-2">${data.date}</p>
             <p class="mb-2">${data.time}</p>
           </div>
          <button bg-dark text-white><a href="${data.readMoreUrl}">Read More</a>
          </button>   
         </div>
         <div class="card-reveal">
           <span class=" d-flex justify-content-end" id="close"> <i class="p-3 close bi bi-x"></i></span>
            <p class="mb-2">${data.content}</p>
            <button bg-dark text-white mt-5 text-center><a href="${data.readMoreUrl}">Read More</a>
            </button> 
        </div>
       </div>   
   </div>
        `;
  });
  addEvent();
  footer.innerHTML = `<div class="p-2 bg-dark">
  <p class="text-center mt-5 text-white">Created by Lydia</p>`

  const response1 = await fetch(
    "https://inshorts.deta.dev/news?category=business"
  );
  const res1 = await response1.json();
  if (res1) {
    spinner1.style.display = "none";
  }
  businessData = res1.data;
  businessData.forEach((data) => {
    business.innerHTML += `
    <div class="col-lg-3 col-md-4 mb-2 bg-white">
        <div class="card p-3">
        <div class="card-image">
          <img
            src="${data.imageUrl}"
            alt=""
            class="img-fluid img"
          />
          </div>
          <div class="card-content">
          <div class="d-flex justify-content-between">
          <p class="mb-2 mt-2">${data.title}</p>
          <p class="action mb-2 mt-2"><i class="bi bi-three-dots-vertical"></i></p>
          </div>
          <p class="mb-2">Written by ${data.author}</p>
          <div class="d-flex justify-content-between">
          <p class="mb-2">${data.date}</p>
              <p class="mb-2">${data.time}</p>
          </div>
          <button bg-dark text-white><a href="${data.readMoreUrl}">Read More</a>
          </button>   
          </div>
          <div class="card-reveal">
          <span class=" d-flex justify-content-end" id="close"> <i class="p-3 close bi bi-x"></i></span>
           <p class="mb-2">${data.content}</p>
           <button bg-dark text-white mt-5 text-center><a href="${data.readMoreUrl}">Read More</a>
           </button> 
       </div>
          </div>   
        </div>
      `;
  });
  addEvent();
  footer.innerHTML = `<div class="p-2 bg-dark">
  <p class="text-center mt-5 text-white">Created by Lydia</p>`

  const response2 = await fetch(
    "https://inshorts.deta.dev/news?category=sports"
  );
  const res2 = await response2.json();
  if (res2) {
    spinner2.style.display = "none";
  }
  sportsData = res2.data;
  sportsData.forEach((data) => {
    sports.innerHTML += `
    <div class="col-lg-3 col-md-4 mb-2 bg-white">
        <div class="card p-3">
        <div class="card-image">
          <img
            src="${data.imageUrl}"
            alt=""
            class="img-fluid img"
          />
          </div>
          <div class="card-content">
          <div class="d-flex justify-content-between">
          <p class="mb-2 mt-2">${data.title}</p>
          <p class="action mb-2 mt-2"><i class="bi bi-three-dots-vertical"></i></p>
          </div>
          <p class="mb-2">Written by ${data.author}</p>
          <div class="d-flex justify-content-between">
          <p class="mb-2">${data.date}</p>
              <p class="mb-2">${data.time}</p>
          </div>
          <button bg-dark text-white><a href="${data.readMoreUrl}">Read More</a>
          </button>   
          </div>
          <div class="card-reveal">
          <span class=" d-flex justify-content-end" id="close"> <i class="p-3 close bi bi-x"></i></span>
           <p class="mb-2">${data.content}</p>
           <button bg-dark text-white mt-5 text-center><a href="${data.readMoreUrl}">Read More</a>
           </button> 

       </div>

          </div>   
        </div>
  `;
  });
  addEvent();
  footer.innerHTML = `<div class="p-2 bg-dark">
  <p class="text-center mt-5 text-white">Created by Lydia</p>`

  const response3 = await fetch(
    "https://inshorts.deta.dev/news?category=science"
  );
  const res3 = await response3.json();
  if (res3) {
    spinner3.style.display = "none";
  }
  scienceData = res3.data;
  scienceData.forEach((data) => {
    science.innerHTML += `
    <div class="col-lg-3 col-md-4 mb-2 bg-white">
        <div class="card p-3">
        <div class="card-image">
          <img
            src="${data.imageUrl}"
            alt=""
            class="img-fluid img"
          />
          </div>
          <div class="card-content">
          <div class="d-flex justify-content-between">
          <p class="mb-2 mt-2">${data.title}</p>
          <p class="action mb-2 mt-2"><i class="bi bi-three-dots-vertical"></i></p>
          </div>
          <p class="mb-2">Written by ${data.author}</p>
          <div class="d-flex justify-content-between">
          <p class="mb-2">${data.date}</p>
              <p class="mb-2">${data.time}</p>
          </div>
          <button bg-dark text-white><a href="${data.readMoreUrl}">Read More</a>
          </button>   
          </div>
          <div class="card-reveal">
          <span class=" d-flex justify-content-end" id="close"> <i class="p-3 close bi bi-x"></i></span>
           <p class="mb-2">${data.content}</p>
           <button bg-dark text-white mt-5 text-center><a href="${data.readMoreUrl}">Read More</a>
           </button> 
       </div>
      </div>   
        </div>
  `;
  });
  addEvent();
  footer.innerHTML = `<div class="p-2 bg-dark">
  <p class="text-center mt-5 text-white">Created by Lydia</p>`

  const response4 = await fetch(
    "https://inshorts.deta.dev/news?category=politics"
  );
  const res4 = await response4.json();
  if (res4) {
    spinner4.style.display = "none";
  }
  politicsData = res4.data;
  politicsData.forEach((data) => {
    politics.innerHTML += `
    <div class="col-lg-3 col-md-4 mb-2 bg-white">
        <div class="card p-3">
        <div class="card-image">
          <img
            src="${data.imageUrl}"
            alt=""
            class="img-fluid img"
          />
          </div>
          <div class="card-content">
          <div class="d-flex justify-content-between">
          <p class="mb-2 mt-2">${data.title}</p>
          <p class="action mb-2 mt-2"><i class="bi bi-three-dots-vertical"></i></p>
          </div>
          <p class="mb-2">Written by ${data.author}</p>
          <div class="d-flex justify-content-between">
          <p class="mb-2">${data.date}</p>
              <p class="mb-2">${data.time}</p>
          </div>
          <button bg-dark text-white><a href="${data.readMoreUrl}">Read More</a>
          </button>   
          </div>
          <div class="card-reveal">
          <span class=" d-flex justify-content-end" id="close"> <i class="p-3 close bi bi-x"></i></span>
           <p class="mb-2">${data.content}</p>
           <button bg-dark text-white mt-5 text-center><a href="${data.readMoreUrl}">Read More</a>
           </button> 
       </div>
          </div>   
        </div>
  `;
  });
  addEvent();
  footer.innerHTML = `<div class="p-2 bg-dark">
  <p class="text-center mt-5 text-white">Created by Lydia</p>`

  const response5 = await fetch(
    "https://inshorts.deta.dev/news?category=entertainment"
  );
  const res5 = await response5.json();
  if (res5) {
    spinner5.style.display = "none";
  }
  enterData = res5.data;
  enterData.forEach((data) => {
    entertain.innerHTML += `
    <div class="col-lg-3 col-md-4 mb-2 bg-white">
        <div class="card p-3">
        <div class="card-image">
          <img
            src="${data.imageUrl}"
            alt=""
            class="img-fluid img"
          />
          </div>
          <div class="card-content">
          <div class="d-flex justify-content-between">
          <p class="mb-2 mt-2">${data.title}</p>
          <p class="action mb-2 mt-2"><i class="bi bi-three-dots-vertical"></i></p>
          </div>
          <p class="mb-2">Written by ${data.author}</p>
          <div class="d-flex justify-content-between">
          <p class="mb-2">${data.date}</p>
              <p class="mb-2">${data.time}</p>
          </div>
          <button bg-dark text-white><a href="${data.readMoreUrl}">Read More</a>
          </button>   
          </div>
          <div class="card-reveal">
          <span class=" d-flex justify-content-end" id="close"> <i class="p-3 close bi bi-x"></i></span>
           <p class="mb-2">${data.content}</p>
           <button bg-dark text-white mt-5 text-center><a href="${data.readMoreUrl}">Read More</a>
           </button> 
       </div>
          </div>   
        </div>
  `;
  });
  addEvent();
  footer.innerHTML = `<div class="p-2 bg-dark">
  <p class="text-center mt-5 text-white">Created by Lydia</p>`

  const response6 = await fetch(
    "https://inshorts.deta.dev/news?category=entertainment"
  );
  const res6 = await response6.json();
  if (res6) {
    spinner6.style.display = "none";
  }
  techData = res6.data;
  techData.forEach((data) => {
    tech.innerHTML += `
    <div class="col-lg-3 col-md-4 mb-2 bg-white">
      <div class="card p-3">
        <div class="card-image">
          <img
            src="${data.imageUrl}"
            alt=""
            class="img-fluid img"
          />
        </div>
        <div class="card-content">
          <div class="d-flex justify-content-between">
          <p class="mb-2 mt-2">${data.title}</p>
          <p class="action mb-2 mt-2"><i class="bi bi-three-dots-vertical"></i></p>
          </div>
          <p class="mb-2 author">Written by ${data.author}</p>
          <div class="d-flex justify-content-between calendar">
          <p class="mb-2">${data.date}</p>
              <p class="mb-2">${data.time}</p>
          </div>
          <button bg-dark text-white><a href="${data.readMoreUrl}">Read More</a>
          </button>   
       </div>
       <div class="card-reveal">
          <span class=" d-flex justify-content-end" id="close"> <i class="p-3 close bi bi-x"></i></span>
           <p class="mb-2">${data.content}</p>
           <button bg-dark text-white mt-5 text-center><a href="${data.readMoreUrl}">Read More</a>
           </button> 
       </div>
   </div>   
</div>
  `;
  });
  addEvent();
  footer.innerHTML = `<div class="p-2 bg-dark">
  <p class="text-center mt-5 text-white">Created by Lydia</p>`

  const response7 = await fetch(
    "https://inshorts.deta.dev/news?category=automobile"
  );
  const res7 = await response7.json();
  if (res7) {
    spinner7.style.display = "none";
  }
  autoData = res7.data;
  autoData.forEach((data) => {
    automobile.innerHTML += `
    <div class="col-lg-3 col-md-4 mb-2 bg-white">
      <div class="card p-3">
        <div class="card-image">
          <img
            src="${data.imageUrl}"
            alt=""
            class="img-fluid img"
          />
        </div>
        <div class="card-content">
          <div class="d-flex justify-content-between">
          <p class="mb-2 mt-2">${data.title}</p>
          <p class="action mb-2 mt-2"><i class="bi bi-three-dots-vertical"></i></p>
          </div>
          <p class="mb-2 author">Written by ${data.author}</p>
          <div class="d-flex justify-content-between calendar">
          <p class="mb-2">${data.date}</p>
              <p class="mb-2">${data.time}</p>
          </div>
          <button bg-dark text-white><a href="${data.readMoreUrl}">Read More</a>
          </button>   
       </div>
       <div class="card-reveal">
          <span class=" d-flex justify-content-end" id="close"> <i class="p-3 close bi bi-x"></i></span>
           <p class="mb-2">${data.content}</p>
           <button bg-dark text-white mt-5 text-center><a href="${data.readMoreUrl}">Read More</a>
           </button> 
       </div>
   </div>   
</div>
  `;
  });
  addEvent();
  footer.innerHTML = `<div class="p-2 bg-dark">
  <p class="text-center mt-5 text-white">Created by Lydia</p>`

  const response8 = await fetch(
    "https://inshorts.deta.dev/news?category=startup"
  );
  const res8 = await response8.json();
  if (res8) {
    spinner8.style.display = "none";
  }
  startData = res8.data;
  startData.forEach((data) => {
    startup.innerHTML += `
    <div class="col-lg-3 col-md-4 mb-2 bg-white">
      <div class="card p-3">
        <div class="card-image">
          <img
            src="${data.imageUrl}"
            alt=""
            class="img-fluid img"
          />
        </div>
        <div class="card-content">
          <div class="d-flex justify-content-between">
          <p class="mb-2 mt-2">${data.title}</p>
          <p class="action mb-2 mt-2"><i class="bi bi-three-dots-vertical"></i></p>
          </div>
          <p class="mb-2 author">Written by ${data.author}</p>
          <div class="d-flex justify-content-between calendar">
          <p class="mb-2">${data.date}</p>
              <p class="mb-2">${data.time}</p>
          </div>
          <button bg-dark text-white><a href="${data.readMoreUrl}">Read More</a>
          </button>   
       </div>
       <div class="card-reveal">
          <span class=" d-flex justify-content-end" id="close"> <i class="p-3 close bi bi-x"></i></span>
           <p class="mb-2">${data.content}</p>
           <button bg-dark text-white mt-5 text-center><a href="${data.readMoreUrl}">Read More</a>
           </button> 
       </div>
   </div>   
</div>
  `;
  });
  addEvent();
  footer.innerHTML = `<div class="p-2 bg-dark">
  <p class="text-center mt-5 text-white">Created by Lydia</p>`

  const response9 = await fetch(
    "https://inshorts.deta.dev/news?category=world"
  );
  const res9 = await response9.json();
  if (res9) {
    spinner9.style.display = "none";
  }
  worldData = res9.data;
  worldData.forEach((data) => {
    world.innerHTML += `
    <div class="col-lg-3 col-md-4 mb-2 bg-white">
      <div class="card p-3">
        <div class="card-image">
          <img
            src="${data.imageUrl}"
            alt=""
            class="img-fluid img"
          />
        </div>
        <div class="card-content">
          <div class="d-flex justify-content-between">
          <p class="mb-2 mt-2">${data.title}</p>
          <p class="action mb-2 mt-2"><i class="bi bi-three-dots-vertical"></i></p>
          </div>
          <p class="mb-2 author">Written by ${data.author}</p>
          <div class="d-flex justify-content-between calendar">
          <p class="mb-2">${data.date}</p>
              <p class="mb-2">${data.time}</p>
          </div>
          <button bg-dark text-white><a href="${data.readMoreUrl}">Read More</a>
          </button>   
       </div>
       <div class="card-reveal">
          <span class=" d-flex justify-content-end" id="close"> <i class="p-3 close bi bi-x"></i></span>
           <p class="mb-2">${data.content}</p>
           <button bg-dark text-white mt-5 text-center><a href="${data.readMoreUrl}">Read More</a>
           </button> 
       </div>
   </div>   
</div>
  `;
  });
  addEvent();
  footer.innerHTML = `<div class="p-2 bg-dark">
  <p class="text-center mt-5 text-white">Created by Lydia</p>`
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
