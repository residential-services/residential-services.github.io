




$('#dialog').modal({
    backdrop: false,
    keyboard: true,
    focus: true,
    show: false
});
$( "#dialogOk" ).on( "click", () => {
    window.location.assign('../home/?action=sign-in');
});

my.stitch.account.confirmEmail(
    my.vars.query.token,
    my.vars.query.tokenId 
).then(() => {
    $('#dialogText').text('Email bestätigt!');
    $('#dialogOk').show();
    $('#dialog').modal('show');
}).catch(err => {
    $('#dialogText').text('Email nicht bestätigt.');
    $('#dialogOk').hide();
    $('#dialog').modal('show');
});
