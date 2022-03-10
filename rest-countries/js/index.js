function render() {
  fetch("https://restcountries.com/v3.1/all").then(function (response) {
    //console.log(response);
    const continent = response.json();
    //console.log(continent);

    continent.then((res_new) => {
      console.log(res_new);
      html = document.getElementById("list");
      html.innerHTML = "";
      for (let i = 0; i < res_new.length; i++) {
        if (res_new[i].region == "Europe") {
          html.innerHTML +=
            "<li id=" + i + ">" + res_new[i].name.official + "</li>";
        }
      }
    });
  });
}

window.addEventListener("load", function (event) {
  console.log("Toutes les ressources sont chargées !");
  render();
});
