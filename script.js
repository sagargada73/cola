// preloader Script
var intervalId = window.setInterval(function(){
    if(cola.modelIsVisible){
        console.log("true")
        document.getElementById("preloader").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(intervalId)
    }
  }, 500);

  var scrollSpeed = 1;
  const cola = document.querySelector("model-viewer#cola");
    window.addEventListener('load', function () {

        if (this.window.innerWidth <= 1024) {
            scrollSpeed = .7;
        } else if (this.window.innerWidth = 1440) {
            scrollSpeed = 1.3;
        }
    })
    var yaw = ''
    var flag = 1;
    document.addEventListener('scroll', function (e) {
        var winCan = window.innerWidth - cola.offsetWidth;
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

        cola.updateFraming();
        updateOrientation();
        yaw = window.scrollY;
    })

    const updateOrientation = () => {
        cola.orientation = `-20deg 0deg ${yaw}deg`;
    };