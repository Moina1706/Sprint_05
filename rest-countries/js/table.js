async function render() {
  try {
    var reponse_fetch = await fetch("https://restcountries.com/v3.1/all");
    let res_new = await reponse_fetch.json();

    var table_countrie = document.getElementById("table1");

    for (let i = 0; i < res_new.length; i++) {
      if (res_new[i].region == "Europe") {
        var tbody = document.createElement("tbody");

        var tr_info = document.createElement("tr"); //La ligne
        var td_countrie_nom = document.createElement("td");
        var td_countrie_area = document.createElement("td");
        var td_countrie_population = document.createElement("td");
        var td_countrie_capital = document.createElement("td");
        td_countrie_population.classList = "text-end";
        td_countrie_area.classList = "text-end";
        td_countrie_nom.classList = "fw-bold";

        td_countrie_nom.textContent = res_new[i].name.official;

        td_countrie_area.textContent = Intl.NumberFormat().format(
          res_new[i].area
        );
        td_countrie_population.textContent = Intl.NumberFormat().format(
          res_new[i].population
        );

        td_countrie_capital.textContent = res_new[i].capital;

        tr_info.appendChild(td_countrie_nom);
        tr_info.appendChild(td_countrie_area);
        tr_info.appendChild(td_countrie_population);
        tr_info.appendChild(td_countrie_capital);
        tbody.appendChild(tr_info);
        table_countrie.appendChild(tbody);
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

window.addEventListener("load", function (event) {
  console.log("Toutes les ressources sont chargées !");
  render();
});
function clic() {
  location.reload();
}
