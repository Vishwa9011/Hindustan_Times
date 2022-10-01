let main_left_latest_news = [
  {
    heading: `'I don't agree with it': Rathour's reply as journalist questions India's batting`,
    time: `Published on Sep 27, 08:12 PM IST`,
  },
  {
    heading: `What really excites Ratan Tata? Harsh Goenka shares video. Watch`,
    time: `Published on Sep 27, 08:10 PM IST`,
  },
  {
    heading: `Electric poles in this Bengaluru road worries residents`,
    time: `Published on Sep 27, 08:10 PM IST`,
  },
  {
    heading: `Dog gives company to tortoise friend as it eats a flower. Watch sweet video`,
    time: `Published on Sep 27, 08:10 PM IST`,
  },
  {
    heading: `Table Tennis star Sreeja Akula deprived of prize money since her win in April`,
    time: `Published on Sep 27, 08:10 PM IST`,
  },
];

let main_left_recommended = [
  {
    heading: `'Just before World Cup...': Dale Steyn shares cryptic message for Virat Kohli after India vs Australia 3rd T20I`,
    time: `Updated on Sep 26, 2022 01:27 PM IST`,
  },
  {
    heading: `BJP maintains a close watch on Rajasthan, prepares for early elections`,
    time: `Published on Sep 27, 2022 12:07 AM IST`,
  },
  {
    heading: `Koffee With Karan 7: Karan Johar reveals why not being invited to Vicky Kaushal, Katrina Kaif's wedding was embarrassing`,
    time: `Updated on Sep 27, 2022 03:29 PM IST`,
  },
  {
    heading: `Dog gives company to tortoise friend as it eats a flower. Watch sweet video`,
    time: `Published on Sep 27, 08:10 PM IST`,
  },
  {
    heading: `British pound plummets to record low, but why Rishi Sunak's prediction trending`,
    time: `Updated on Sep 26, 2022 07:13 PM IST`,
  },
];

let latestNews = document.querySelector(".main-left-news");
showLatestNews(main_left_latest_news);
function showLatestNews(data) {
  data.forEach(function (el) {
    let showContent = `<div class="left-news">
                                    <h5>${el.heading}</h5>
                                    <p>${el.time}</p>
                                </div>
                                <hr>`;
    latestNews.innerHTML += showContent;
  });
}
showRecommended(main_left_recommended);
function showRecommended(data) {
  data.forEach(function (el) {
    let showContent = `<div class="left-news">
                                    <h4>${el.heading}</h4>
                                    <p>${el.time}</p>
                                </div>
                                <hr>`;
    document.querySelector("#recommended").innerHTML += showContent;
  });
}
// <=====================This is for right flat  news =============================>
console.log("This is my index js file");
// Initialize the news api parameters
let categoryright = "business";
let countryright = "us";
let apiKeyright = "dea5b4f8aa0a4689a5270d536e036b5c";

// Create an ajax get request
const xhrright = new XMLHttpRequest();
xhrright.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=${countryright}&category=${categoryright}&apiKey=${apiKeyright}`,
  true
);
// What to do when response is ready
xhrright.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    articles.forEach(function (data) {
      let showright = `<div class="main-right-flat-card">
                                <div class="h5">
                                    <h5><a href="${data.url}" target="_blank" >${data.title} </a></h5>
                                </div>
                                <a href="${data.url}" target="_blank" ><img src="${data.urlToImage}" alt=""></a>
                             </div>
                             <hr>`;
      document.querySelector(".main-right-flat-img").innerHTML += showright;
    });
  } else {
    console.log("Some error occured");
  }
};
xhrright.send();

// <==========================This is end of the right flat news ===========================>

// <================ This is for mid big news ======================>
// Initialize the news api parameters
let category = "health";
let country = "in";
let apiKey = "dea5b4f8aa0a4689a5270d536e036b5c";

// Grab the news container
let newsAccordion = document.getElementById("newsAccordion");

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`,
  true
);

// What to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    articles.forEach(function (data) {
      let imgBigCount = 6;
      let bigImgContent = `<div class="mid-big-news">
                                  <h2><a href="${data.url}" target="_blank">${data.title}</a></h2>
                                  <p class="channel-name">Jaipur News</p>
                                  <p>Updated on Sep 27,2022 09:42 PM IST</p>
                                  <a href="${data.url}" target="_blank"><img src="${data.urlToImage}" alt=""></a>
                                </div>
                                <div class="mid-img-news"></div>
                              `;
      let showContent = `<div class="flat-images">
                              <div>
                                  <h3><a href="${data.url}" target="_blank">${data.title}</a></h3>
                                  <p class="channel-name">${data.source.name}</p>
                                  <p>${data.publishedAt}</p>
                              </div>
                              <div class='flat-images-img'>
                                <a href="${data.url}" target="_blank"><img src="${data.urlToImage}" alt=""></a>
                              </div>
                            </div>`;
      //   if (imgBigCount == 6) {
      document.querySelector(".mid-news-big-small").innerHTML += bigImgContent;
      //         imgBigCount = 0;
      //   } else {
      document.querySelector(".mid-img-news").innerHTML += showContent;
      //   }
      imgBigCount++;
      // console.log(imgBigCount);
    });
  } else {
    console.log("Some error occured");
  }
};

xhr.send();
