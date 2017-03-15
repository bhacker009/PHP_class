//document.addEventListener('contextmenu', event => event.preventDefault());
var a = document.getElementsByTagName("button");
var boom = function() {
               alert("Boom !!"); 
           };
Array.prototype.forEach.call(a, function(e) {
	e.onclick = boom;
})
//a[0].addEventListener("click", boom)
//for(var i = 0; i < a.length; i++) {
//    a[i].onclick = function(){
//                alert("BOOM !!")
//            };
//}
