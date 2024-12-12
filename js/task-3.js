class StringBuilder {
  #value; // Приватна властивість

  constructor(initialValue) {
    this.#value = initialValue;
  }

  // Метод для отримання значення властивості value
  getValue() {
    return this.#value;
  }

  // Метод для додавання рядка в кінець значення
  padEnd(str) {
    this.#value += str;
  }

  // Метод для додавання рядка на початок значення
  padStart(str) {
    this.#value = str + this.#value;
  }

  // Метод для додавання рядка на початок і кінець значення
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

// Перевірка роботи класу
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="