+function(){

    let mobButton = document.querySelector('.mob__menu_buttom');
    let mobMenu = document.querySelector('.menu');

        mobButton.addEventListener('click', mobMenuDown);

        function mobMenuDown () {
            if(mobMenu.classList.contains('menu__active')) {
                mobMenu.classList.remove('menu__active');     
            }
            else {mobMenu.classList.add('menu__active');}
        }       
        

}()
