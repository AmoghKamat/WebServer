

// var address = document.getElementById('address').value;

// var populateAddress = 'My Address';

// function outputname(elementId, outputelement) {
//     var name = document.getElementById(elementId).value;
//     document.getElementById(outputelement).innerHTML = name;
    
// }
// var name = document.getElementById('address').value;


// if(address) {
//     outputname('name', 'js-output');
// } else {
//     checkAddress('address');
// }


// function checkAddress(elementid) {
//     document.getElementById(elementid).value = populateAddress;

// }


function validateMyForm() {
    var form = document.getElementById('contactform');
    var name = document.getElementById('name').value;
    var errorMessage = document.querySelector('.output-errors');



    form.addEventListener("submit", function (event){
        var address = document.getElementById('address').value;
        var name = document.getElementById('name').value;
        var phone= document.getElementById('phone').value;

        if(errorMessage.innerHTML.trim()) {
            return;
        }
        if(!address) {
            document.getElementById('address').className = 'error';
            errorMessage.innerHTML += '<p>Please fill the Address</p>';
            event.preventDefault();
        } else if(!name){
            document.getElementById('name').className = 'error';
            errorMessage.innerHTML += '<p>Please fill the Name</p>';
            event.preventDefault();
        }
        else if(!phone){
            document.getElementById('phone').className = 'error';
            errorMessage.innerHTML += '<p>Please fill the Phone </p>';
            event.preventDefault();
        }
    });
}

validateMyForm();