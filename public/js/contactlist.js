
// window.onload = function() {    
//     loadMyPage('/contactsList',displayContactList);
// }

$(document).ready(function () {
    $.get('/contactsList', displayContactList);

});


function displayContactList(jsonData) {
    // alert('in display form');
    // console.log(jsonData);
    //console.log('printinggggggggg'+jsonData);
    // var jsonObj = JSON.parse(jsonData);

    dust.render('allContacts', jsonData, function (err, out) {
        console.log(err);
        console.log(out);
        $('#main').html(out);

    });
}


// function postMyPage(url , data , myCallback){
//     console.log('started AJAX call for '+url);
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange=function(){

//         console.log(this.readyState);

//         if(this.readyState == 4 && this.status == 200){
//             var responseText = xhttp.responseText;
//             myCallback(responseText);
//         }
//     };
//     xhttp.open("POST",url,true);
//     xhttp.setRequestHeader("Content-type","application/json;charset=UTF-8");
//     xhttp.send(data);
// }


// function loadMyPage(url, myCallback){
//     console.log('started AJAX call for '+url);
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange=function(){

//         //console.log(this.readyState);

//         if(this.readyState == 4 && this.status == 200){
//             var responseText = xhttp.responseText;
//             myCallback(responseText);
//         }
//     };
//     xhttp.open("GET",url,true);

//     xhttp.send();
// }

function getRadioValue(name) {
    var group = $('[name="' + name + '"]');
    //var group = document.getElementsByName(name);
    // alert('radio buttton array length'+group.length)
    for (var i = 0; i < group.length; i++) {
        if (group[i].checked) {
            return group[i].value;
        }
    }
    return '';
}

function getLanguage() {
    var checkbox = "";
    var langarray = $('.checkbox1');
    for (var i = 0; i < langarray.length; i++) {
        if (langarray[i].checked == true) {
            checkbox += ' ';
            checkbox += langarray[i].value;
        }
    }
    return checkbox.trim();


}

function submitForm() {
    var data = {};
    data.fname = document.forms.userForm.fname.value;
    data.lname = document.forms.userForm.lname.value;
    data.email = document.forms.userForm.email.value;
    data.phone = document.forms.userForm.phone.value;
    data.wphone = document.forms.userForm.wphone.value;
    data.addr1 = document.forms.userForm.addr1.value;
    data.addr2 = document.forms.userForm.addr2.value;
    data.city = document.forms.userForm.city.value;
    data.id = document.forms.userForm.id.value;
    // var state = $("#selectState");
    data.state = $('#selectState').find(":selected").val();
    // data.state= state.options[state.selectedIndex].value;
    data.gender = getRadioValue('genderRadio');
    data.zip = document.forms.userForm.zip.value;
    data.textArea = document.forms.userForm.textArea.value;
    data.lang = getLanguage();
    //alert(data.lang);

    if (isValidForm(data)) {
       //  ('in submit form');

        if (data.id == "") {
            $.ajax({
                type: "POST",
                url: "/addContact",
                data: JSON.stringify(data),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) { displayContactList(data) },
                failure: function (errMsg) {
                    console.log(errMsg);
                }
            });


            // postMyPage('/addContact', JSON.stringify(data), displayContactList);
        } else {
            $.ajax({
                type: "POST",
                url: "/updateContact",
                // The key needs to match your method's input parameter (case-sensitive).
                data: JSON.stringify(data),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) { displayContactList(data); },
                failure: function (errMsg) {
                    console.log(errMsg);
                }
            });
            // postMyPage('/updateContact', JSON.stringify(data), displayContactList);
        }
    }

}

function deleteContact(id) {
    var data = {};
    data.id = id;
    ////alert('deleting contact with id'+id);
    // var dataParsed=JSON.parse(data);
    //dataString = JSON.stringify(data);

    // $.post('/deleteContact',{id:id},displayContactList,"json");
    var request = $.ajax({
        url: '/deleteContact',
        method: "POST",
        data: JSON.stringify(data),
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function (data) { displayContactList(data); },
        failure: function (errMsg) {
            console.log(errMsg);
        }
    });



    // postMyPage('/deleteContact',dataString,displayContactList);
}

function editContact(id) {
    // //alert('display formm');
    //loadMyPage('/getContact?id=' + id, displayForm);
    $.get('/getContact?id=' + id, function (data, status) {
        	
                displayForm(data);
        	
            });
}

function cancelForm() {
    $.get('/contactsList', displayContactList);
    //loadMyPage('/contactsList', displayContactList);
}


