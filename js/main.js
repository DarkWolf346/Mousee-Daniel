function o1(){
			var cam=document.getElementById('cambiante');
			cam.src="images/ima1.png";
		}
		function o2(){
			var cam=document.getElementById('cambiante');
			cam.src="images/ima2.png";
		}
		function o3(){
			var cam=document.getElementById('cambiante');
			cam.src="images/ima3.gif";
}
function compra(){
	var nom=document.getElementById('Nombre').value;
	var np=document.getElementById('piezaspas').value;
	var total;
	total=np*30;
	if(np<6){
		alert("Tu Total a pagar es :"+total);
	}else{
		alert("Acabas de comprar una tarta completa y tu total a pagar es:"+total);
	}
	alert("Tu compra se realizo exitosamente");
}