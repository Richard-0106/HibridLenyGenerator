$(document).ready(function(){
    const tanulokTomb=[];
    const allatokTomb=[]

    $.ajax(
        {
          url:"adatok.json",
           success : function(result){
             result.allatlista.forEach((value)=>{allatokTomb.push(value)})    
            }
        }
        );
        $.ajax(
            {
            url:"osztaly.json",
             success : function(result){
               result.tanulolista.forEach((value)=>{tanulokTomb.push(value)})    
             }
        }
      );
      function tablazatletrehozas(){

      }
    
  });