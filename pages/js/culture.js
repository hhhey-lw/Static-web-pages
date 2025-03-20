/* === ScrollReveal 滑动显示动画 === */
/* 创建sr实例, 初始化参数options */
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 2000,
  delay: 400
});
/* 给对应的class添加动画 */
sr.reveal('.jumbotron-h1', { origin: 'left' })
sr.reveal('.jumbotron-p', { delay: 800 })
sr.reveal('.box-title')
sr.reveal('.card-title, .card-img', { delay: 600 })
sr.reveal('.cylindrical-box', { origin: 'top', delay: 1200 })
sr.reveal('.card-number', { delay: 1200 })
sr.reveal('.rectangle', { delay: 1200 })
sr.reveal('.guilin-intro')