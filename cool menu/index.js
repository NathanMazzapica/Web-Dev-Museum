const menu = document.getElementById("menu");
console.log("hi")
console.log(menu)

Array.from(document.getElementsByClassName("menu-item")).forEach((item,index) => {
    console.log("idk bro")
    item.onmouseover = () => {
        menu.dataset.activeIndex = index;
        console.log("rape")
    }
});