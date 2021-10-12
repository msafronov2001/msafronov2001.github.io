
function st() {
    var p = document.getElementById("price").value;
    var c = document.getElementById("count").value;
    var r = document.getElementById("result");
    r.innerHTML = p * c;
}
window.document.addEventListener("DOMContentLoaded", function (st) {
    console.log("DOM fully loaded and parsed");
    var b = document.getElementById("button");
    b.addEventListener("click", st);
});