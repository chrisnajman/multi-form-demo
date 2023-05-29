export const step1 = document.querySelector("[data-step-1]")
export const step2 = document.querySelector("[data-step-2]")
export const step3 = document.querySelector("[data-step-3]")
export const step4 = document.querySelector("[data-step-4]")
export const step5 = document.querySelector("[data-step-5]")
export const circles = document.querySelectorAll(".circle")
export const circle1 = document.getElementById("circle-1")
export const circle2 = document.getElementById("circle-2")
export const circle3 = document.getElementById("circle-3")
export const circle4 = document.getElementById("circle-4")
export const circle5 = document.getElementById("circle-5")
export const btnNext2 = document.getElementById("next-2")
export const btnNext3 = document.getElementById("next-3")
export const btnNext4 = document.getElementById("next-4")
export const btnPrev1 = document.getElementById("prev-1")
export const btnPrev2 = document.getElementById("prev-2")
export const btnPrev3 = document.getElementById("prev-3")
export const btnFinish = document.getElementById("finish")
export const userName = document.querySelectorAll("[data-user-name]")
export const userEmail = document.querySelectorAll("[data-user-email]")
export const userPhone = document.querySelector("[data-user-phone]")
export const summaryPlanName = document.querySelector(
  "[data-plan-name-summary]"
)
export const planPeriodShared = document.querySelectorAll(
  "[data-plan-period-shared]"
)
export const summaryPlanPeriodFull = document.querySelector(
  "[data-plan-periodfull-summary]"
)
export const summaryPlanPrice = document.querySelector(
  "[data-plan-price-summary]"
)
export const formDetails = document.getElementById("form-details")
export const fullName = document.querySelector("[data-name]")
export const email = document.querySelector("[data-email]")
export const phone = document.querySelector("[data-phone]")
export const formSelectPlan = document.getElementById("select-plan")
export const formPickAddons = document.getElementById("pick-add-ons")
export const radiosName = document.querySelectorAll("[data-select-plan]")
export const priceBasic = document.querySelector("[data-basic-price]")
export const priceAdvanced = document.querySelector("[data-advanced-price]")
export const pricePro = document.querySelector("[data-pro-price]")
export const planPeriod = document.querySelectorAll("[data-period]")
export const monthsFree = document.querySelectorAll("[data-months-free]")
export const switcher = document.getElementById("switcher")
export const switchMonthly = document.getElementById("switch-monthly")
export const switchYearly = document.getElementById("switch-yearly")
export const planPrices = {
  basic: [9, 90],
  advanced: [12, 120],
  pro: [15, 150],
}
export const addonPrices = {
  onlineService: [1, 10],
  largerStorage: [2, 20],
  customProfile: [2, 20],
}
export const addonOnlineServicePrice = document.querySelector(
  "[data-support-price]"
)
export const addonLargerStoragePrice = document.querySelector(
  "[data-larger-storage-price]"
)
export const addonCustomProfilePrice = document.querySelector(
  "[data-custom-profile-price]"
)
export const addonsCheckboxes = document.querySelectorAll("[data-checkbox]")

export const summaryAddonDetails = document.getElementById(
  "summary-addon-details"
)
export const summaryNumbersArray = []
export const summaryTotalPrice = document.querySelector(
  "[data-summary-total-price]"
)
export const selectAddonOnline = document.querySelector(
  "[data-select-addon-online]"
)
export const selectAddonStorage = document.querySelector(
  "[data-select-addon-storage]"
)
export const selectAddonCustom = document.querySelector(
  "[data-select-addon-custom]"
)
export const summaryPrice = document.querySelectorAll("[ data-price-summary]")

export const summaryOnlineAddonPrice = document.querySelector(
  "[data-addon-online-price-summary]"
)
export const summaryStorageAddonPrice = document.querySelector(
  "[data-addon-storage-price-summary]"
)
export const summaryCustomAddonPrice = document.querySelector(
  "[data-addon-custom-price-summary]"
)
export const summary = document.getElementById("summary")
export const btnClear = document.getElementById("btn-clear")
export const btnBackToPersonal = document.getElementById("back-to-step-1")
export const btnBackToPlan = document.getElementById("back-to-step-2")
export const btnBackToAddons = document.getElementById("back-to-step-3")
