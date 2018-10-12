





$( "#dialogOk" ).on( "click", () => {
    window.location.assign('../home/?action=sign-in');
});

my.stitch.account.confirmEmail(
    my.vars.query.token,
    my.vars.query.tokenId 
).then(() => {
    $('#dialogText').text('Email bestätigt!');
    $('#dialogOk').show();
    $('#dialog').modal({
        backdrop: false,
        keyboard: true,
        focus: true,
        show: true
    });
}).catch(err => {
    $('#dialogText').text(`Email nicht bestätigt. Fehler war: ${err}`);
    $('#dialogOk').hide();
    $('#dialog').modal({
        backdrop: false,
        keyboard: true,
        focus: true,
        show: true
    });
});
