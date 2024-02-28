//consumendo apis

//1 declarar variable para almacenar la url del api
 let url = "https://accounts.spotify.com/api/token"
//2 almacenar en una varabla o en varias variables datos de control que se necesiten en el api 
let token ="Bearer BQDnyuUXvx5Xc0yM01HUNpdvwVSwQx2Y_PrH1qjI3EdzDFLEmMNt58zVPHzePIP8jEakSuc41NMgqtWAM7hMWQC1rAtWAyOPpR4NSn1QpjQ4xL084jk"


//3 construir la peticon que se va a enviar 
let peticion={
 method:"GET",
 headers:{
Autorization:token
 }

}

//4 ejecutar el consumo del api
fetch(url,peticion)
.then(function(){})
.then(function(){})
.catch(function(){})