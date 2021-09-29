$(document).ready(function(){
    const tanulokTomb=[];
    const allatokTomb=[]

    $.ajax(
        {
          url:"adatok.json",
           success : function(result){
             result.adatok.forEach((value)=>{allatokTomb.push(value)})    
            }
        }
        );
        $.ajax(
            {
            url:"osztaly.json",
             success : function(result){
               result.osztaly.forEach((value)=>{tanulokTomb.push(value)})    
             }
        }
      );
      function tablazatletrehozas(){

      }
    
  });