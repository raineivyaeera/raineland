function newCapture() {
    ta = document.createElement("textarea");
    br = document.createElement("br");
    document.body.append(br);
    document.body.append(br);
    document.body.append(ta);
}
function reset() {
    window.location.reload();
}