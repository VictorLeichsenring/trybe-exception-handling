function verifyInput(input) {
  if (!input) {
    throw new Error('Preencha os campos para realizar a soma');
  }
}

function verifyNumber(number) {
  if (isNaN(number)) {
    throw new Error('Informe dois números para realizar a soma');
  }
}

function calculateSum() {
  const value1 = document.getElementById('value1');
  const value2 = document.getElementById('value2');
  try {
    verifyInput(value1.value);
    verifyInput(value2.value);
    verifyNumber(value1.value);
    verifyNumber(value2.value);
    const result = Number(value1.value) + Number(value2.value);
    return result;
  } catch (error) {
    return error.message;
  } finally {
    value1.value = '';
    value2.value = '';
  }
}

function displayResult(result) {
  document.getElementById('result').innerHTML = `Resultado: ${result}`;
}

function sum() {
  const result = calculateSum();
  displayResult(result);
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
};
