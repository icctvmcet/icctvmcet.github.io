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
    formcall();

})
function changer(selector) {    // changing window for registration
    window.location.replace('./registration.html' + '?Selector=' + selector);
}

function formcall() {   // showing required content only (registration forms)
    var registration = $('.al-1');
    var bookcollection = $('.al-2');
    let contribute = $('.al-3');
    let scolarship = $('.al-4');
    let selector = document.location.search.replace(/^.*?\=/, '');
    if (selector === 'registration') {
        registration.css("display", "inline");
    } else if (selector === "bookcollection") {
        bookcollection.css("display", "inline");
    }
    else if (selector === "contribute") {
        contribute.css("display", "inline");
    }
    else if (selector === "scolarship") {
        scolarship.css("display", "inline");
    }
}

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