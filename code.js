
function load()
{

	let mym=document.getElementById('division').value;
	invis_all();
	if(mym!='SELECT DIVISION'){
	let sub=document.getElementById(mym);
	


    
	sub.style.display="block";
}
else
document.getElementById("def").style.display="block";


}

 function invis_all()
 {
 	document.getElementById("Dhaka").style.display="none";
 	document.getElementById("Rajshahi").style.display="none";
 	document.getElementById("Barisal").style.display="none";
 	document.getElementById("Chittagong").style.display="none";
 	document.getElementById("Rangpur").style.display="none";
 	document.getElementById("Sylhet").style.display="none";
 	document.getElementById("Khulna").style.display="none";
 	document.getElementById("Mymensing").style.display="none";
 	document.getElementById("def").style.display="none";

 }