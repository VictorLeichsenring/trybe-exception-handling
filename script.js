function verifyInput(input) {
  if (!input) {
    throw new Error('Preencha os campos para realizar a soma');
  }
}

function verifyNumber(number) {
  if (Number.isNaN(Number(number))) {
    throw new Error('Informe dois números para realizar a soma');
  }
}

function calculateSum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  try {
    verifyInput(value1);
    verifyInput(value2);
    verifyNumber(value1);
    verifyNumber(value2);
    const result = Number(value1) + Number(value2);
    return result;
  } catch (error) {
    return error.message;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
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
