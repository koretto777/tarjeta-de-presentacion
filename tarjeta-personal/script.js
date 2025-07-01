/* enlazar los elementos de html */

const toggleButton = document.getElementById("toggle-button");
const body = document.body;
const logo = document.getElementById("logo")

/* función para ejecutar un código */

toggleButton.addEventListener("click", () => {
   body.classList.toggle("dark");

   /* cambiamos el logo segun el tema */

   const isDark = body.classList.contains("dark");

   logo.src = isDark ? "./assets/mood=dark.svg" : "./assets/logo koretto.svg"
})
