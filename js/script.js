function OnButtonClick() {
    var shapeEle = document.getElementById("sq-one");
    shapeEle.classList.add("sq");
    shapeEle.classList.add("spin");

    setTimeout(() => {
        shapeEle.classList.remove("sq");
        shapeEle.classList.remove("spin");
    }, 3000);
}