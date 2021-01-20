/* { This is emoji.js function : 
   This function is used to send emoji easily while cliking the emoji's
   present in the emoji div
   its also capable to show and hide facility by the user :
   its appends the value to input message typed by the user or an null content too : } */

$('#emojis1').on('click', ()=> {
    $('#messageInput, textarea').val("" + $('#messageInput').val() +  "❤️"  );
});


$('#emojis2').on('click', ()=> {
    $('#messageInput, textarea').val("" + $('#messageInput').val() +  "💚"  );
});


$('#emojis3').on('click', ()=> {
    $('#messageInput, textarea').val("" + $('#messageInput').val() +  "💖"  );
});


$('#emojis4').on('click', ()=> {
    $('#messageInput, textarea').val("" + $('#messageInput').val() +  "💘"  );
});


$('#emojis5').on('click', ()=> {
    $('#messageInput, textarea').val("" + $('#messageInput').val() +  "💋"  );
});


$('#emojis6').on('click', ()=> {
    $('#messageInput, textarea').val("" + $('#messageInput').val() +  "💜"  );
});


$('#emojis7').on('click', ()=> {
    $('#messageInput, textarea').val("" + $('#messageInput').val() +  "😘"  );
});


$('#emojis8').on('click', ()=> {
    $('#messageInput, textarea').val("" + $('#messageInput').val() +  "😉"  );
});


$('#emojis9').on('click', ()=> {
    $('#messageInput, textarea').val("" + $('#messageInput').val() +  "😙"  );
});


$('#emojis10').on('click', ()=> {
    $('#messageInput, textarea').val("" + $('#messageInput').val() +  "😚"  );
});


$('#emojis11').on('click', ()=> {
    $('#messageInput, textarea').val("" + $('#messageInput').val() +  "😍"  );
});


$('#emojis12').on('click', ()=> {
    $('#messageInput, textarea').val("" + $('#messageInput').val() +  "😊"  );
});


$('#emojis13').on('click', ()=> {
    $('#messageInput, textarea').val("" + $('#messageInput').val() +  "😂"  );
});


$('#emojis14').on('click', ()=> {
    $('#messageInput, textarea').val("" + $('#messageInput').val() +  "😅"  );
});


$('#emojis15').on('click', ()=> {
    $('#messageInput, textarea').val("" + $('#messageInput').val() +  "😆"  );
});


$('#emojis16').on('click', ()=> {
    $('#messageInput, textarea').val("" + $('#messageInput').val() +  "😇"  );
});


$('#emojis17').on('click', ()=> {
    $('#messageInput, textarea').val("" + $('#messageInput').val() +  "😃"  );
});


$('#emojis18').on('click', ()=> {
    $('#messageInput, textarea').val("" + $('#messageInput').val() +  "😁"  );
});


$('#emojis19').on('click', ()=> {
    $('#messageInput, textarea').val("" + $('#messageInput').val() +  "😭"  );
});


$('#emojis20').on('click', ()=> {
    $('#messageInput, textarea').val("" + $('#messageInput').val() +  "😥"  );
});

$('#emojis21').on('click', ()=> {
    $('#messageInput, textarea').val("" + $('#messageInput').val() +  "😨"  );
});


$('#emojis22').on('click', ()=> {
    $('#messageInput, textarea').val("" + $('#messageInput').val() +  "😓"  );
});


$('#emojis23').on('click', ()=> {
    $('#messageInput, textarea').val("" + $('#messageInput').val() +  "😤"  );
});


$('#emojis24').on('click', ()=> {
    $('#messageInput, textarea').val("" + $('#messageInput').val() +  "😮"  );
});


$('#emojis25').on('click', ()=> {
    $('#messageInput, textarea').val("" + $('#messageInput').val() +  "💏"  );
});


$('#emojis26').on('click', ()=> {
    $('#messageInput, textarea').val("" + $('#messageInput').val() +  "💑"  );
});


$('#emojis27').on('click', ()=> {
    $('#messageInput, textarea').val("" + $('#messageInput').val() +  "💜"  );
});


$('#emojis28').on('click', ()=> {
    $('#messageInput, textarea').val("" + $('#messageInput').val() +  "💞"  );
});


$('#emojis29').on('click', ()=> {
    $('#messageInput, textarea').val("" + $('#messageInput').val() +  "😉"  );
});


$('#emojis30').on('click', ()=> {
    $('#messageInput, textarea').val("" + $('#messageInput').val() +  "💍"  );
});

// Extra functions on emoji's creator content :

// for showing the emoji array while clicking the emoji icon present before the message input area : 
$('#emojiO').on('click', ()=> {
    
    $('#emojiX').css('opacity','0.5').css('visibility','visible');
    $('#emoji').css('opacity','0.5').css('visibility','visible');
});

// hide the emoji button while click the x or close button in the emoji div :
$('#emojiX').on('click', ()=> {

    $('#emojiX').css('opacity','0').css('visibility','hidden');
    $('#emoji').css('opacity','0').css('visibility','hidden');
});