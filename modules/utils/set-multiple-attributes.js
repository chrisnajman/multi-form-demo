export default function setMultipleAttributes(element, attributesToSet) {
  for (let i in attributesToSet) {
    element.setAttribute(i, attributesToSet[i])
    // i is the attribute(s)
    // [i] is the attribute value(s)
  }
}

/*
 ** USAGE EXAMPLES **

 Note that hyphenated attributes, e.g. "aria-hidden", must be written as strings.

 const header = document.getElementById("header")

 setMultipleAttributes(header, {
  "data-header": "",
  tabindex: "0",
 })

 const footer = document.getElementById("footer")

 setMultipleAttributes(footer, {
  id: "footer",
  "aria-hidden": "false", 
 })

*/
