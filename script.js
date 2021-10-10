// preloader Script
var intervalId = window.setInterval(function () {
    if (cola.modelIsVisible) {
        console.log("true")
        document.getElementById("preloader").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(intervalId)
    }
}, 500);

var scrollSpeed = 1;
var windowType = "big"
const cola = document.querySelector("model-viewer#cola");
window.addEventListener('load', function () {
    if (this.window.innerHeight <= 640) {
        windowType = "small";
        scrollSpeed = 1;
        cola.orientation = `-90deg 0deg ${yaw}deg`;
    }
    else if (this.window.innerWidth <= 1024) {
        scrollSpeed = .7;
        windowType = "big";
        cola.orientation = `-20deg 0deg ${yaw}deg`;
    } else if (this.window.innerWidth = 1440) {
        scrollSpeed = 1.3;
        windowType = "big";
        cola.orientation = `-20deg 0deg ${yaw}deg`;
    }
})
var yaw = ''
var flag = 1;
document.addEventListener('scroll', function (e) {
    var winCan = window.innerWidth - cola.offsetWidth;
    if (windowType == "big") {
        if (flag == 1) {
            cola.style.right = scrollSpeed * window.scrollY + 'px';
            cola.style.top = 80 + window.scrollY + 'px';
            if (winCan < (scrollSpeed * window.scrollY)) {
                flag = 2;
            }
        } else {
            cola.style.right = (winCan - (scrollSpeed * window.scrollY - winCan)) + 'px';
            cola.style.top = 80 + window.scrollY + 'px';
            if (winCan > scrollSpeed * window.scrollY) {
                flag = 1;
            }
        }
    } else {
        cola.style.top = 20 + scrollSpeed * window.scrollY + 'px';
    }
    updateOrientation();
    yaw = window.scrollY;
    cola.updateFraming();

})

function updateOrientation() {
    if (windowType == "big") {
        cola.orientation = `-20deg 0deg ${yaw}deg`;
    } else {
        cola.orientation = `-90deg ${yaw}deg 0deg`;
    }
};

//toggle
const menuToggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
menuToggle.onclick=function(){
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
