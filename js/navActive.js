(function()
{   
    var menu = document.querySelector('ul'),
        menulink = document.querySelector('i');

    menulink.addEventListener('click', function(e)
    {
        menu.classList.toggle('active')
        e.preventDefault();
    })

})();

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}