function newTextArea() {
    var textarea = document.createElement("textarea");
    var insertionDIV = document.getElementById("insertion");

    insertionDIV.insertBefore(textarea, insertionDIV.firstChild);
}
// <input type="range" min="0" max="100" value="50" id="slider">
