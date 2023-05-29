export default function radiosSelector() {
  const radioBasic = document.getElementById("basic")
  const radioAdvanced = document.getElementById("advanced")
  const radioPro = document.getElementById("pro")

  radioBasic.addEventListener("change", (e) => {
    if (radioBasic.checked) {
      radioBasic.closest("[data-radio]").classList.add("selected")
      radioAdvanced.closest("[data-radio]").classList.remove("selected")
      radioPro.closest("[data-radio]").classList.remove("selected")
    }
  })

  radioAdvanced.addEventListener("change", (e) => {
    if (radioAdvanced.checked) {
      radioAdvanced.closest("[data-radio]").classList.add("selected")
      radioBasic.closest("[data-radio]").classList.remove("selected")
      radioPro.closest("[data-radio]").classList.remove("selected")
    }
  })

  radioPro.addEventListener("change", (e) => {
    if (radioPro.checked) {
      radioPro.closest("[data-radio]").classList.add("selected")
      radioAdvanced.closest("[data-radio]").classList.remove("selected")
      radioBasic.closest("[data-radio]").classList.remove("selected")
    }
  })
}
