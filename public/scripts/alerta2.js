(() => {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup").style.flexDirection = "column";




})();

document.getElementById("popup-btn").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});

document.getElementById("popup-btn2").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});