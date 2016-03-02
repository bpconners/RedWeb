$(document).ready(function(){
    $('#button').click(function(){
        var title=$('input[name=theTitle]').val();
        var address=$('input[name=theAddress]').val();

        $('.list').append($('<a href="'+address+'">'+title+'</a>'+'<br>'));
    });
});
