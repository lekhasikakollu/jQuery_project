
function displayForm(data) {
    var jsonObj = JSON.parse(data);
    if (jsonObj.fname == undefined) {
        jsonObj.fname = "";
        jsonObj.lname = "";
        jsonObj.email = "";
        jsonObj.phone = "";
        jsonObj.wphone = "";
        jsonObj.addr1 = "";
        jsonObj.addr2 = "";
        jsonObj.city = "";
        jsonObj.textArea = "";
        jsonObj.id = "";
        jsonObj.zip = "";
    }

    dust.render('addContact', jsonObj, function (err, out) {
        console.log(err);
        console.log(out);
        //alert('checking if form is displaying')
        $('#main').html(out);
        //document.getElementById('main').innerHTML = out;


    });


    if (jsonObj.state != "" || jsonObj.gender != "") {
        //   //  console.log(jsonObj.state);
        //alert('setting select box state');    
        $('#selectState').val(jsonObj.state);
        // document.getElementById("selectState").value = jsonObj.state;
        // alert('value in select box'+$('#selectState').val())
        $('#' + jsonObj.gender).attr('checked', true);
        //document.forms["userForm"][jsonObj.gender].checked=true;
    }

    if (jsonObj.lang != "") {
        var checkbox = jsonObj.lang;
        //document.getElementsByClassName('checkbox1');
        alert("alertttt" + checkbox);

        var checkboxArray = checkbox.split(' ');
        // alert('checkobox array le'+checkboxArray.length)
        for (var i in checkboxArray) {
            //alert(checkboxArray[i])
            //alert('jquery checkboxes');
            $('input[id=' + checkboxArray[i] + ']').attr('checked', true);
            // document.forms["userForm"][checkboxArray[i]].checked=true;
        }
    }


}