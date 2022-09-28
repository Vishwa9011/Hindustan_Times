// Main left
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
    let showContent = `
                        <div class="left-news">
                            <h5>${el.heading}</h5>
                            <p>${el.time}</p>
                        </div>
                        <hr>
        `;
    latestNews.innerHTML += showContent;
  });
}

showRecommended(main_left_recommended);
function showRecommended(data) {
  data.forEach(function (el) {
    let showContent = `
                        <div class="left-news">
                            <h4>${el.heading}</h4>
                            <p>${el.time}</p>
                        </div>
                        <hr>
        `;
    document.querySelector("#recommended").innerHTML += showContent;
  });
}

// Mid Section Data

let midBigimg = [
  {
    heading: `Rajasthan crisis: Three Gehlot loyalists issued notice for ‘gross indiscipline’`,
    channelName: `Jaipur News`,
    time: `Updated on Sep 27, 2022 09:42 PM IST`,
    image: `https://images.hindustantimes.com/img/2022/09/27/550x309/PTI09-27-2022-000059B-0_1664293801447_1664293801447_1664293820108_1664293820108.jpg`,
  },
  {
    heading: `Bigg Boss 16: Salman Khan announces first contestant Abdu Rozik`,
    channelName: `Tv`,
    time: `Published on Sep 27, 2022 08:44 PM IST`,
    image: `https://images.hindustantimes.com/img/2022/09/27/550x309/abdu-rozik-bigg-boss-16_1664291281400_1664291281576_1664291281576.png`,
  },
  {
    heading: `Soha Ali Khan’s daughter Inaaya follows the Navratri colours, twins with mom`,
    channelName: `Bollywood`,
    time: `Published on Sep 27, 2022 10:09 PM IST`,
    image: `https://images.hindustantimes.com/img/2022/09/27/550x309/soha_ali_khan_1664296300515_1664296309731_1664296309731.jpg`,
  },
  {
    heading: `Dog gives company to tortoise friend as it eats a flower. Watch sweet video`,
    channelName: `Trending`,
    time: `Updated on Sep 27, 2022 09:42 PM IST`,
    image: `https://images.hindustantimes.com/img/2022/09/27/550x309/Instagram_Video_Tortoise_Dog_1664287197275_1664287204385_1664287204385.PNG`,
  },
];

let midFlatimgNews = [
  {
    heading: `Will apply ‘rule of majority’, says CEC Rajiv Kumar on Shinde vs Uddhav case`,
    channelName: `India News`,
    time: `Published on Sep 27, 2022 09:33 PM IST`,
    image: `https://images.hindustantimes.com/img/2022/09/27/150x84/e0e43e8e-3e7c-11ed-9cc8-d27a5412b6e4_1664294578938.jpg`,
  },

  {
    heading: `CBI's 1st arrest in Delhi excise policy case is AAP worker and bizman Vijay Nair`,
    channelName: `India News`,
    time: `Published on Sep 27, 2022 09:33 PM IST`,
    image: `https://images.hindustantimes.com/img/2022/09/27/148x111/f8c4aa06-3bd5-11ed-8b5b-641320d18bc4_1664043146903_1664291902600_1664291902600.jpg`,
  },
  {
    heading: `‘Super Sniffer' dog squad to keep eye on cheetahs at Kuno National Park`,
    channelName: `India News`,
    time: `Published on Sep 27, 2022 09:33 PM IST`,
    image: `https://images.hindustantimes.com/img/2022/09/27/148x111/79ebb766-36b1-11ed-aaf6-899a59fb6c14_1663437309427_1664288290459_1664288290459.jpg`,
  },
  {
    heading: `Will apply ‘rule of majority’, says CEC Rajiv Kumar on Shinde vs Uddhav case`,
    channelName: `India News`,
    time: `Published on Sep 27, 2022 09:33 PM IST`,
    image: `https://images.hindustantimes.com/img/2022/09/27/150x84/e0e43e8e-3e7c-11ed-9cc8-d27a5412b6e4_1664294578938.jpg`,
  },
  {
    heading: `‘Super Sniffer' dog squad to keep eye on cheetahs at Kuno National Park`,
    channelName: `India News`,
    time: `Published on Sep 27, 2022 09:33 PM IST`,
    image: `https://images.hindustantimes.com/img/2022/09/27/148x111/bigg_bos_salman_khan_1662951602483_1664294328317_1664294328317.JPG`,
  },
  {
    heading: `'I don't agree with it': Rathour's reply as journalist questions India's batting`,
    channelName: `Cricket`,
    time: `Published on Sep 27, 2022 09:33 PM IST`,
    image: `https://images.hindustantimes.com/img/2022/09/27/148x111/vikram-rathour-getty_1664288987125_1664288992343_1664288992343.jpg`,
  },
  {
    heading: `On Ranbir Kapoor's birthday, some of his most romantic pics with Alia Bhatt`,
    channelName: `Bollywood News`,
    time: `Published on Sep 27, 2022 09:33 PM IST`,
    image: `https://images.hindustantimes.com/img/2022/09/27/148x111/Ranbir_Kapoor_Alia_Bhatt_1664283096389_1664283118832_1664283118832.jpg`,
  },
];

showMidNews(midFlatimgNews);

function showMidNews(data) {
  data.forEach(function (data) {
    let showContent = `
                    <div class="flat-images">
                      <div>
                          <h3>${data.heading}</h3>
                          <p class="channel-name">${data.channelName}</p>
                          <p>${data.time}</p>
                      </div>
                      <img src="${data.image}"
                          alt="">
                     </div>
    `;
    document.querySelector(".mid-img-news").innerHTML += showContent;
  });
}
