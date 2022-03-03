var selector = document.getElementById("tel");

var im = new Inputmask("+7 (999) 999 - 99 - 99");
im.mask(selector);

const validation = new JustValidate('#form', {
  errorLabelStyle: {
    position: "absolute",
    color: "#D11616"
  }
});

validation
  .addField('#name', [{
      rule: 'minLength',
      value: 2,
      errorMessage: 'Как вас зовут?',
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      errorMessage: 'Заполните поле',
    }
  ])
  .addField('#tel', [{
      rule: 'required',
      errorMessage: 'Заполните поле',
    },
    {
      validator: (value) => selector.inputmask.unmaskedvalue().length === 10,
      errorMessage: 'Недопустимый формат'
    }
  ])