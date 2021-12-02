//assigning variables

var num,msg;
function sendMsg() {
  num  =  document.getElementById('numb').value;
   msg =  document.getElementById('message').value;

try {
    window.open("http://wa.me/"+ num+ "?text=" + msg,"_blank").focus()       //here ? is the url parameter

} catch(e) {
    // for unsupported broswers
    window.location.assign("http://wa.me"+ num + "?text=" + msg,"_blank");
}

}