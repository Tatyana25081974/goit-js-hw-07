// Отримуємо форму
const loginForm = document.querySelector('.login-form');

// Додаємо обробку події submit
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Забороняємо перезавантаження сторінки

  // Отримуємо значення полів
  const email = event.target.elements.email.value.trim(); // Видаляємо пробіли
  const password = event.target.elements.password.value.trim(); // Видаляємо пробіли

  // Перевіряємо, чи всі поля заповнені
  if (!email || !password) {
    alert('All form fields must be filled in'); // Повідомлення про помилку
    return;
  }

  // Створюємо об'єкт із введеними даними
  const formData = {
    email,
    password,
  };

  console.log(formData); // Виводимо об'єкт у консоль
  loginForm.reset(); // Очищаємо поля форми
});

// Отримуємо кнопку Destroy
const destroyBtn = document.querySelector('.destroy-btn');

// Додаємо обробку події click для кнопки Destroy
destroyBtn.addEventListener('click', () => {
  loginForm.reset(); // Очищуємо всі поля форми
  alert('All form fields have been cleared!'); // Повідомлення про очищення
  console.log('Form fields cleared!');
});
