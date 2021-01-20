firebase.database().ref('23users/svs23/status/').on('value', (Onlineevent)=> {
    console.log( (Onlineevent.val().lastSeen) );
    console.log( (Onlineevent.val().onlineStatus) );
    
    let userStatus = ( "" + (Onlineevent.val().onlineStatus) + " [ " + (Onlineevent.val().lastSeen) + "]" );
    
    $('#OnlineStatus').text(userStatus);
})