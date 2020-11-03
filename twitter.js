//Get the modal

window.onload = function() {
    var modal = document.getElementById("myModal");
    // Get the button that opens the modal
    // When the user clicks the button, open the modal 
    var btn = document.getElementById("button-register-id");
    var myForm = document.getElementById('myForm');

    btn.onclick = function () {
        modal.style.display = "block";
    }

    // form'un sayfayı refresh ettirmemesi için yazılan function
    function handleForm(event) {
        event.preventDefault();
    }
   
   // form içinde gerçekleşen olayları dinler biz submit olayını dinledik.
    myForm.addEventListener('submit', handleForm);
}
