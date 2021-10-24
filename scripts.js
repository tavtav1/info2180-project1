/* Add your JavaScript to this file */


window.onload = function(){
    const email = document.getElementById('email')
    const message = document.querySelector('.message')
    
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    document.querySelector('button'),addEventListener('submit', function(e){
        
//        if (email.value === '' || email.value == null){
//            e.preventDefault()
//            message.innerText = 'Please enter a valid email address!'
//        
//    }
        if (email.value.match(pattern)){
          message.innerHTML = `Thank you! Your email address ${email.value} has been added to our mailing list!`;
    
                            }
        else{
            e.preventDefault()
            message.innerText = 'Please enter a valid email address!'
        }
        
    }); // end of submit function

} // end of the onload function

    
    
    
    
    
    
    //function message() {
//    "use strict";
//    var newbutton, pattern, email;
//    newbutton = document.getElementsByTagName("button")[0];
//    
//    pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
//    
//    newbutton.addEventListener("click", function (f) {
//        email = document.getElementById("email").value;
//        f.preventDefault();
//        
//        if (email.match(pattern)) {
//            document.getElementsByClassName("message")[0].innerHTML = `Thank you! Your email address ${email} has been added to our mailing list`;
//                                } //end of if statement   
//        
//        else{
//            document.getElementsByClassName("message")[0].innerHTML = "Please Input Valid Email Address";
//            } //end of else statement
//  
//                                                }
//                         ); //end of click function
//                } //end of function message

    
    



    
    
    
