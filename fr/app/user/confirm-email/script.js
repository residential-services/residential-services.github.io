




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
    $('#dialogText').text('Email confirmé!');
    $('#dialogOk').show();
    $('#dialog').modal('show');
}).catch(err => {
    $('#dialogText').text('Email non confirmé.');
    $('#dialogOk').hide();
    $('#dialog').modal('show');
});
