document.addEventListener("DOMContentLoaded", function () {
    let mainImage = document.querySelector(".main-image img"); 
    let thumbnails = document.querySelectorAll(".thumbnail-container img");
    let currentIndex = 0;


    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener("click", function () {
            mainImage.src = this.src;
            currentIndex = index;
        });
    });


    document.querySelector(".prev").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        mainImage.src = thumbnails[currentIndex].src;
    });

    
    document.querySelector(".next").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        mainImage.src = thumbnails[currentIndex].src;
    });
});


const plus = document.querySelector('.plus');
minus = document.querySelector('.minus');
num = document.querySelector('.num');

let a = 1

plus.addEventListener('click', () => {
    a++;
    num.innerHTML = a;
});

minus.addEventListener('click', () => {
    if(a>0){
        a--;
        num.innerHTML = a;
    }
});


function togglemenu(){
    document.querySelector('.nav-items').classList.toggle('show');
}


window.onscroll = function() {
    let navbar = document.querySelector(".navbar");
    if (window.innerWidth < 1024){
        if (window.pageYOffset > 0){
            navbar.style.backgroundColor = '#fff'
            navbar.style.boxShadow = "0 4px 8px rgba( 0 ,0 ,0 ,0.1)"
        }
        else{
            navbar.style.backgroundColor = "transparent"
            navbar.style.boxShadow = 'none'
        }
    }
    else{
        // navbar.style.backgroundColor = "#fff"
    }

};