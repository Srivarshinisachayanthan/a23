firebase.database().ref('23users/svs23/status/').on('value', (Onlineevent)=> {
    console.log( (Onlineevent.val().lastSeen) );
    console.log( (Onlineevent.val().onlineStatus) );
    
    let userStatus = ( "" + (Onlineevent.val().onlineStatus) + " [ " + (Onlineevent.val().lastSeen) + "]" );
    
    $('#OnlineStatus').text(userStatus);
    
    let divs = new DivCreator();
    let values = Date().toString().split(' ');
    
    let UniqueIDCreate = new UniqueIdCreator();
    let ID = UniqueIDCreate.date()  +" "+ UniqueIDCreate.day() +" "+ UniqueIDCreate.month() +" "+ UniqueIDCreate.year() +" "+ UniqueIDCreate.time() ;  

    firebase.database().ref('23users/ssv23/').child('23Messages').child(ID).set({
        
        From            : 'Admin',
        To              : "svs23",
        Time            : '8.30pm',
        Date            : "6",
        Day             : "Fri",
        Month           : "Sep",
        Year            : "2019",
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
