$(document).ready(function () {
  const allatokTomb = []
  const tanulokTomb = []

  $.ajax(
    {
      url: "adatok.json",
      success: function (result) {
        result.allatlista.forEach((value) => { allatokTomb.push(value) })
      }
    }
  );
  $.ajax(
    {
      url: "osztaly.json",
      success: function (result) {
        result.tanulolista.forEach((value) => { tanulokTomb.push(value) })
        tablazatletrehozas()
      }
    }
  );


  function tablazatletrehozas() {
    $("section").append("<table></table>")
    for (let i = 0; i < tanulokTomb.length; i++) {
      const element = tanulokTomb[i]
      $("table").append("<tr></tr>")
      $("table tr").eq(i).append("<td>" + element + "</td>")
      let szam = Math.floor(Math.random() * allatokTomb.length)
      let szam2 = Math.floor(Math.random() * allatokTomb.length)
      let szam3 = Math.floor(Math.random() * allatokTomb.length)
      while (szam === szam2 || szam2 === szam3 || szam === szam3) {
        szam = Math.floor(Math.random() * allatokTomb.length)
        szam2 = Math.floor(Math.random() * allatokTomb.length)
        szam3 = Math.floor(Math.random() * allatokTomb.length)
      }
      console.log(szam, szam2, szam3)
      $("table tr").eq(i).append("<td>" + allatokTomb[szam] + "</td><td>" + allatokTomb[szam2] + "</td><td>" + allatokTomb[szam3] + "</td>")
    }
  }
});