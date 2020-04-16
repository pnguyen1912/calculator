let firstNumber = 0;
let secondNumber = 0;
let result = 0;
let temp = '';
let method = '';

let display = document.getElementById('linlin')

let addToTemp = (num) => {
  temp += num
  display.innerText = temp
  console.log('temp', temp)
}

let changeMethod = (string) => {
  method = string
  firstNumber = temp
  temp = ''
  console.log('temp', temp)
  console.log('so dau tien', firstNumber)
  console.log('method', method)
}

let calculate = () => {
  secondNumber = temp
  console.log('so thu hai', secondNumber)
  switch (method) {
    case '+':
      result = Number(firstNumber) + Number(secondNumber)
      break;
    case '-':
      result = firstNumber - secondNumber
      break;
    case '*':
      result = firstNumber * secondNumber
      break;
    case '/':
      result = firstNumber / secondNumber
      break;
  }
  console.log('result', result)
  display.innerText = result
  temp = ''
  firstNumber = 0
  secondNumber = 0
}
