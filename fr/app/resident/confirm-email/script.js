





$( "#dialogOk" ).on( "click", () => {
    window.location.assign('../home/?action=sign-in');
});

my.stitch.account.confirmEmail(
    my.vars.query.token,
    my.vars.query.tokenId 
).then(() => {
    $('#dialogText').text('');
    $('#dialogOk').show();
    $('#dialog').modal('show');
}).catch(err => {
    $('#dialogText').text(` ${err}`);
    $('#dialogOk').hide();
    $('#dialog').modal('show');
});
