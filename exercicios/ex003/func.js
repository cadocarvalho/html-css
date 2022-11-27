document.getElementById('myvideo').addEventListener('ended',videoEndHandler,false);
function videoEndHandler(e) {
    document.getElementById('btn').style.display = "block";
}


 