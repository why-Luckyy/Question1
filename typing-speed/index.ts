const startBtn = document.getElementById("startBtn") as HTMLButtonElement
const textInput = document.getElementById("textInput") as HTMLTextAreaElement
const timeDisplay = document.getElementById("time") as HTMLSpanElement
const wpmDisplay = document.getElementById("wpm") as HTMLSpanElement
let time = 0
let timer: number
startBtn.addEventListener("click", () => {
  textInput.disabled = false
  textInput.value = ""
  time = 0
  timeDisplay.textContent = "0"
  wpmDisplay.textContent = "0"
  clearInterval(timer)
  timer = setInterval(() => {

    time++
    timeDisplay.textContent = time.toString()
    calculateWPM()
  },1000)
})

function calculateWPM(){
  const text = textInput.value.trim()
  const words = text.length / 5
  const minutes = time / 60
  const wpm = minutes > 0 ? Math.round(words / minutes) : 0
  wpmDisplay.textContent = wpm.toString();

}