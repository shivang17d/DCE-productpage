
let http = new XMLHttpRequest();


http.open("GET", "hello.json", true);

http.send();

http.onload = function () {

    let data = JSON.parse(this.responseText);
    let output = `<div id="slider">
        <h2>Products</h2>
        <figure>
            <img src="Property 1=Default.png" alt="">
            <img src="Property 1=Variant14.png" alt="">
            <img src="Property 1=Variant11.png" alt="">
            <img src="Property 1=Variant8.png" alt="">
            <img src="Property 1=Default.png" alt="">
        </figure>
    </div>
    <div class="container">`


    for (let item of data) {
        output += `
            <div class="blog-post">
            <div class="blog-post_img">
                <img src="${item.image}" alt=""> 
            </div>
            <div class="blog-post_info">
                <h1 class="blog-post_title">${item.title}</h1>
                <p class="blog-post_text">${item.description}</p>
                <a href="${item.readmore}" class="blog-post_cta">Read More</a>
                <a href="${item.downloadpdf}" class="blog-post_cta">Download</a>
            </div>
        </div>`;
    }

    output += `</div>`
    console.log(output)

    document.querySelector(".products").innerHTML = output;


}