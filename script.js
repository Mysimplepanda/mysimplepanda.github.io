function d2_to_10(binary) {
  let decimal = parseInt(binary, 2);
  let binaryStr = binary.toString();
  let steps = '';

  for (let i = binaryStr.length - 1; i >= 0; i--) {
    steps += `${binaryStr[i]} * 2^${binaryStr.length - i - 1}`;
    if (i > 0) steps += ' + ';
  }
  
  return `${steps} = ${decimal}`;
}

function d10_to_2(decimal) {
  let binary = (decimal >>> 0).toString(2);
  let steps = '';
  let i = 0;

  while (decimal > 0) {
    steps += `Step ${++i}: ${decimal} / 2 = ${Math.floor(decimal / 2)} ...  ${decimal % 2}\n`;
    decimal = Math.floor(decimal / 2);
  }

  return `${steps}Binary: ${binary}`;
}

function convert() {
  let number = document.getElementById('number').value.trim();
  let base = document.getElementById('base').value;
  let result = '';

  if (base == '2' && number !== '') {
    result = d10_to_2(parseInt(number, 10));
  } else if (base == '10' && /^[01]+$/.test(number)) {
    result = d2_to_10(number);
  } else {
    result = '請輸入有效的數字。';
  }
  
  document.getElementById('result').innerText = result;
}
