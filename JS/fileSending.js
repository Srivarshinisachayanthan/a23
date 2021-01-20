var userId = 'ssv23';
var fromId = 'ssv23';
var toId   = 'svs23';

// styling for file sending button function : 
$('#fileSelectBtn').on('click', ()=>{

    // automatically click the hidden file selecting button :
    document.getElementById("fileSelectBtnInput").click();

    // styling the send button on realtime:
    $('#send-selected-file').css('width','50%')
                            .css('background-color','green')
                            .css('opacity','0.5')
                            .css('border','1px solid white')
                            .text('Click to send selected file')
                            .show('slow');

    // styling for CancelFileSend on realtime :
    $('#CancelFileSend')    .css('width','10%')
                            .css('background-color','#cf6679')
                            .css('opacity','0.5')
                            .css('border','1px solid white')
                            .text('X')
                            .show('slow');

    // input message box varies size depends on file selecting button :
    $('#messageInput').css('width','30%');

});

// styling for cancelling a file sending operation :
$('#CancelFileSend').on('click', ()=>  {

    // styling after cancelling the file sending operation :
    $('#send-selected-file').css('display','none');
    $('#CancelFileSend').css('display','none');
    $('#messageInput').css('width','90%');

});

// send file to another user function :
$('#send-selected-file').on('click', ()=> {

    console.log('Button Clicked');
    // refrence a database and preparing storage bucket area on database for user files : 
    const ref = firebase.storage().ref();
    const file = document.querySelector('#fileSelectBtnInput').files[0];

    // function for file not selected by user :
    if( typeof(file)=="undefined" ) {
        console.log("No file Selected");    
        $('#send-selected-file').text("No File Selected").css('background-color','red').delay("slow").hide("slow");
        $('#messageInput').delay("slow").css('width','90%');
        $('#CancelFileSend').css('display','none');
    }
    else 
    {
        // if the file or selected by user do this operation : 
        const name = new Date() + "-" + file.name;
        const metadata = {
            contentType : file.type
        }
        
        // setting a storage bucket by user id or an name :
        const task = ref.child(name).put(file, metadata);
        let username = "ssv23";

        // segregating a file types by img, vide0, audio and another :
        task
            .then(snapshot => snapshot.ref.getDownloadURL() )
            .then(url => {
                console.log(url);
                publicUrl = url;
                if(file.type == "image/jpeg" || file.type == "image/png" || file.type == "image/jpeg") {
                    console.log("Image is uploaded succesfully!...");
                    uploadInfoToDatabase(username,0,"","",1,url,0,"",0,"","image");
                }
                else if( file.type == "audio/mpeg" ){
                    console.log("Audio is uploaded succesfully!...");
                    uploadInfoToDatabase(username,0,"","",0,"",0,"",1,url,"aduio");
                }
                else if( file.type =="video/webm" || file.type == "video/mp4" ) {
                    console.log("Video is uploaded succesfully!...");
                    uploadInfoToDatabase(username,0,"","",0,"",1,url,0,"","video");                
                }
                else {
                    console.log("File is uploaded succesfully!...");
                    uploadInfoToDatabase(username,1,url,file.name,0,"",0,"",0,"","file");
                }
            });

            $('#send-selected-file').hide('slow');
            $('#messageInput')      .css('width','90%');
            $('#CancelFileSend')    .css('display','none');

        }
        

});

// files are upload into database storage bucket and save the url to database :
function uploadInfoToDatabase(user,fileExist,ConstFileUrl,ConstFileName,imageExist,ConstImgUrl,videoExist,ConstVideoUrl,audioExist,ConstAudioUrl ,ConstMessageType) {
    
        let textBoldId      = $('#textBold').is(':checked');
        let textItalicId    = $('#textItalic').is(':checked');
        let textUnderlineId = $('#textUnderline').is(':checked');
        let textHighlightId = $('#textHighlight').is(':checked');
        let messageContent  = $('#messageInput').val();
        
        let messageExist = 0;
        let ID = new UniqueIdCreator() ;

        // function is used for files are sending by message or null type;
        if(messageContent != "") {  messageExist = 1; }

        // create a unique message id for both users :
        let UniqueMessageId = "" + ID.year() + " " + ID.monthVal() + " " + ID.date() + " " + ID.time()  + " " + ID.seconds() + " " + ID.milliSeconds();
        // storing a data of files or other types for sender :
        firebase.database().ref('23users/ssv23/23Messages/' + UniqueMessageId + "/").set({
            
            From            : fromId,
            To              : toId,
            Time            : ID.time(),
            Date            : ID.date(),
            Day             : ID.day(),
            Month           : ID.month(),
            Year            : ID.year(),
            Message_Type    : ConstMessageType ,
            Text_Message    : messageContent ,
            Image_Url       : ConstImgUrl ,
            File_Url        : ConstFileUrl ,
            File_Name       : ConstFileName,
            Video           : ConstVideoUrl ,
            Audio           : ConstAudioUrl , 
            Reply_Message   : "" ,
            Bolder          : textBoldId,
            Italic          : textItalicId,
            Highlight       : textHighlightId,
            Underline       : textUnderlineId 
        
        });

        // storing a data of files or other types for receiver :
        firebase.database().ref('23users/svs23/23Messages/' + UniqueMessageId + "/").set({
            
            From            : fromId,
            To              : toId,
            Time            : ID.time(),
            Date            : ID.date(),
            Day             : ID.day(),
            Month           : ID.month(),
            Year            : ID.year(),
            Message_Type    : ConstMessageType ,
            Text_Message    : messageContent ,
            Image_Url       : ConstImgUrl ,
            File_Url        : ConstFileUrl ,
            File_Name       : ConstFileName,
            Video           : ConstVideoUrl ,
            Audio           : ConstAudioUrl , 
            Reply_Message   : "" ,
            Bolder          : textBoldId,
            Italic          : textItalicId,
            Highlight       : textHighlightId,
            Underline       : textUnderlineId 
        
        });

}
