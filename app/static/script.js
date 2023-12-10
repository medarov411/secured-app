//Using our API

function login(){
    var uname = document.getElementById("uname").value;
    var passw = document.getElementById("passw").value;

    var dat = {'username':uname, 'password':passw};

    $.ajax('/api/v1.0/storeLoginAPI/',{
        method: 'POST',
        data: JSON.stringify(dat),
        dataType: "json",
        contentType: "application/json",
    }).done(function(res){

      if (res['status'] == 'success') {
        $("#stat").html('<b>Successful Login<b>');
        
        if (res.user === 'admin') {
            window.location.href = '/admin-panel?user=f354e988-2dee-4100-ad19-963b01258882';
        } else {
            window.location.href = '/admin-panel?user=' + res.user;
        }
    } else {
        $("#stat").html('<b>Login Failed</b>');
    }
    

    }).fail(function(err){
        $("#stat").html(err);
    });
}

