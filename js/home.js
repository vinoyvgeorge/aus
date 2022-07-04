
(async () => {
    const data = await fetch('mock/news.json')
        .then(response => response.json())
        .then(data => data);

    console.log(data)

    const mainNews = data.shift();

    let home = `
    <div class="d-col-6">
        <div class="news">
            <img class="img-news" src="${mainNews.Imageurl}" />
            <h3 onclick="onNavigate('/news/:id'); return false;"> <img class="img-icon" src="assets/rainbow-flag.png" /> ${mainNews.Title}</h3>
            <p> ${mainNews.Intro}
            </p>
            <div class="news-footer">
                <i class="fa fa-clock-o"></i>${mainNews.TimeAgo} 
                <i class="fa fa-comments-o" aria-hidden="true"></i>
            </div>
        </div>
    </div>`;
    let subnews = '';
    for (const x in data) {
        if (x == 0) {
            subnews += ` 
        <div class="news">
            <img class="img-news" src="${data[x].Imageurl}" />
            <h3 onclick="onNavigate('/news/:id'); return false;"> <img src="assets/rainbow-flag.png" class="img-icon" /> ${data[x].Title}</h3>
            <p>${data[x].Intro}</p>
            <div class="news-footer">
                <i class="fa fa-clock-o"></i> ${data[x].TimeAgo}
                <i class="fa fa-comments-o" aria-hidden="true"></i>
            </div>
        </div>`;
        } else {
            subnews += ` 
        <div class="news">
            <div class="news-thumb">
                <h4 onclick="onNavigate('/news/:id'); return false;"><img class="img-icon" src="assets/rainbow-flag.png" /> ${data[x].Title}
                </h4>
                <img class="img-news-thumb" src="${data[x].Imageurl}" />
            </div>
            <div class="news-footer">
                <i class="fa fa-clock-o"></i> ${data[x].TimeAgo}
                <i class="fa fa-comments-o" aria-hidden="true"></i>
            </div>
        </div>`;
        }



    }


    home += `
        <div class="d-col-6">
            <div>
                ${subnews}
            </div>
        </div>`

    pubsub.publish(window.location.pathname, home)
})()

