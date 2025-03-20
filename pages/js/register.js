/* === 给 input 绑定 blur 事件 === */
/* == 根据返回值 调整 class样式 == */
$('#username').blur(() => {
  if(!checkUsername()) {
    $('#username').addClass('show-warn-border');
    $('#usernameLabel').addClass('show-warn-label');
  } else {
    $('#username').removeClass('show-warn-border');
    $('#usernameLabel').removeClass('show-warn-label');
  }
})

$('#password').blur(() => {
  if(!checkPassword()) {
    $('#password').addClass('show-warn-border');
    $('#passwordLabel').addClass('show-warn-label');
  } else {
    $('#password').removeClass('show-warn-border');
    $('#passwordLabel').removeClass('show-warn-label');
  }
})

$('#checkPassword').blur(() => {
  if(!checkValPassword()) {
    $('#checkPassword').addClass('show-warn-border');
    $('#checkPasswordLabel').addClass('show-warn-label');
  } else {
    $('#checkPassword').removeClass('show-warn-border');
    $('#checkPasswordLabel').removeClass('show-warn-label');
  }
})

$('#phone').blur(() => {
  if(!checkPhone()) {
    $('#phone').addClass('show-warn-border');
    $('#phoneLabel').addClass('show-warn-label');
  } else {
    $('#phone').removeClass('show-warn-border');
    $('#phoneLabel').removeClass('show-warn-label');
  }
})

$('#email').blur(() => {
  if(!checkEmail()) {
    $('#email').addClass('show-warn-border');
    $('#emailLabel').addClass('show-warn-label');
  } else {
    $('#email').removeClass('show-warn-border');
    $('#emailLabel').removeClass('show-warn-label');
  }
})

/* === 注册按钮 === */
$('#registerBtn').click(() => {
  if(checkUsername() && checkPassword() && checkValPassword() && checkPhone() && checkEmail()) {
    alert("注册成功！");
  } else {
    alert("注册失败！");
  }
})

/* === check 函数 === */
function checkUsername () {
  const reg = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/;
  const usernameEl = $('#username');  /* input */
  
  if (usernameEl.val() == null || usernameEl.val() == '') {
    return false;
  }
  if (usernameEl.val().length < 6 || usernameEl.val().length >16) {
    return false;
  }
  if(!reg.test(usernameEl.val())) {
    return false;
  }
  return true;
}

function checkPassword () {
  const reg = /^[a-zA-Z0-9_@.]{6,16}$/;
  const passwordEl = $('#password');

  if (passwordEl.val().length < 6 || passwordEl.val().length >16) {
    return false;
  }
  if (!reg.test(passwordEl.val())) {
    return false;
  }
  return true;
}

function checkValPassword() {
  const passwordEl = $('#password');
  const checkPasswordEl = $('#checkPassword');

  if (checkPasswordEl.val() == null || checkPasswordEl.val() == "") {
    return false;
  }
  if (passwordEl.val() !== checkPasswordEl.val()) {
    return false;
  }
  return true;
}

function checkEmail () {
  const reg = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
  const emailEl = $('#email');
  
  if (!reg.test(emailEl.val())) {
    return false;
  } else {
    return true;
  }
}

function checkPhone () {
  const reg = /^1[3456789]\d{9}$/;
  const phoneEl = $('#phone');

  if (!reg.test(phoneEl.val())) {
    return false;
  }
  return true;
}