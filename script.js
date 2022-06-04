let sportsData = [];
let businessData = [];
let politicsData = [];
let scienceData = [];
let techData = [];
let allData = [];
let enterData = [];
let sports = document.querySelector(".sports");
let all = document.querySelector(".all");
let business = document.querySelector(".business");
let tech = document.querySelector(".tech");
let politics = document.querySelector(".politics");
let science = document.querySelector(".science");
let entertain = document.querySelector(".entertainment");
let spinner = document.getElementById("spinner")
async function fetchFromAPI() {
  const response = await fetch("https://inshorts.deta.dev/news?category=all");
  const res = await response.json();
  allData = res.data;
  allData.forEach((data) =>{
      all.innerHTML += `
      <div class="col-lg-3 col-md-4 mb-2 p-3 bg-white">
      <img
        src="${data.imageUrl}"
        alt=""
        class=" img"
      />
      <div class="d-flex justify-content-between">
      <p class="mb-1">${data.title}</p>
      <p class="action mb-1">...</p>
      </div>
      <p class="mb-1">Written by ${data.author}</p>
      <div class="d-flex justify-content-between">
      <p class="mb-1">${data.date}</p>
          <p class="mb-1">${data.time}</p>
      </div>
    </div>
      `
  })
  const response1 = await fetch("https://inshorts.deta.dev/news?category=business");
  const res1 = await response1.json();
  businessData = res1.data;
  businessData.forEach((data) =>{
      business.innerHTML += `
      <div class="col-lg-3 col-md-4 mb-2 p-3 bg-white">
      <img
        src="${data.imageUrl}"
        alt=""
        class=" img"
      />
      <div class="d-flex justify-content-between">
      <p class="mb-1">${data.title}</p>
      <p class="action mb-1">...</p>
      </div>
      <p class="mb-1">Written by ${data.author}</p>
      <div class="d-flex justify-content-between">
      <p class="mb-1">${data.date}</p>
          <p class="mb-1">${data.time}</p>
      </div>
    </div>
      `
});
const response2 = await fetch("https://inshorts.deta.dev/news?category=sports");
const res2 = await response2.json();
sportsData = res2.data;
sportsData.forEach((data) =>{
    sports.innerHTML += `
    <div class="col-lg-3 col-md-4 mb-2 p-3 bg-white">
    <img
      src="${data.imageUrl}"
      alt=""
      class=" img"
    />
    <div class="d-flex justify-content-between">
    <p class="mb-1">${data.title}</p>
    <p class="action mb-1">...</p>
    </div>
    <p class="mb-1">Written by ${data.author}</p>
    <div class="d-flex justify-content-between">
    <p class="mb-1">${data.date}</p>
        <p class="mb-1">${data.time}</p>
    </div>
  </div>
    `
});
const response3 = await fetch("https://inshorts.deta.dev/news?category=science");
const res3 = await response3.json();
scienceData = res3.data;
scienceData.forEach((data) =>{
    science.innerHTML += `
    <div class="col-lg-3 col-md-4 mb-2 p-3 bg-white">
    <img
      src="${data.imageUrl}"
      alt=""
      class=" img"
    />
    <div class="d-flex justify-content-between">
    <p class="mb-1">${data.title}</p>
    <p class="action mb-1">...</p>
    </div>
    <p class="mb-1">Written by ${data.author}</p>
    <div class="d-flex justify-content-between">
    <p class="mb-1">${data.date}</p>
        <p class="mb-1">${data.time}</p>
    </div>
  </div>
    `
});
const response4 = await fetch("https://inshorts.deta.dev/news?category=politics");
const res4 = await response4.json();
politicsData = res4.data;
politicsData.forEach((data) =>{
    politics.innerHTML += `
    <div class="col-lg-3 col-md-4 mb-2 p-3 bg-white">
    <img
      src="${data.imageUrl}"
      alt=""
      class=" img"
    />
    <div class="d-flex justify-content-between">
    <p class="mb-1">${data.title}</p>
    <p class="action mb-1">...</p>
    </div>
    <p class="mb-1">Written by ${data.author}</p>
    <div class="d-flex justify-content-between">
    <p class="mb-1">${data.date}</p>
        <p class="mb-1">${data.time}</p>
    </div>
  </div>
    `
});
const response5 = await fetch("https://inshorts.deta.dev/news?category=entertainment");
const res5 = await response5.json();
enterData = res5.data;
enterData.forEach((data) =>{
    entertain.innerHTML += `
    <div class="col-lg-3 col-md-4 mb-2 p-3 bg-white">
    <img
      src="${data.imageUrl}"
      alt=""
      class=" img"
    />
    <div class="d-flex justify-content-between">
    <p class="mb-1">${data.title}</p>
    <p class="action mb-1">...</p>
    </div>
    <p class="mb-1">Written by ${data.author}</p>
    <div class="d-flex justify-content-between">
    <p class="mb-1">${data.date}</p>
        <p class="mb-1">${data.time}</p>
    </div>
  </div>
    `
});
const response6 = await fetch("https://inshorts.deta.dev/news?category=technology");
const res6 = await response6.json();
techData = res6.data;
techData.forEach((data) =>{
    tech.innerHTML += `
    <div class="col-lg-3 col-md-4 mb-2 p-3 bg-white">
    <img
      src="${data.imageUrl}"
      alt=""
      class=" img"
    />
    <div class="d-flex justify-content-between">
    <p class="mb-1">${data.title}</p>
    <p class="action mb-1">...</p>
    </div>
    <p class="mb-1">Written by ${data.author}</p>
    <div class="d-flex justify-content-between">
    <p class="mb-1">${data.date}</p>
        <p class="mb-1">${data.time}</p>
    </div>
  </div>
    `
});
}

fetchFromAPI();