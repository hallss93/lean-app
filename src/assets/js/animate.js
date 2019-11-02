/**
 * Animação feita sem bibliotecas
 */
const animateOut = () => {
    let widthScreen = window.innerWidth
    let heightScreen = window.innerHeight
    let App = document.querySelector('.App')
    let container = document.querySelector('.container')
    let form = document.querySelector('.form')
    let imgBack = document.querySelector('.img-background');

    form.style.opacity = 0;
    setTimeout(() => {
        if (widthScreen > 992) {
            App.style.overflowX = "hidden";
            container.style.flex = "0 0 100%"
            container.style.maxWidth = "100%"
            form.style.flex = "0 0 0%"
            form.style.minWidth = "0px"
            setTimeout(() => {
                form.style.display = "none"
                App.style.overflowX = "unset";
            }, 3000);
        } else {
            App.style.overflowY = "hidden";
            imgBack.style.backgroundSize = "auto 100%";
            container.style.height = `${heightScreen}px`
            setTimeout(() => {
                form.style.display = "none"
                App.style.overflowX = "unset";
            }, 3000);
        }
    }, 300);
}
module.exports = {
    animateOut
}