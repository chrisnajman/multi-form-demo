import {
  step1,
  step2,
  step3,
  step4,
  step5,
  circle1,
  circle2,
  circle3,
  circle4,
  circle5,
  btnNext2,
  btnNext3,
  btnNext4,
  btnPrev1,
  btnPrev2,
  btnPrev3,
  btnFinish,
  btnBackToPersonal,
  btnBackToPlan,
  btnBackToAddons,
} from "./utils/vars.js"

import stepController from "./step-controller.js"

export function next2Btn(fullName, email, phone) {
  btnNext2.addEventListener("click", () => {
    if (fullName.value === "" || email.value === "" || phone.value === "")
      return
    stepController(circle2, step1, step2)
  })
}

export function prev1Next3Btns() {
  btnPrev1.addEventListener("click", () =>
    stepController(circle1, step2, step1)
  )
  btnNext3.addEventListener("click", () =>
    stepController(circle3, step2, step3)
  )
}

export function prev2Next4Btns() {
  btnPrev2.addEventListener("click", () => {
    stepController(circle2, step3, step2)
  })
  btnNext4.addEventListener("click", () =>
    stepController(circle4, step3, step4)
  )
}

export function prev3NextFinishBtns() {
  btnPrev3.addEventListener("click", () => {
    stepController(circle3, step4, step3)
  })
  btnFinish.addEventListener("click", () =>
    stepController(circle5, step4, step5)
  )
}

export function backToPersonalBtn() {
  btnBackToPersonal.addEventListener("click", () => {
    stepController(circle1, step4, step1)
  })
}

export function backToPlanBtn() {
  btnBackToPlan.addEventListener("click", () => {
    stepController(circle2, step4, step2)
  })
}

export function backToAddonsBtn() {
  btnBackToAddons.addEventListener("click", () => {
    stepController(circle3, step4, step3)
  })
}
