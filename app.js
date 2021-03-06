function copy() {
  var text = document.querySelector("#email")
  var selection = window.getSelection()
  window.setTimeout(function() {
    var range = document.createRange()
    selection.removeAllRanges() // if the user has selected something on their own, this removes it.
    range.selectNodeContents(text) //add the range I want
    selection.addRange(range)
    document.execCommand("copy")
  }, 1)
}

document.querySelector("#copy").addEventListener("click", copy)

if (document.querySelector("#swedish")) {
	document.querySelector("#swedish").addEventListener("click", () => {window.location.href = "swedish.html"})	
} else {
	document.querySelector("#english").addEventListener("click", () => {window.location.href = "index.html"})
}