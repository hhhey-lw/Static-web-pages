/* === 获取DOM元素 === */
const username = document.getElementById('username');
const password = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');

/* === 绑定登录事件 === */
loginBtn.addEventListener('click', () => {
  // console.log(username.value);
  // console.log(password.value);
  if(username.value !== '' && password.value !== '') {
    alert("登录成功！");
  } else {
    alert("登录失败！");
  }
})
