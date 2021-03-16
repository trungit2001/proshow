var randomID = () => Math.floor(Math.random() * 1084);
var id = undefined;

loadImg = idImg => {
    var linkImg = `https://picsum.photos/id/${idImg}/600/450`;
    id = idImg;
    
    fetch(linkImg)
    .then(function (resovled) {
        if (resovled.status == 200) {
            document.querySelector("#img").src = resovled.url;
        } else {
            return loadImg(randomID());
        }
    })
}

window.onload = loadImg(randomID());

prev = () => {
    id--;
    if (id < 0) id = 1084;
    loadImg(id);
}

next = () => {
    id++;
    if (id > 1084) id = 0;
    loadImg(id);
}

var intervalVar = undefined;

function play() {
    var time = document.querySelector("#time").value;
    console.log(time);
    if (time < 1 || time > 10) alert("Time is [1, 10] seconds.");
    else {
        var elem = document.querySelector(".btn.btn4");
        elem.disabled = false;
        elem.style.cursor = "pointer";

        intervalVar = setInterval(next, time * 1000);
    }
}

function stop() {
    clearInterval(intervalVar);
    var elem = document.querySelector(".btn.btn4");
    elem.disabled = true;
    elem.style.cursor = "default";
}