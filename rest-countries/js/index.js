async function render() {
  try {
    var reponse_fetch = await fetch("https://restcountries.com/v3.1/all");
    let result = await reponse_fetch.json();
    console.log(result);

    if (result.status == 404) {
      console.log("Y a plus de reseau");
    } else {
      html = document.getElementById("list");
      html.innerHTML = "";
      for (let i = 0; i < result.length; i++) {
        if (result[i].region == "Europe") {
          html.innerHTML +=
            "<li id=" + i + ">" + result[i].name.official + "</li>";
        }
      }
    }
  } catch (error) {
    let btn = document.getElementById("err");
    btn.innerHTML =
      "<button type=button class=btn-warning >" + "Reload" + "</button>";
    btn.setAttribute("onclick", "clic()");
    console.error("dans le catch", error);
  }
}
/*
 */
window.addEventListener("load", function (event) {
  console.log("Toutes les ressources sont chargées !");
  render();
});
function clic() {
  location.reload();
}
