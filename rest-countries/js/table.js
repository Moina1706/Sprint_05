function render() {
  fetch("https://restcountries.com/v3.1/all").then(function (response) {
    //console.log(response);
    const continent = response.json();
    //console.log(continent);

    var table_countrie = document.getElementById("table1");

    continent.then((res_new) => {
      //console.log("RES", res_new);

      for (let i = 0; i < res_new.length; i++) {
        if (res_new[i].region == "Europe") {
          //console.log(res_new[i].capital);
          var tbody = document.createElement("tbody");

          var tr_info = document.createElement("tr"); //La ligne
          var td_countrie_nom = document.createElement("td");
          var td_countrie_area = document.createElement("td");
          var td_countrie_population = document.createElement("td");
          var td_countrie_capital = document.createElement("td");
          td_countrie_population.classList = "text-end";
          td_countrie_area.classList = "text-end";
          td_countrie_nom.classList = "fw-bold";
          //console.log("RESdeI", res_new[i].region);
          td_countrie_nom.textContent = res_new[i].name.official;

          td_countrie_area.textContent = Intl.NumberFormat().format(
            res_new[i].area
          );
          td_countrie_population.textContent = Intl.NumberFormat().format(
            res_new[i].population
          );
          // td_countrie_population.textContent = res_new[i].population;
          td_countrie_capital.textContent = res_new[i].capital;
          //console.log(new Intl.NumberFormat().format(res_new[i].population));

          tr_info.appendChild(td_countrie_nom);
          tr_info.appendChild(td_countrie_area);
          tr_info.appendChild(td_countrie_population);
          tr_info.appendChild(td_countrie_capital);
          tbody.appendChild(tr_info);
          table_countrie.appendChild(tbody);
        }
      }
    });
  });
}

window.addEventListener("load", function (event) {
  console.log("Toutes les ressources sont chargées !");
  render();
});
