
function newTextArea(){
    var textarea = document.createElement("textarea");
    var insertionDIV = document.getElementById("insertion");
    
    insertionDIV.insertBefore(textarea, insertionDIV.firstChild);

    // insertionDIV.append(textarea);

}