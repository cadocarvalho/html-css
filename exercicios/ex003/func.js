var aud = document.getElementsByTagName('iframe')[0];
var approxTime = 0
aud.ontimeupdate = function(){
    var currentTime = Math.floor(aud.currentTime);
    if (currentTime !== approxTime) {
        approxTime = currentTime;
        if (approxTime === 2) {
            document.querySelector('.btn').classList.add("show-btn")
        }
    }
};

