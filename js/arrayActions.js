import { random } from "./random.js";

export const fillArray = (vector) => {
    emptyArray(vector);
    for (let i = 0; i < 6; i++) {
      vector.push(random());
    }
};

export const printArray = (vector) => {
  let vectorCompleto = "[";

  for (let i = 0; i < vector.length; i++) {
    vectorCompleto += vector[i];
    if (i < vector.length - 1) {
      vectorCompleto += ", ";
    }
  }

  vectorCompleto += "]";

  return vectorCompleto;
};

export const maxNumberArray = (vector) => {
    let maximo = vector[0];
    for (let i = 1; i < vector.length; i++) {
      if (vector[i] > maximo) {
        maximo = vector[i];
      }
    }
    return maximo;
};

const emptyArray = (vector) => {
    vector.splice(0, vector.length);
};
