const dice = document.getElementById("dice")
const btnThrow = document.getElementById("btnThrow")

calculateNumber()

btnThrow.addEventListener("click", function() {
  dice.innerText = calculateNumber()
})

function calculateNumber() {
  return Math.floor(Math.random() * Math.floor(5)) + 1
}
