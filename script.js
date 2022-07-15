// nav bar 
let menu_btn = document.querySelector(".menu_btn");
let close_btn = document.querySelector(".close_btn");
let navbar = document.querySelector(".navbar");
let body = document.querySelector("body");
let nav = document.querySelector("nav");
menu_btn.onclick = function () {
    menu_btn.style.opacity = "0";
    navbar.classList.add("show");
    body.style.overflow = "hidden";
}
close_btn.onclick = function () {
    menu_btn.style.opacity = "1";
    navbar.classList.remove("show");
    body.style.overflow = "auto";
}


// fetching news

fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=e0f400cd187f4e479e98e5e3abbfc5f1")
    .then(res => res.json()).then(result => {
        const resu = result.articles;
        const wrap = document.querySelector(".wrap");

        resu.forEach(elem => {
            console.log(elem)
            const div = document.createElement("div");
            div.classList.add("container");
            div.innerHTML = `
        <div class="services_img">
        <img src="${elem.urlToImage}" alt="no img" srcset="no img">
    </div>
    <div class="services_text">
        <div class="title" id="title">${elem.title}</div>
        <div class="disc">${elem.description} </div>
            <a href="${elem.url}">Read More..</a>
        <div class="source">${elem.author}</div>
        <div class="time">${elem.publishedAt}</div>
        `;
            wrap.appendChild(div);



        });
    })


