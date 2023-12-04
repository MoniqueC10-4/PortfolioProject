function createCar({ make, model, price, img_url}) {

const article = document.createElement("article");
    article.classList.add("model");

const h3 = document.createElement("h3");
    h3.textContent = make;
    article.appendChild(h3)

const h4 = document.createElement("h4");
    h4.textContent = model;
    article.appendChild(h4)

const paragraph = document.createElement("p");
    paragraph.textContent = price;
    article.appendChild(paragraph)

const img = document.createElement("img");   
    img.src = img_url;
    img.alt = `${make} ${model}`;
    article.appendChild(img)

const body = document.querySelector("body")
    body.appendChild(article)

}

fetch("https://private-anon-57822765c8-carsapi1.apiary-mock.com/cars")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        for (model of data) {
            console.log(model)
            createCar(model)
        }
    })
    .catch(function(error) {
        console.log(error);   
    });
