const order = document.querySelector("#ordered");
order.addEventListener('click', makeOrder);

const comments = document.querySelector("#submitted");
comments.addEventListener('click', addComment);

const array = document.querySelectorAll(".demo.cursor");
for (let i = 0; i < array.length; i++) {
    array[i].addEventListener('click', currentSlide);
}

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(e) {
    showSlides(e.target.dataset.imgnum);
}

function showSlides(n) {
    n = Number(n);
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) { n = 1 }
    if (n < 1) { n = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[n - 1].style.display = "block";
    dots[n - 1].className += " active";
    captionText.innerHTML = dots[n - 1].alt;
}


function makeOrder() {
    let firstNameBox = document.getElementById('fnameb');
    let secondNameBox = document.getElementById("snameb");
    let lastNameBox = document.getElementById('lnameb');
    let cityBox = document.getElementById("city");
    let addressBox = document.getElementById("address");
    let successOrd = document.getElementById("successfulOrder");
    let errorOrd = document.getElementById("errorOrder");
    successOrd.textContent = " "

    if (firstNameBox.value == '' || secondNameBox.value == '' || lastNameBox.value == '' || cityBox.value == '' || addressBox.value == '') {
        errorOrd.textContent = "Не сте въвели всички полета! Опитайте отново."
        errorOrd.style.color = "red"
    } else {
        errorOrd.textContent = " "
        successOrd.textContent = firstNameBox.value + " " + lastNameBox.value + ", Благодарим Ви за поръчката!"
        successOrd.style.color = "green"

        firstNameBox.value = "";
        secondNameBox.value = "";
        lastNameBox.value = "";
        cityBox.value = "";
        addressBox.value = "";
    }

}

function addComment() {
    let firstNameBox = document.getElementById('fnamec');
    let lastNameBox = document.getElementById('lnamec');
    let commBox = document.getElementById('comment');
    let fn = firstNameBox.value;
    let ln = lastNameBox.value;
    let comm = commBox.value;
    let errorCom = document.getElementById("errorComment");

    if (fn == '' || ln == '' || comm == '') {
        errorCom.textContent = "Не сте въвели всички полета! Опитайте отново, моля."
        errorCom.style.color = "red"
    } else {
        errorCom.textContent = " "
        var tag = document.createElement("p");
        var text = document.createTextNode(fn + " " + ln + " коментира: " + comm);
        tag.prepend(text);
        var element = document.getElementById("new");
        element.prepend(tag);

        firstNameBox.value = "";
        lastNameBox.value = "";
        commBox.value = "";
    }
}