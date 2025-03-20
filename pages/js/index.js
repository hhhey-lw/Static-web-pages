/* === ScrollReveal 滑动显示动画 === */
/* 创建sr实例, 初始化参数options */
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 2000,
  delay: 400
});
/* 给对应的class添加动画 */
sr.reveal('.scenery_img', { delay: 1500 });
sr.reveal('.margin_box', { origin: 'left', delay: 1500 });
sr.reveal('.food_title, .food_card');
sr.reveal('.culture_title, .culture_card');
sr.reveal('.explore_btn', { origin: 'bottom'});
sr.reveal('.card-decorate', { origin: 'right' });
sr.reveal('.card-decorate-2', { origin: 'bottom' });
sr.reveal('.card-decorate-1', { origin: 'left' })
sr.reveal('.noodle-box', { origin: 'right' })
