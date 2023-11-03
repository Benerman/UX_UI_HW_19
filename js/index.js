
$(".menuItems").find("a").on("click", function() {
    console.log(this)
    $(".checkbox").prop("checked",false);
});



$("a").on('click', function(event) {

    if (this.hash !== "") {
    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 800, function(){

        window.location.hash = hash;
    });
    } 
});


// $('#contactSubmitForm').on("submit", function(e) {
//     e.preventDefault();
//     var first = document.getElementById('firstName');
//     var last = document.getElementById('lastName');
//     var email = document.getElementById('email');
//     var phone = document.getElementById('phone');
//     var subject = document.getElementById('subject');
//     var message = document.getElementById('message');

//     if (.value ==) {
//         ('border-color', 'red');
//     }

// });