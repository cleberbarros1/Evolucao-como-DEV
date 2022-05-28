const element = document.getElementById("demostracao");

var span = "<code> FULL_STACK DEV </code>";

const myArray = span.split("");

i = 0;

setTimeout(ativaset, 3000);

function ativaset() {
					document.getElementById("demostracao").innerHTML = "";
					i = 0;
					stop = setInterval(hello, 100);
}



function hello() {
		if (i == myArray.length) {clearInterval(stop);setTimeout(ativaset, 300*i);}
		else {document.getElementById("demostracao").innerHTML += myArray[i];
        i = i + 1;}
        }
		
function trocaimg(fade,image,gear) {
document.getElementById("banner").style = "animation: moveup 2s infinite ease-in-out, " + fade + " .5s ease-in-out forwards;";
document.getElementById("imagemsocial").src = image;
document.getElementById("gear_id").style = "animation: giro2 10s infinite, " + gear + " .5s ease-in-out forwards;";}

function troca_cert(url_img) {
document.getElementById("cert_img").src = url_img;

}