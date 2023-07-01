const form = document.querySelector('.feedback-form');
console.log(form);

form.addEventListener('input', onInput);

const FeedbackFromState = 'feedback-form-state';

function onInput(e) {
   const currentData = { email, message }  ;
    email = form.elements.email.value;
    message = form.elements.message.value;
    localStorage.setItem(FeedbackFromState, )
}