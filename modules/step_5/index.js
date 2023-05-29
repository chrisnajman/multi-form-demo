import { btnClear } from "../utils/vars.js"

export default function step_5() {
  btnClear.addEventListener("click", () => {
    window.location.reload()
  })
}
