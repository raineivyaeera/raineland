
function newTextArea(){
    var textarea = document.createElement("textarea");
    var br = document.createElement("br");
    var insertionDIV = document.getElementById("insertion");
    
    insertionDIV.append(textarea);

    // document.body.appendChild(textarea);
    // textarea.appendChild(br);
}