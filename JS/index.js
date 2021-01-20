var userId = 'ssv23'; // first user id :
var fromId = 'ssv23'; // first user id with from notation :
var toId   = 'svs23'; // second user id :

// offline status :
window.onbeforeunload = function() {
  
    // set unique id for present time getting :
    let ID = new UniqueIdCreator();
  
    // set user offline status and last seen time :
    firebase.database().ref('23users/ssv23/status').set({

        onlineStatus : 'Offline : last Seen ',
        lastSeen : (""+ID.year() + " " + ID.month() + " " + ID.date() + " " + ID.time() )

    });

};

// online status and set some predefault after the website is ready to function :
$( document ).ready(function() {

    // just say the website is ready to function :
    console.log( "Website is ready for proper functioning!..." );
    let ID = new UniqueIdCreator();

    // set user is online function:
    // and set user when its come to online :
    firebase.database().ref('23users/ssv23/status').set({

        onlineStatus : 'Online Now',
        lastSeen : (""+ID.year() + " " + ID.month() + " " + ID.date() + " " + ID.time() )

    });

    // making drag capability of emoji and text style div's :
    $(".textDesignContainer").draggable();
    $(".emoji").draggable();

});

document.getElementById('messageInput').addEventListener("keyup", function(event) {

    // This is method : while user is click the 'Enter'
    // button on keyboard then the function is automatically 
    // clicked the hidden send button for further operation :
    if(event.keyCode === 13) {

        event.preventDefault();
        document.getElementById("sendBtn").click();

    }

});

// message sending function :
$('#sendBtn').on('click', (e)=> { 

    // This is send data function while the click the enter :

    // prevent default data's :
    e.preventDefault();

    // check whether the style property of input message is used by user : 
    let textBoldId      = $('#textBold').is(':checked');
    let textItalicId    = $('#textItalic').is(':checked');
    let textUnderlineId = $('#textUnderline').is(':checked');
    let textHighlightId = $('#textHighlight').is(':checked');
    let messageContent  = $('#messageInput').val();

    let ID = new UniqueIdCreator();

    // if message is not typed : is not capable to send and store the useless data in database
    // so , prevention is declared here from the user try to send null message to other : 
    if(messageContent == "" ) 
    {
    
        alert("Message content is NULL...\n please type some message or select files or photos before send");
    
    }
    else
    {            
    
        // get and set unique id for every message for safety of user data :
        let UniqueMessageId = "" + ID.year() + " " + ID.monthVal() + " " + ID.date() + " " + ID.time()  + " " + ID.seconds() + " " + ID.milliSeconds(); 

        console.log("From id",fromId);
        console.log("To id",toId);
        // set the user send message to database :
        firebase.database().ref('23users/ssv23/23Messages/' + UniqueMessageId + "/").set({
            
            From            : fromId,
            To              : toId,
            Time            : ID.time(),
            Date            : ID.date(),
            Day             : ID.day(),
            Month           : ID.month(),
            Year            : ID.year(),
            Message_Type    : "message" ,
            Text_Message    : messageContent ,
            Image_Url       : "" ,
            File_Url        : "" ,
            File_Name       : "" ,
            Video           : "" ,
            Audio           : "" , 
            Reply_Message   : "" ,
            Bolder          : textBoldId,
            Italic          : textItalicId,
            Highlight       : textHighlightId,
            Underline       : textUnderlineId 
        
        });

        // set the user send message to opposite user : 
        firebase.database().ref('23users/svs23/23Messages/' + UniqueMessageId + "/").set({
            
            From            : fromId,
            To              : toId,
            Time            : ID.time(),
            Date            : ID.date(),
            Day             : ID.day(),
            Month           : ID.month(),
            Year            : ID.year(),
            Message_Type    : "message" ,
            Text_Message    : messageContent ,
            Image_Url       : "" ,
            File_Url        : "" ,
            File_Name       : "" ,
            Video           : "" ,
            Audio           : "" , 
            Reply_Message   : "" ,
            Bolder          : textBoldId,
            Italic          : textItalicId,
            Highlight       : textHighlightId,
            Underline       : textUnderlineId 
        
        });

        // reset the styled property in the input section :
        $('#textBold')     .prop('checked', false);
        $('#textItalic')   .prop('checked', false);
        $('#textUnderline').prop('checked', false);
        $('#textHighlight').prop('checked', false);

        // reset or empty the input val while send the information to user : 
        $('#messageInput,textarea').val('');
    
        // scroll down event for every message is send :
        $('#chatPage').animate({scrollTop : 100000000}, 1000);

    }

});

// messages deleting function :
$('#DeleteMessage').on('click', ()=> {
    
    // Delete Messages from the chat page and server and database too so, there is no saving of data anywhere ,
    // So, information is very safe and secure in the user hand : 
    console.log('Button clicked!...');

    $('#chatPage').empty();

    // delete database information : 
    firebase.database().ref('23users/svs23').child('23Messages').remove();
    firebase.database().ref('23users/ssv23').child('23Messages').remove();    

    // and set default message : 
    firebase.database().ref('23users/svs23/').child('23Messages').child('0').set({
        
        From            : 'Admin',
        To              : "svs23",
        Time            : '8.30pm',
        Date            : "6",
        Day             : "Fri",
        Month           : "Sep",
        Year            : "2019",
        Message_Type    : "notify",
        Text_Message    : "Welcome to 23",
        Image_Url       : "NULL",
        File_Url        : "NULL",
        File_Name       : "NULL",
        Video           : "NULL",
        Audio           : "NULL",
        Reply_Message   : "NULL",
        Bolder          : 0,
        Italic          : 0,
        Highlight       : 0,
        Underline       : 0 

    });


    // Using a Unique Id for every message from users : 
    firebase.database().ref('23users/ssv23/').child('23Messages').child('0').set({
        
        From            : 'Admin',
        To              : "svs23",
        Time            : '8.30pm',
        Date            : "6",
        Day             : "Fri",
        Month           : "Sep",
        Year            : "2019",
        Message_Type    : "notify",
        Text_Message    : "Welcome to 23",
        Image_Url       : "NULL",
        File_Url        : "NULL",
        File_Name       : "NULL",
        Video           : "NULL",
        Audio           : "NULL",
        Reply_Message   : "NULL",
        Bolder          : 0,
        Italic          : 0,
        Highlight       : 0,
        Underline       : 0 

    });


    
    // process completion confirmation : 
    console.log("Process finished!...");

});