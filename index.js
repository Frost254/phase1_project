function renderHotel(hotel) {
    let box = document.createElement("div");
    box.className = "box";
    box.innerHTML = `
    <h1>${hotel.name}</h1>
    <img src="${hotel.imageUrl}" alt = "hotel-picture">
    <p>${hotel.description}</p>
    `
    const btn = document.createElement("button");
    btn.innerText = "Click me to like";
    btn.addEventListener("click", () => {
        const likes = hotel.likes;
        const likeCounter = document.createElement("p");
        likeCounter.innerHTML = likes + " likes";
    })

    box.appendChild(btn);
    document.querySelector(".boxes .container").appendChild(box)
}

function renderComments(params) {

}

function getHotelData() {
    fetch("http://localhost:3000/hotelData")
        .then(res => res.json())
        .then(hotelData => hotelData.forEach(hotel => renderHotel(hotel)))
}

function initialize() {
    getHotelData();
    // hotelData.forEach(hotel => renderHotel(hotel))
}

initialize()