
//changes the navbar to dark on scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >= 100) {
        header.classlist.add('navbarDark');
    }
    else {
        header.classlist.remove('navbarDark');
    }
};