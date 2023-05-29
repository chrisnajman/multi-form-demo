import { circles } from "./utils/vars.js"

export default function stepController(circleClassName, stepHide, stepShow) {
  stepHide.classList.add("hidden")
  stepShow.classList.remove("hidden")
  circles.forEach((circle) => circle.classList.remove("circle-selected"))
  circleClassName.classList.add("circle-selected")
}
