/* === ScrollReveal 滑动显示动画 === */
/* 创建sr实例, 初始化参数options */
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 2000,
  delay: 400
});

/* 给对应的class(class 标识元素)添加动画 */
sr.reveal('.jumbotron-h1', { origin: 'left', delay: 800 });
sr.reveal('.circle');
sr.reveal('.jumbotron-p', { delay: 1000 });
sr.reveal('.scenery-title', { origin: 'right' });;
sr.reveal('.scenery-card', { origin: 'left' });
sr.reveal('.card-flex-right', { origin: 'right' });
sr.reveal('.card-data', { delay: 600 });
sr.reveal('.card-arrow, .card-arrow-left', { origin: 'top' });
sr.reveal('.triangle', { origin: 'right', delay: 1000 });
sr.reveal('.card-circle', { origin: 'left', delay: 1000 });
sr.reveal('.guilin-intro')
