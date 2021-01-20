class DivCreator {      

    properDate(date, month, year, day, time) {
        return ( '' + date + '-' + month + '-' + year + ' '+'<span>'+  day + '</span> '+ '<span style="color:palegreen;">' + time + '</span>' );  
    }

    properMessageInfo(date, month, year, day, time, user) {
        return ('<h5 style="opacity:0.5;"><span> ' + user + '</span> ' + this.properDate(date, month, year, day, time) + '</h5>' );
    }

    properMessage(message, bold, italic, mark, underline) {
        let bolderstart = "", bolderend = "", italicstart = "", italicend = "", markstart = "", markend = "", underlinestart = "", underlineend = "";
        if(bold==1) {
            bolderstart = '<b>';
            bolderend   = '</b>';
        }
        if(italic==1){
            italicstart = '<i>';
            italicend = '</i>';
        }
        if(mark==1) {
            markstart = '<mark>';
            markend   = '</mark>';
        }
        if(underline==1) {
            underlinestart = '<u>';
            underlineend   = '</u>';
        }
        return ( '<p style="opacity:0.8;">' +''+ 
                    bolderstart    +''+ 
                    italicstart    +''+ 
                    underlinestart +''+ 
                    markstart      +''+ 
                    message        +''+ 
                    markend        +''+ 
                    underlineend   +''+ 
                    italicend      +''+ 
                    bolderend      +''+
                '</p>');
    }

    properImage(imgUrl) {
        return ( '<img src="'+ imgUrl + '" alt="" >' );
    }

    properSpace() {
        return ( '<div class="space"></div>' );
    }

    properAtag(fileUrl,fileName) {
        return ( '<a style="display: flex; flex-direction: column;" target="_blank"  href="' + fileUrl + '" > <img style="background-color: #232323;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABjUExURUdwTMHL08HK0JafqLjCycPL0pScpKSutq62vpagqbfCyZ2mrqmzu7S/x5+mraSrsq+2vamxuJqhqLa9w5Sbor3EysTL0lhmc4yUm8vS2XOAimZzftLZ4IKKk01aZTQ/Sd7l6omK3/gAAAAOdFJOUwCY4bNev5ktEUl+ytLaAMOUqwAABFhJREFUWMPt2Nl6mzAQBlAv2Bg71g6I1bz/U1ajdQQ4aZpe9at8mxz/MyMRkcPh/1qtW1ndj8Xtp0hxPz4ZF7r8+mfN912O5Z5xvDyfnCo99X1fffF9x8upa5qa3bc5TowKPQHS98NQfZLZGF1TSw4rQmUBuGREecMgsKp3OZqmayTjYV1DkcaAID1CWljr2iuXwwQBhHFLUUofELB2xaQkrVc20O0+jmD45QxCiBCC22KmfgpB2mi07Ty3JfTtHjZB9Ww84ZNYRCmtdd6RARnzPPSank61lPxaBkimKMiIs8GENdphIqyGuXL7rX4o1Ye0zAYZ+m2QdugVr207wbALQ8BYJARZ5UiG2xw0LIAeRYQsozVC2mFVjKayGzs7WAofq8DHQFWCiN+u28nYIKwZx7GrXQv83gh5CDmHZn/43bYTxBqLTSIlS0OJicyi11uEzG7pU0vmMBnZLYvZY01d1zJIKFBodjhJBoJAAy5GcxNkgSiWAQlWlsh3iIgiQubJMg1+sxqjtsYIhwacJjiBiZVZhogqQUrbQLOGYgAxil1RkpHypYU8hKhyDc3UKwCNnvGl5YlSp4WZPoagRbMOimO6xlL7gWIeQR63NVQHJ0pZIJkHcozYg5pl5cQWueFvAwmgzvGx9kHN9M3EOtyf6HwWCBKJa4QeFKafoChlHdoNZBxVYAgqm0cHocnjkUm0iVIekkHEtGh+tRbqNg3am30KJFS1gZZYVObkhwNNzDoi7kcHtfNrWFIeXFiNC/MtQk6cvoEE9BqgEGjVn3dbyEJx+ofyIaDXr37Z6XNqEM8kERNd05/Hh7LQtCDFME2WZxXIM+Y5f0WJFPTaQU0+LjR5lh5DyEHTP5RnB6klDCs/qbFB+MEoIpQuEpWBTGUvMTZNs5pWqIvljzPht5CpLE3fJNIWouNnzH6HjHTDEPT6xcYdZz2wrEHgPLaQ7PKZhzjO2e2PWectVHdh6K7PLI2L44n5Q++lK4bsxp5XcbL+0J1AbqVtZCETKEKyzpg0MJ8n1OWoYgt1OA7L7l78TYPM/aXKIGjR0OGqUF00NBpNLDgK39kjlPcm7p7tkVdBMVehLdR3MYzEdfFNnJAHHLSNAjR1m6LWF6FNHK3PGWRPiG5YqspPC1+ERFaXY/SEpn8orxZScEmWoSa22T0ki+PXHkTqVW+ye1k+c6+YVeXQbCBe45rS0NfN8Yi7/07lCnqZwy9TTe+dlMUok8aVhUQSM/uzSgoglLNLedgkmtPrFUUnPbY4jAmWVlTKy7Eo83daD9U4S2oxqsghgrIdxEFwZts6NYbSbUUO4YDcy/236wDtIiogSnD5JkkO9XJnSE7RinB2+hyxb5AeWp1uH0UR9jtISqSZWEcxSZj8TcQlgn0kKEImDeV8B3F/auH9gZKkfKOcvDZzO+55KIdCOfdvI7a2MzG/D+VQ/seIXQU3+zU09kf/yLkz+fxJklRc8ReQf3b9AqCnC1FzipjyAAAAAElFTkSuQmCC" alt=""> ' + fileName + '</a>' );
    }

    properVideoTag(videoUrl) {
        return ('<video src="'+ videoUrl +'" style="margin: 0; width: 200px; height: 200px;" controls></video>');
    }

    properAudioTag(audioUrl) {
        return ('<audio src="'+ audioUrl +'" style="margin: 0; width: 250px;" controls></audio>');
    }

    ProperWhiteContainer(user, date, month, year, day, time, 
                    paraContains, paraMessage, bold, italic, mark, underline,
                    AtagContains, fileUrl, fileName, imageContains, imageUrl,
                    VideoContains, VideoUrl, AudioContains, AudioUrl) {
    
        let step1 = '<div class="whiteContainer"><div class="whiteMessage">';
        let step2 = ''+this.properMessageInfo(date,month,year,day,time,user);
        let value = ( step1 + '' +step2);
        
        if(AtagContains==1){
            value += ( '' + this.properAtag(fileUrl,fileName));
        }
        if(imageContains==1) {
            value += ('' + this.properImage(imageUrl) );
        }
        if(VideoContains==1) {
            value += ('' + this.properVideoTag(VideoUrl) );
        }
        if(AudioContains==1) {
            value += ('' + this.properAudioTag(AudioUrl) );
        }
        if(paraContains==1) {
            value += ('' + this.properMessage(paraMessage,bold, italic, mark, underline) );
        }
        
        value += '</div>';
        value += this.properSpace();
        value += '</div>';
        return value;

    }

    ProperGreenContainer(user, date, month, year, day, time, 
            paraContains, paraMessage, bold, italic, mark, underline,
            AtagContains, fileUrl, fileName, imageContains, imageUrl,
            VideoContains, VideoUrl, AudioContains, AudioUrl) {

        let value = '<div class="greenContainer">' + this.properSpace() + '<div class="greenMessage">' + '' + this.properMessageInfo(date,month,year,day,time,user);
        
        if(AtagContains==1){
        value += ( '' + this.properAtag(fileUrl,fileName));
        }
        if(imageContains==1) {
        value += ('' + this.properImage(imageUrl) );
        }
        if(VideoContains==1) {
            value += ('' + this.properVideoTag(VideoUrl) );
        }
        if(AudioContains==1) {
            value += ('' + this.properAudioTag(AudioUrl) );
        }
        if(paraContains==1) {
        value += ('' + this.properMessage(paraMessage,bold, italic, mark, underline) );
        }

        value += '</div>';
        value += '</div>';

        return value;
    }

    ProperAdminContainer(user, date, month, year, day, time, 
                        paraMessage, bold, italic, mark, underline) {

        let value = '<div class="notifyContainer">'  + '<div class="notifyMessage" style="opacity:0.5;">' + '' + this.properMessageInfo(date,month,year,day,time,user);
        value += ('' + this.properMessage(paraMessage,bold, italic, mark, underline) ) ;
        value += '</div>';
        value += '</div>';
        return value;   
        
    }

}