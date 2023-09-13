function onClickMenu() {
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("sidebar").classList.toggle("change");
};

AOS.init({
    delay: 400,
    duration: 1000,
    offset: 300,
});