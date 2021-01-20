// short the code line for database refrence :
var rootRef = firebase.database().ref('23users/ssv23/23Messages/');

// on start or on enter the user into website old message is retriewed by this function :
rootRef.once('value', (Parentevent)=> {

    console.log("This is once function");

    // get parent unique id from the user database : 
    let ParentEventValues =  (Object.keys(Parentevent.val())).toString().split(',');

    // get all old message id's for one time retriewal from database : 
    for(let ParentEventIter = 0; ParentEventIter < ParentEventValues.length; ParentEventIter++){
        
        rootRef.child(ParentEventValues[ParentEventIter]).once('value', (ChildEvent)=> {
            
            let Retriewer       = ChildEvent.val();
            let Raudio          = Retriewer.Audio ;
            let Rbolder         = Retriewer.Bolder ;
            let Rdate           = Retriewer.Date ;
            let Rday            = Retriewer.Day ;
            let Rfileurl        = Retriewer.File_Url ;
            let Rfilename       = Retriewer.File_Name;
            let Rfrom           = Retriewer.From ;
            let Rhighlight      = Retriewer.Highlight ;
            let Rimageurl       = Retriewer.Image_Url ;
            let Ritalic         = Retriewer.Italic ;
            let Rmessagetype    = Retriewer.Message_Type ;
            let Rmonth          = Retriewer.Month ;
            let Rreplymessage   = Retriewer.Reply_Message ;
            let Rtextmessage    = Retriewer.Text_Message ;
            let Rtime           = Retriewer.Time ;
            let Rto             = Retriewer.To ;
            let Runderline      = Retriewer.Underline ;
            let Rvideo          = Retriewer.Video ;
            let Ryear           = Retriewer.Year ;

            let RparaContains   = (Rtextmessage!="")?1:0;
            let RimgContains    = (Rimageurl   !="")?1:0;
            let RvideoContains  = (Rvideo      !="")?1:0;
            let RaudioContains  = (Raudio      !="")?1:0;
            let RfileContains   = (Rfileurl    !="")?1:0;

            let dc = new DivCreator();

            if ( Rfrom == "Admin" ) {
                console.log("admin Message");
                $('#chatPage').append(dc.ProperAdminContainer(Rfrom,Rdate,Rmonth,Ryear,Rday,Rtime,Rtextmessage,Rbolder,Ritalic,Rhighlight,Runderline));
            }
            else if( Rfrom == "ssv23" ) {
                console.log('message from me!..');
                $('#chatPage').append(dc.ProperGreenContainer(Rfrom,Rdate,Rmonth,Ryear,Rday,Rtime,RparaContains,Rtextmessage,Rbolder,Ritalic,Rhighlight,Runderline,RfileContains,Rfileurl,Rfilename,RimgContains,Rimageurl,RvideoContains,Rvideo,RaudioContains,Raudio));              
            }
            else {
                console.log('Message to my lover!...');
                $('#chatPage').append(dc.ProperWhiteContainer(Rto,Rdate,Rmonth,Ryear,Rday,Rtime,RparaContains,Rtextmessage,Rbolder,Ritalic,Rhighlight,Runderline,RfileContains,Rfileurl,Rfilename,RimgContains,Rimageurl,RvideoContains,Rvideo,RaudioContains,Raudio));              
            }

            $('#chatPage').animate({scrollTop : 100000000}, 1000);    

        }); 

    }

});

// retriew messages in realtime :
firebase.database().ref('23users/ssv23/').on('child_changed', (CCParentevent)=> {

    // just say child change occurs on database :
    console.log("child changed now!...");

    // get refrence id :
    let ParentEventValues =  (Object.keys(CCParentevent.val())).toString().split(',');
    
    // retriew one last message from database : 
    rootRef.child(ParentEventValues[ParentEventValues.length -1]).once('value', (CcChildEvent)=> {
            
            let Retriewer       = CcChildEvent.val();
            let Raudio          = Retriewer.Audio ;
            let Rbolder         = Retriewer.Bolder ;
            let Rdate           = Retriewer.Date ;
            let Rday            = Retriewer.Day ;
            let Rfileurl        = Retriewer.File_Url ;
            let Rfilename       = Retriewer.File_Name;
            let Rfrom           = Retriewer.From ;
            let Rhighlight      = Retriewer.Highlight ;
            let Rimageurl       = Retriewer.Image_Url ;
            let Ritalic         = Retriewer.Italic ;
            let Rmessagetype    = Retriewer.Message_Type ;
            let Rmonth          = Retriewer.Month ;
            let Rreplymessage   = Retriewer.Reply_Message ;
            let Rtextmessage    = Retriewer.Text_Message ;
            let Rtime           = Retriewer.Time ;
            let Rto             = Retriewer.To ;
            let Runderline      = Retriewer.Underline ;
            let Rvideo          = Retriewer.Video ;
            let Ryear           = Retriewer.Year ;

            let RparaContains   = (Rtextmessage!="")?1:0;
            let RimgContains    = (Rimageurl   !="")?1:0;
            let RvideoContains  = (Rvideo      !="")?1:0;
            let RaudioContains  = (Raudio      !="")?1:0;
            let RfileContains   = (Rfileurl    !="")?1:0;

            let dc = new DivCreator();

            console.log(Rfrom+"\n");
            if ( Rfrom == "Admin" ) {
                console.log("admin Message");
                $('#chatPage').append(dc.ProperAdminContainer(Rfrom,Rdate,Rmonth,Ryear,Rday,Rtime,Rtextmessage,Rbolder,Ritalic,Rhighlight,Runderline));
            }
            else if( Rfrom == "ssv23" ) {
                console.log('message from me!..');
                $('#chatPage').append(dc.ProperGreenContainer(Rfrom,Rdate,Rmonth,Ryear,Rday,Rtime,RparaContains,Rtextmessage,Rbolder,Ritalic,Rhighlight,Runderline,RfileContains,Rfileurl,Rfilename,RimgContains,Rimageurl,RvideoContains,Rvideo,RaudioContains,Raudio));              
            }
            else {
                console.log('Message to my lover!...');
                $('#chatPage').append(dc.ProperWhiteContainer(Rfrom,Rdate,Rmonth,Ryear,Rday,Rtime,RparaContains,Rtextmessage,Rbolder,Ritalic,Rhighlight,Runderline,RfileContains,Rfileurl,Rfilename,RimgContains,Rimageurl,RvideoContains,Rvideo,RaudioContains,Raudio));              
            }

            $('#chatPage').animate({scrollTop : 100000000}, 1000);    

        }); 

});