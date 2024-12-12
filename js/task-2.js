class Storage {
  #items; // Приватна властивість

  constructor(initialItems) {
    this.#items = initialItems;
  }

  // Метод для отримання масиву товарів
  getItems() {
    return this.#items;
  }

  // Метод для додавання нового товару
  addItem(newItem) {
    this.#items.push(newItem);
  }

  // Метод для видалення товару
  removeItem(itemToRemove) {
    const itemIndex = this.#items.indexOf(itemToRemove);
    if (itemIndex !== -1) {
      this.#items.splice(itemIndex, 1);
    }
  }
}

// Перевірка роботи класу
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]