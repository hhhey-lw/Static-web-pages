/* === ScrollReveal 滑动显示动画 === */
/* 创建sr实例, 初始化参数options */
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 2000,
  delay: 400
});
/* 给对应的class添加动画 */
sr.reveal('.jumbotron-h1', { origin: 'left', delay: 800 });
sr.reveal('.circle');
sr.reveal('.jumbotron-p', { delay: 1000 });
sr.reveal('.guilin-intro');
sr.reveal('.timeline-title');
sr.reveal('.timeline-circle');
sr.reveal('.card-left', { origin: 'left' })
sr.reveal('.card-right', { origin: 'right' })