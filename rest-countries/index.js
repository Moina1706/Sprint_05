async function render() {
  var xhttp = new XMLHttpRequest();
  var respJSON = [];
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      resp = this.responseText;
      respJSON = JSON.parse(resp);

      html = document.getElementById("list");
      html.innerHTML = "";
      let d = 0;
      for (var i = 0; i < respJSON.length; i++) {
        if (respJSON[i].region == "Europe") {
          html.innerHTML +=
            "<li id=" + i + ">" + respJSON[i].name.official + "</li>";
          d = d + 1;
          //console.log(d);
        }
      }
    }
  };
  xhttp.open("GET", "https://restcountries.com/v3.1/all", true);
  xhttp.send();
}
render();
