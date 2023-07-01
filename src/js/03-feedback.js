const form = document.querySelector('.feedback-form');
console.log(form);

form.addEventListener('input', onInput);

function onInput(e) {
   const data = { }  ;
   data[e.target.name] = e.target.value;
    message = form.elements.message.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(e.target.value))
}