function renderHotel(hotel) {
    let box = document.createElement("div");
    box.className = "box";
    box.innerHTML = `
    <h1>${hotel.name}</h1>
    <img src="${hotel.imageUrl}" alt = "hotel-picture">
    <p>${hotel.description}</p>
    <p class="like">${hotel.likes} likes</p>
    `
    document.querySelector(".boxes .container").appendChild(box)
    const btn = document.createElement("button");
    btn.innerText = "Click me to like";
    btn.addEventListener("click", () => {
        hotel.likes += 1;
        let p = document.querySelector(".like");
        p.innerText = `${hotel.likes}` + " likes";
    })
    box.appendChild(btn);
}

function renderComments(params) {

}

function getHotelData() {
    fetch("http://localhost:3000/hotelData")
        .then(res => res.json())
        .then(hotelData => hotelData.forEach(hotel => renderHotel(hotel)))
}

function getCommentData() {
    fetch("http://localhost:3000/comments")
        .then(res => res.json())
        .then(commentData => commentData.forEach(comment => renderComments(comment)));
}

function initialize() {
    getCommentData();
    getHotelData();
    // hotelData.forEach(hotel => renderHotel(hotel))
}

initialize()