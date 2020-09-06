"use strict";
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }
//
// function myFunction2(self) {
//     document.getElementById("myDropdown2").classList.toggle("show");
// }

var menuBtn = document.getElementsByClassName('dropbtn'); // беремо кнопку по класу

for (var i = 0; i < menuBtn.length; i++) { //додаємо івент лістенер до конної кнопки, в нас їх 2 може бути більше
    menuBtn[i].addEventListener('click', function (e) {
        var thisBtn = e.target; // через івент e беремо саме цю кнопку по якій відбувся клік
        thisBtn.nextElementSibling.classList.toggle("show"); // .nextElementSibling  звертається до наступного елемента в дом, там наш дропдаун
    });
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        // тут відбувається все те саме що описано з кнопкую, не потрібно дуюлювати код

        var dropdowns = document.getElementsByClassName("dropdown-content"); // беремо всі дропдауни
            var i;
            for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }

        // var dropdowns = document.getElementsByClassName("dropdown-content2");
        //     var i;
        //     for (i = 0; i < dropdowns.length; i++) {
        //     var openDropdown = dropdowns[i];
        //     if (openDropdown.classList.contains('show')) {
        //         openDropdown.classList.remove('show');
        //     }
        // }
    }
}
