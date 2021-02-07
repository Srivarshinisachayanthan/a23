firebase.database().ref('23users/svs23/status/').on('value', (Onlineevent)=> {

    console.log( (Onlineevent.val().lastSeen) );
    console.log( (Onlineevent.val().onlineStatus) );
    
    let userStatus =  "" + (Onlineevent.val().onlineStatus) + " [ " + (Onlineevent.val().lastSeen) + "]" ;    

    $('#OnlineStatus').text(userStatus);
    
    let UniqueIDCreate = new UniqueIdCreator();
    
    let ID =    UniqueIDCreate.year()     + " " +
                UniqueIDCreate.monthVal() + " " + 
                UniqueIDCreate.date()     + " " + 
                UniqueIDCreate.time()     + " " + 
                UniqueIDCreate.seconds()  + " " + 
                UniqueIDCreate.milliSeconds() 
                ;

    firebase.database().ref('23users/ssv23/').child('23Messages').child(ID).set({
        
        From            : 'Admin',
        To              : "ssv23",
        Time            : UniqueIDCreate.time(),
        Date            : UniqueIDCreate.date(),
        Day             : UniqueIDCreate.day(),
        Month           : UniqueIDCreate.month(),
        Year            : UniqueIDCreate.year(),
        Message_Type    : "notify",
        Text_Message    : userStatus,
        Image_Url       : "NULL",
        File_Url        : "NULL",
        File_Name       : "NULL",
        Video           : "NULL",
        Audio           : "NULL",
        Reply_Message   : "NULL",
        Bolder          : 1,
        Italic          : 1,
        Highlight       : 0,
        Underline       : 0 

    });


})
