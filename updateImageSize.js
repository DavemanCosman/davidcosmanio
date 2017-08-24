function updateImageSize() {
    // Get the dimensions of the viewport
    var width = window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    var height = window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

    if (width >= 768) {
        document.getElementById('smallpic').hidden = true;
        document.getElementById('bigpic').hidden = false;
    }
    else {
        document.getElementById('smallpic').hidden = false;
        document.getElementById('bigpic').hidden = true;
    }
}
updateImageSize();					// When page first loads
window.onresize = updateImageSize;	// When the browser changes size