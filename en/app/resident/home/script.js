





// TODO: Handle email confirmation link. See https://docs.mongodb.com/stitch/authentication/userpass/index.html#create-a-new-user-account

// TODO: Handle Password reset link. See https://docs.mongodb.com/stitch/authentication/userpass/index.html#reset-a-user-s-password

// TODO: UI in 3 languages, detect language from path

// TODO: plug this UI into the Equa site.



// 𝟏 Registration events
$( "#registrationDialogRegister" ).on( "click", function() {
    $('#registrationDialog').modal('hide');
    if ($('#registrationDialogPwd').val() ===  $('#registrationDialogPwd2').val()) {
        my.stitch.account.register(
            $('#registrationDialogEmail').val(),
            $('#registrationDialogPwd').val()
        ).then(() => {
            $('#registrationDoneDialogText').text('Done! To complete your registration, please click on the link in the email we have just sent you!');
            $('#registrationDoneDialogRetry').hide();
            $('#registrationDoneDialogOk').show();
            $('#registrationDoneDialog').modal('show');
        }).catch(err => {
            $('#registrationDoneDialogText').text(`Please retry registering. Error was: #{err}`);
            $('#registrationDoneDialogRetry').show();
            $('#registrationDoneDialogOk').hide();
            $('#registrationDoneDialog').modal('show');
        });
    } else {
        $('#registrationDoneDialogText').text('Please retry registering. The two passwords must be the same.');
        $('#registrationDoneDialogRetry').show();
        $('#registrationDoneDialogOk').hide();
        $('#registrationDoneDialog').modal('show');
    }
});
$( "#registrationDialogLogin" ).on( "click", function() {
    $('#registrationDialog').modal('hide');
    $('#loginDialog').modal('show');
});


// 𝟐 After registration events
$( "#registrationDoneDialogRetry" ).on( "click", function() {
    $('#registrationDoneDialog').modal({
        show: false
    });
    $('#registrationDialogEmail').val('');
    $('#registrationDialogPwd').val('');
    $('#registrationDialog').modal({
        backdrop: false,
        keyboard: true,
        focus: true,
        show: true
    });
});    


// 𝟑 Login events
$( "#loginDialogLogin" ).on( "click", function() {
    $('#loginDialog').modal({
        show: false
    });
    my.stitch.account.signIn(
        $('#loginDialogEmail').val(),
        $('#loginDialogPwd').val()
    ).then(() => {
        $('#loginDoneDialogText').text('Successfully signed in!');
        $('#loginDoneDialogRetry').hide();
        $('#loginDoneDialogOk').show();
        $('#loginDoneDialog').modal('show');
    }).catch(err => {
        $('#loginDoneDialogText').text(`Please retry signing in. Error was: ${err}`);
        $('#loginDoneDialogRetry').show();
        $('#loginDoneDialogOk').hide();
        $('#loginDoneDialog').modal('show');
    });
});
$( "#loginDialogRegister" ).on( "click", function() {
    $('#loginDialog').modal({
        show: false
    });
    $('#registrationDialog').modal({
        backdrop: false,
        keyboard: true,
        focus: true,
        show: true
    });
});


// 𝟒 After login events
$( "#loginDoneDialogRetry" ).on( "click", function() {
    $('#loginDoneDialog').modal({
        show: false
    });
    $('#loginDialogEmail').val('');
    $('#loginDialogPwd').val('');
    $('#loginDialog').modal({
        backdrop: false,
        keyboard: true,
        focus: true,
        show: true
    });
});    



// my.stitch.db = my.stitch.client
//     .getServiceClient(stitch.RemoteMongoClient.factory, "mongodb-atlas")
//     .db('equa');
// my.stitch.db.collection('collectionname').find()

if (!my.stitch.client.auth.user) {
    // not signed in
    if (my.vars.query.action === 'sign-in') {
        $('#loginDialog').modal('show');
    }else{
        $('#registrationDialog').modal({
            backdrop: false,
            keyboard: true,
            focus: true,
            show: true
        });
    }

} else {
    // signed in
    
}

