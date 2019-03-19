window.onload=initAll;
function initall()
{
	document.getElementById("padding").onclick=1;
	document.getElementById("vw").onclick=2;
	document.getElementById("flex").onclick=3;
}
switch(initall()){
	case 1
	var newcss=document.getElementById("linkid");
    newcss.setAttribute("href","https://songnl.github.io/demo/padding.css");
    break;
    case 2
	var newcss=document.getElementById("linkid");
    newcss.setAttribute("href","https://songnl.github.io/demo/vw.css");
    break;
    case 3
	var newcss=document.getElementById("linkid");
    newcss.setAttribute("href","https://songnl.github.io/demo/flex.css");
    break;
}
	
