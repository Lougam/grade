
d = new Date();

hour = d.getHours();

if(hour > 23 && hour <= 2)
{
document.getElementById("status").src="IMAGENS/hub14.png"
}

else
if(hour > 2 && hour <= 4)
{
document.getElementById("status").src="IMAGENS/hub08.png"
}

else
if(hour > 4 && hour <= 5)
{
document.getElementById("status").src="IMAGENS/ctba.png"
}

else
if(hour > 5 && hour <= 6)
{
document.getElementById("status").src="IMAGENS/flp.png"
}

else
if(hour > 6 && hour <= 7)
{
document.getElementById("status").src="IMAGENS/hub08.png"
}

else
if(hour > 12 && hour <= 13)
{
document.getElementById("status").src="IMAGENS/hub14.png"
}

else
if(hour > 18 && hour <= 19)
{
document.getElementById("status").src="IMAGENS/ctba.png"
}

else
if(hour > 19 && hour <= 21)
{
document.getElementById("status").src="IMAGENS/gfl1.png"
}

