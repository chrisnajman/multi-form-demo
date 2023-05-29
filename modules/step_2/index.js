import {
  summaryPlanName,
  planPeriodShared,
  summaryPlanPeriodFull,
  summaryPlanPrice,
  formSelectPlan,
  radiosName,
  addonPrices,
  addonOnlineServicePrice,
  addonLargerStoragePrice,
  addonCustomProfilePrice,
} from "../utils/vars.js"

import radiosSelector from "./radios-selector.js"
import planPeriodToggle from "./plan-period-toggle.js"
import { prev1Next3Btns } from "../prev-next.js"

export default function step_2() {
  formSelectPlan.addEventListener("submit", (e) => {
    e.preventDefault()

    radiosName.forEach((radio) => {
      const radioWrapper = radio.closest("[data-radio]")
      const planName = radioWrapper.querySelector("[data-plan-name]")
      const planPrice = radioWrapper.querySelector("[data-plan-price]")
      const plan_Period = radioWrapper.querySelector("[data-period]")
      if (radio.checked) {
        summaryPlanName.textContent = planName.textContent

        planPeriodShared.forEach((period) => {
          period.textContent = plan_Period.textContent

          if (period.textContent === "mo") {
            summaryPlanPeriodFull.textContent = "Monthly"
            addonOnlineServicePrice.textContent = addonPrices.onlineService[0]
            addonLargerStoragePrice.textContent = addonPrices.largerStorage[0]
            addonCustomProfilePrice.textContent = addonPrices.customProfile[0]
          } else {
            summaryPlanPeriodFull.textContent = "Yearly"
            addonOnlineServicePrice.textContent = addonPrices.onlineService[1]
            addonLargerStoragePrice.textContent = addonPrices.largerStorage[1]
            addonCustomProfilePrice.textContent = addonPrices.customProfile[1]
          }
        })

        summaryPlanPrice.textContent = planPrice.textContent
      }
    })
  })

  radiosSelector()

  prev1Next3Btns()

  planPeriodToggle()
}
