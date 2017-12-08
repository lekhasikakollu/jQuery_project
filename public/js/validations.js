//Email validation  
function isValidEmail(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
    }

    function isValidForm(data){     
   var errorStatusHandle = $('#messageline'); 
    // var errorStatusHandle = document.getElementById('messageline'); 
    errorStatusHandle.innerText=" ";   
        if(data.fname==""){
            errorStatusHandle.text("First name cannot be empty!");
            return false;
        }

        if(data.lname==""){
            errorStatusHandle.text("Last name cannot be empty!");
            return false;
        }
        if(data.email==""||!isValidEmail(data.email)){
            //alert('coming to email')
            errorStatusHandle.text("Invalid email!");
            return false;

        }
        
        if(data.phone==""){
            errorStatusHandle.text("Phone number cannot be empty!");
            return false;
        }
        if(data.phone.length!=12){
            errorStatusHandle.text("Invalid phone number!");
            return false;
        }
        if(data.phone==""){
            errorStatusHandle.text("Work Phone number cannot be empty!");
            return false;
        }
        if(data.wphone.length!=12){
            errorStatusHandle.text("Invalid work phone number!");
            return false;
        }

        if(data.addr1==""){
            errorStatusHandle.text("Address cannot be empty!");
            return false;
        }
        if(data.city==""){
            errorStatusHandle.text("City cannot be empty!");
            return false;
        }
        if(data.state==""){
            errorStatusHandle.text("State cannot be empty!");
            return false;
        }
        if(data.gender==""){
            errorStatusHandle.text("Select gender !");
            return false;
        }
        if(data.zip==""){
            errorStatusHandle.text("Enter zipcode  !");
            return false;
        }
        if(data.lang==""){
            errorStatusHandle.text("Select languages  !");
            return false;
        }


        return true;

        

}

