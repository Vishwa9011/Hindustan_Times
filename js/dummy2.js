console.log("This is my index js file");

// Initialize the news api parameters
let source = "india";
let apiKey = "dea5b4f8aa0a4689a5270d536e036b5c";

// Grab the news container
let newsAccordion = document.getElementById("newsAccordion");

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=de&category=general&apiKey=${apiKey}`,
  true
);

// What to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";
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
