import {
  formPickAddons,
  addonOnlineServicePrice,
  addonLargerStoragePrice,
  addonCustomProfilePrice,
  addonsCheckboxes,
  summaryNumbersArray,
  summaryTotalPrice,
  selectAddonOnline,
  selectAddonStorage,
  selectAddonCustom,
  summaryPrice,
  summaryOnlineAddonPrice,
  summaryStorageAddonPrice,
  summaryCustomAddonPrice,
} from "../utils/vars.js"

import { prev2Next4Btns } from "../prev-next.js"

export default function step_3() {
  formPickAddons.addEventListener("submit", (e) => {
    e.preventDefault()

    const onlineCheckbox = selectAddonOnline.querySelector("#support")
    const storageCheckbox = selectAddonStorage.querySelector("#larger-storage")
    const customCheckbox = selectAddonCustom.querySelector(
      "#customisable-profile"
    )

    onlineCheckbox.checked
      ? (summaryOnlineAddonPrice.textContent =
          addonOnlineServicePrice.textContent)
      : (summaryOnlineAddonPrice.textContent = "0")

    storageCheckbox.checked
      ? (summaryStorageAddonPrice.textContent =
          addonLargerStoragePrice.textContent)
      : (summaryStorageAddonPrice.textContent = "0")

    customCheckbox.checked
      ? (summaryCustomAddonPrice.textContent =
          addonCustomProfilePrice.textContent)
      : (summaryCustomAddonPrice.textContent = "0")

    summaryPrice.forEach((price) => {
      summaryNumbersArray.push(price.textContent)
    })

    const summaryNumbersArrayInt = summaryNumbersArray.map(Number)

    const summaryNumbersArrayReduce = summaryNumbersArrayInt.reduce(
      (total, nums) => {
        return total + nums
      },
      0
    )

    const summaryTotalPriceString = String(summaryNumbersArrayReduce)
    summaryTotalPrice.textContent = summaryTotalPriceString

    // This stops the array adding (rather than replacing) values when you go back and change addons etc.
    summaryNumbersArray.length = 0
  })

  addonsCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      e.target.closest("[data-select-addon]").classList.toggle("selected")
    })
  })

  prev2Next4Btns()
}
