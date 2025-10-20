document.addEventListener("DOMContentLoaded", () => {
  const btnLoupe = document.getElementById("btn-loupe");
  const recetteZone = document.getElementById("recette-zone");

  btnLoupe.addEventListener("click", () => {
    recetteZone.classList.toggle("active");
  });
});
