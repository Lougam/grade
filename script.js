

d = new Date();

hour = d.getHours();
day = d.getDay();

if(day < 1 && day >= 6)
{
    document.getElementById("status").src="IMAGENS/.png"  
}

else
if(hour >= 24 && hour < 2)
{
document.getElementById("status").src="IMAGENS/americala.png"
}

else
if(hour >= 2 && hour <3)
{
document.getElementById("status").src="IMAGENS/dhl.png"
}

else
if(hour >= 3 && hour < 4)
{
document.getElementById("status").src="IMAGENS/vgi.png"
}

else
if(hour >= 4 && hour < 5)
{
document.getElementById("status").src="IMAGENS/campinas.png"
}

else
if(hour >= 5 && hour < 6)
{
document.getElementById("status").src="IMAGENS/flp.png"
}

else
if(hour >= 6 && hour < 8)
{
document.getElementById("status").src="IMAGENS/dfgo.png"
}

else
if(hour >= 8 && hour < 9)
{
document.getElementById("status").src="IMAGENS/sedex1.png"
}

else
if(hour >= 11 && hour < 14)
{
document.getElementById("status").src="IMAGENS/rjmg.png"
}

else
if(hour >= 14 && hour < 16)
{
document.getElementById("status").src="IMAGENS/sedex2.png"
}

else
if(hour >= 15 && hour < 16)
{
document.getElementById("status").src="IMAGENS/fintrans.png"
}

else
if(hour >= 16  && hour < 17)
{
document.getElementById("status").src="IMAGENS/texcourier.png"
}

else
if(hour >= 17  && hour < 18)
{
document.getElementById("status").src="IMAGENS/gflsp.png"
}

else
if(hour >= 18  && hour < 20)
{
document.getElementById("status").src="IMAGENS/ctba.png"
}

else
if(hour >= 20  && hour < 21)
{
document.getElementById("status").src="IMAGENS/gfl1.png"
}

else
if(hour >= 21  && hour < 23)
{
document.getElementById("status").src="IMAGENS/presto537.png"
}
