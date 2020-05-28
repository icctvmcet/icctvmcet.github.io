$(document).ready(function () {
    $('.modal').modal();
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.slider').slider({ full_width: true });
    $('.portfolio').carousel({
        numVisible: 5,
        shift: 55,
        padding: 55
    });
    $('.scrollspy').scrollSpy();

})

function toggleModal() {       // Modal screen activation when click on events
    var instance = M.Modal.getInstance($('#modal3'));
    instance.open();
}

function readMore() {       // Read More and Read Less Button Function
    var about = $('.more');
    var button = $('.readMore-btn');
    if (about.css("display") === "none") {
        about.css("display", "inline");
        button.html("Read Less");
    } else {
        about.css("display", "none");
        button.html("Read More");
    }
}