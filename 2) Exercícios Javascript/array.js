min = (array) => {
  minNum = array[0];

  for (item of array) {
    if (item < minNum) minNum = item;
  }

  return minNum;
};

max = (array) => {
  minNum = array[0];

  for (item of array) {
    if (item > minNum) minNum = item;
  }

  return minNum;
};

range = (comprimento, ultimo, intervalo) => {
  resultado = [];

  if (comprimento && ultimo == undefined && intervalo == undefined) {
    for (x = 0; x < comprimento; x++) {
      resultado.push(x);
    }
  } else if (comprimento && ultimo && intervalo == undefined) {
    for (x = comprimento; x < ultimo; x++) {
      resultado.push(x);
    }
  } else {
    for (x = comprimento; x < ultimo; x += intervalo) {
      resultado.push(x);
    }
  }

  return resultado;
};

zip = (...arrays) => {
    result = [];
    for (indice = 0; indice < arrays.length; indice++) {
      values = [];
      for (array = 0; array < arrays.length; array++)
        values.push(arrays[array][indice]);
      result.push(values);
    }
    return result;
};

uniq = (array) => {
  arrayUnico = [];
  for (element of array)
    if (!(element in arrayUnico)) {
      arrayUnico.push(element);
    }
  return sortNum(arrayUnico);
};

sortNum = (array) => {
  ordenado = array.sort((a, b) => a - b);
  return ordenado;
};

console.log(min([1, 4, 2, 6, 10, 3]));
console.log(min([1, 4, -1, 6, 10, 3]));
console.log(max([1, 4, 2, 6, 10, 3]));
console.log(range(10));
console.log(range(1, 11));
console.log(zip(['moe', 'larry', 'curly'],['30', '40', '50'],['rue', 'false', 'false']));
console.log(range(0, 30, 5));
console.log(uniq([1, 2, 1, 4, 1, 3]));
console.log(uniq([1, 2, 1, 3, 3]));
console.log(sortNum([0, 3, 2]));
console.log(sortNum([0, 2, 10, 3, 32]));