function shout(string) {
    return string.toUpperCase();

}
function whisper(string) {
    return string.toLowerCase();

}
function logShout(string) {
    console.log(string.toUpperCase('hello'));

}

function logWhisper(string) {
    console.log(string.toLowerCase('HELLO'));
}
let notHear = `I can't hear you!`;
let heard = `YES INDEED!`;
let agreed = `I would love to!`;


function sayHiToHeadphonedRoommate(string){
   if (string === string.toLowerCase()){
    return `I can't hear you!`
   }
    else if (string === string.toUpperCase()){
     return `YES INDEED!`
    } else if (`Let's have dinner together!`){
        return  `I would love to!`
    }
 }
 