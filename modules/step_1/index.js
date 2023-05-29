import {
  userName,
  userEmail,
  userPhone,
  formDetails,
  fullName,
  email,
  phone,
} from "../utils/vars.js"

import { next2Btn } from "../prev-next.js"

export default function step_1() {
  formDetails.addEventListener("submit", (e) => {
    e.preventDefault()

    const valFullName = fullName.value
    const valEmail = email.value
    const valPhone = phone.value
    userName.forEach((fullName) => {
      fullName.textContent = valFullName
    })
    userEmail.forEach((email) => {
      email.textContent = valEmail
    })
    userName.textContent = valFullName
    userEmail.textContent = valEmail
    userPhone.textContent = valPhone
  })

  next2Btn(fullName, email, phone)
}
