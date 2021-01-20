class UniqueIdCreator {

    //  0   1  2   3      4        5        6     7        8
    // Sat Jan 09 2021 16:12:59 GMT+0530 (India Standard Time) 

    seconds() {

        let a = new Date();
        if ( ("" + ( a.getSeconds() ) ).length == 1 ) {
            return ("0" + ( a.getSeconds() ) )
        }
        else {
            return  ( a.getSeconds() ) ;
        }

    }

    milliSeconds() {

        let a = new Date();
        
        if( ( ""+ (a.getMilliseconds()) ).length == 1 ) {
            return "000" + ( a.getMilliseconds() ) ;
        }
        if( ( ""+ (a.getMilliseconds()) ).length == 2 ) {
            return "00" + ( a.getMilliseconds() ) ;
        }
        if( ( ""+ (a.getMilliseconds()) ).length == 3 ) {
            return "0" + ( a.getMilliseconds() ) ;
        }
    
        return (""+(a.getMilliseconds())) ;
    
    }

    AmorPm() {
    
        let a = new Date();
        if(a.getHours<12){
            return 'AM';
        }
        return 'PM';
    
    }

    hours12() {
    
        let a = new Date();
        let h = ( a.getHours() % 12 );
        let r = '';
        switch(h){
            case 1  : r = '01'; break;
            case 2  : r = '02'; break;
            case 3  : r = '03'; break;
            case 4  : r = '04'; break;
            case 5  : r = '05'; break;
            case 6  : r = '06'; break;
            case 7  : r = '07'; break;
            case 8  : r = '08'; break;
            case 9  : r = '09'; break;
            case 10 : r = '10'; break;
            case 11 : r = '11'; break;
            default : r = '12'; break;
        }
        return r;
    
    }

    monthVal(){

        switch(Date().toString().split(' ')[1]){                
            case 'Jan' : return '01'; 
            case 'Feb' : return '02'; 
            case 'Mar' : return '03'; 
            case 'Apr' : return '04'; 
            case 'May' : return '05'; 
            case 'Jun' : return '06'; 
            case 'Jul' : return '07'; 
            case 'Aug' : return '08'; 
            case 'Sep' : return '09'; 
            case 'Oct' : return '10'; 
            case 'Nov' : return '11'; 
            case 'Dec' : return '12'; 
        }
    
    }

    year() {
        return Date().toString().split(' ')[3];
    }

    month(){
        return Date().toString().split(' ')[1];
    }

    day() {
        return Date().toString().split(' ')[0];
    }

    time() {
        return Date().toString().split(' ')[4];
    }

    date() {
        return Date().toString().split(' ')[2];
    }

    setProperTime( getTime ) {
        
        let hours   = (number(getTime[0]+getTime[1]));
        let minutes = (number(getTime[3]+getTime[4])); 
        let seconds = (number(getTime[6]+getTime[7]));
        let AmOrPM  = "PM"; 
        
        if( hours < 12) {
            AmOrPM  = "AM";
        }
        
        hours = hours % 12 ;       
        return ( " "+hours + ":" + minutes + ":" + seconds + " " + AmOrPM );
    }

}