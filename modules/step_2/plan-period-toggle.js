import {
  priceBasic,
  priceAdvanced,
  pricePro,
  planPeriod,
  monthsFree,
  switcher,
  switchMonthly,
  switchYearly,
  planPrices,
} from "../utils/vars.js"

import setMultipleAttributes from "../utils/set-multiple-attributes.js"

export default function planPeriodToggle() {
  switcher.addEventListener("change", (e) => {
    setMultipleAttributes(e.target, {
      checked: e.target.checked,
      "aria-checked": e.target.checked,
    })

    if (e.target.checked === false) {
      switchYearly.classList.add("period-selected")
      switchMonthly.classList.remove("period-selected")
      priceBasic.textContent = planPrices.basic[1]
      priceAdvanced.textContent = planPrices.advanced[1]
      pricePro.textContent = planPrices.pro[1]
      planPeriod.forEach((period) => (period.textContent = "yr"))
      monthsFree.forEach((months) => {
        months.removeAttribute("aria-hidden")
        months.classList.remove("months-hidden")
      })
    } else {
      switchMonthly.classList.add("period-selected")
      switchYearly.classList.remove("period-selected")
      priceBasic.textContent = planPrices.basic[0]
      priceAdvanced.textContent = planPrices.advanced[0]
      pricePro.textContent = planPrices.pro[0]
      planPeriod.forEach((period) => (period.textContent = "mo"))
      monthsFree.forEach((months) => {
        months.setAttribute("aria-hidden", true)
        months.classList.add("months-hidden")
      })
    }
  })
}
