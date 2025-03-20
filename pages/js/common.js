console.log("响应式网页");

/* === 获取dom元素 === */
const navToggle = document.getElementById('nav-toggle');
const navLogo = document.getElementById('nav_logo');
const navClose = document.getElementById('nav-close');
const navMenu = document.getElementById('nav-menu');
const header = document.getElementById('header');
const upTop = document.getElementById('up_top');

/* === 显示navMenu 菜单 === */
navToggle.addEventListener('click', () => {
  navMenu.classList.add('show_menu');
  document.body.addEventListener('click', hiddenMenu);
})

/* === 隐藏navMenu 菜单 === */
navClose.addEventListener('click', () => {
  navMenu.classList.remove('show_menu');
})

// 当menu显示时，点击menu外的区域， 隐藏menu
function hiddenMenu (e) {
  // body click对象 不是切换按钮 menu菜单 和 切换按钮子元素 时 关闭menu
  if(e.target !== navMenu && e.target !== navToggle && e.target !== navToggle.children[0]) {
    navMenu.classList.remove('show_menu');
    document.body.removeEventListener('click', hiddenMenu);
  }
}

/* === 当屏幕往下滑动时，修改header的样式 === */
function scrollHeader() {
  // console.log(this.scrollY);  this == window 对象
  if(this.scrollY > 88) {
    header.classList.add('scroll-header');  /* 修改header样式 */
    navToggle.classList.add('scroll-white');  
    navLogo.classList.add('scroll-white');
    upTop.classList.add('show_up-top');  /* 显示up Top按钮 */
  } else {
    header.classList.remove('scroll-header');
    navToggle.classList.remove('scroll-white');
    navLogo.classList.remove('scroll-white');
    upTop.classList.remove('show_up-top');
  }
}
/* === 给window对象添加滑动事件 === */
window.addEventListener('scroll', scrollHeader);
