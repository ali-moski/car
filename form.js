let usernameInputElem = document.querySelector('.username-input')
let usernameInputErrorElem = document.querySelector('.username-input-error')

console.log(usernameInputElem);
usernameInputElem.addEventListener('keydown' , ()=> {
   if (usernameInputElem.value.length < 8) {
    usernameInputErrorElem.style.display = 'block'
    usernameInputErrorElem.style.color = 'red'
   } else {
    usernameInputErrorElem.style.display = 'block'
    usernameInputErrorElem.style.color = 'green'
    usernameInputErrorElem.innerHTML = 'نام کاربری درست میباشد'
    setTimeout(() => {
        usernameInputErrorElem.style.display = 'none'
    }, 3000);
   }
})
//......................................................................................................

let nameInputElem = document.querySelector('.name-input')
let nameInputErrorElem = document.querySelector('.name-input-error')

console.log(nameInputElem);
nameInputElem.addEventListener('keydown' , ()=> {
   if (nameInputElem.value.length < 8) {
    nameInputErrorElem.style.display = 'block'
    nameInputErrorElem.style.color = 'red'
   } else {
    nameInputErrorElem.style.display = 'block'
    nameInputErrorElem.style.color = 'green'
    nameInputErrorElem.innerHTML = 'نام کاربری درست میباشد'
    setTimeout(() => {
        nameInputErrorElem.style.display = 'none'
    }, 3000);
   }
})
//........................................................................................................

let familyInputElem = document.querySelector('.family-input')
let familyInputErrorElem = document.querySelector('.family-input-error')

console.log(familyInputElem);
familyInputElem.addEventListener('keydown' , ()=> {
   if (familyInputElem.value.length < 8) {
    familyInputErrorElem.style.display = 'block'
    familyInputErrorElem.style.color = 'red'
   } else {
    familyInputErrorElem.style.display = 'block'
    familyInputErrorElem.style.color = 'green'
    familyInputErrorElem.innerHTML = 'نام کاربری درست میباشد'
    setTimeout(() => {
        familyInputErrorElem.style.display = 'none'
    }, 1500);
   }
})
//........................................................................................................

let emailInputElem = document.querySelector('.email-input');
let emailInputErrorElem = document.querySelector('.email-input-error');

console.log(emailInputElem);

emailInputElem.addEventListener('keydown', () => {


  // بررسی ساختار ایمیل با استفاده از عبارات با قاعده
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValidEmail = emailRegex.test(emailInputElem.value);

  if (!isValidEmail) {
    emailInputErrorElem.style.display = 'block';
    emailInputErrorElem.style.color = 'red';
    emailInputErrorElem.innerHTML = 'ساختار ایمیل نامعتبر است';
    return;
  }

  // نمایش پیام موفقیت
  emailInputErrorElem.style.display = 'block';
  emailInputErrorElem.style.color = 'green';
  emailInputErrorElem.innerHTML = 'ایمل شما درست می‌باشد';

  // پنهان کردن پیام بعد از 1.5 ثانیه
  setTimeout(() => {
    emailInputErrorElem.style.display = 'none';
  }, 1500);
});
//.........................................................................................................

let passwordInputElem = document.querySelector('.password-input');
let passwordInputErrorElem = document.querySelector('.password-input-error');

console.log(passwordInputElem);

passwordInputElem.addEventListener('keydown', () => {
  // بررسی طول رمز
  if (passwordInputElem.value.length < 8) {
    passwordInputErrorElem.style.display = 'block';
    passwordInputErrorElem.style.color = 'red';
    passwordInputErrorElem.innerHTML = 'رمز عبور باید حداقل 8 کاراکتر داشته باشد.';
    return;
  }

  // بررسی ساختار رمز با استفاده از عبارات منظم
  const regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).+$/;
  const isValidPassword = regex.test(passwordInputElem.value);

  if (!isValidPassword) {
    passwordInputErrorElem.style.display = 'block';
    passwordInputErrorElem.style.color = 'red';
    passwordInputErrorElem.innerHTML = 'رمز عبور باید شامل حروف و عدد باشد.';
    return;
  }

  // نمایش پیام موفقیت
  passwordInputErrorElem.style.display = 'block';
  passwordInputErrorElem.style.color = 'green';
  passwordInputErrorElem.innerHTML = 'رمز عبور درست میباشد';

  // پنهان کردن پیام بعد از 1.5 ثانیه
  setTimeout(() => {
    passwordInputErrorElem.style.display = 'none';
  }, 1500);
});

  //......................................................................................


  
