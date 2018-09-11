function intextcontent()
{
	
	for (var i = 0; i < document.body.childElementCount; i++) 
	{
		console.log(document.body.children[i].innerText);	
	}
	
}
function nhanchuot()
{
	document.cookie='danhanchuot=yes';
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function anbanner()
{
	if (getCookie('danhanchuot')=='yes') {
		document.getElementById("banner-cookie").setAttribute('style','display:none;')
	} else {
		console.log("User chưa bấm nút");
	}
}
function intext()
{
	for (var i = 0; i < document.body.childElementCount; i++) {
		console.log( document.body.children[i].textContent);
	}
}