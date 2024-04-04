document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  const feedbackKey = 'feedback-form-state';
  const formData = JSON.parse(localStorage.getItem(feedbackKey)) || {};
  if (formData.email) {
    emailInput.value = formData.email;
  }
  if (formData.message) {
    messageInput.value = formData.message;
  }

  form.addEventListener('input', () => {
    const formData = {
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    };
    localStorage.setItem(feedbackKey, JSON.stringify(formData));
  });

  form.addEventListener('submit', event => {
    event.preventDefault();

    if (formData.email && formData.message) {
      console.log(formData);
      localStorage.removeItem(feedbackKey);
      emailInput.value = '';
      messageInput.value = '';
      alert('Дякуємо за ваш відгук!');
    } else {
      alert('Будь ласка, заповніть поля електронної пошти та повідомлення.');
    }
  });
});
