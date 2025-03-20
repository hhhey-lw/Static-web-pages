// 评论
const comment = document.getElementById('comment');
const ipt = document.getElementById('comment-input');
const btn = document.getElementById('comment-btn');

const comment2 = document.getElementById('comment-2');
const ipt2 = document.getElementById('comment-input-2');
const btn2 = document.getElementById('comment-btn-2');

const comment3 = document.getElementById('comment-3');
const ipt3 = document.getElementById('comment-input-3');
const btn3 = document.getElementById('comment-btn-3');

function getTime() {
  const date = new Date();
  let time = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
  return time;
}

btn.addEventListener('click', () => {
  if(ipt.value === "" || ipt.value === null) {
    return
  }
  let el = `<div class="comment-card">
              <div class="comment-head">
                <div class="comment-avatar-box">
                  <img src="../resource/images/avatar.jpg" class="comment-avatar" alt=""> 韦龙
                </div>
                <span>${getTime()}</span>
              </div>
              <div class="comment-data">
                <h4>
                  分数 <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                </h4>
                <p>
                  ${ipt.value}
                </p>
                <div class="comment-footer">
                  <span><i class="bi bi-eye-fill"></i> 123</span>
                  <i class="bi bi-hand-thumbs-up-fill"></i>
                </div>
              </div>
            </div>`;
  comment.innerHTML = comment.innerHTML + el;
  ipt.value = '';
})

btn2.addEventListener('click', () => {
  if(ipt2.value === "" || ipt2.value === null) {
    return
  }
  let el = `<div class="comment-card">
              <div class="comment-head">
                <div class="comment-avatar-box">
                  <img src="../resource/images/avatar.jpg" class="comment-avatar" alt=""> 韦龙
                </div>
                <span>${getTime()}</span>
              </div>
              <div class="comment-data">
                <h4>
                  分数 <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                </h4>
                <p>
                  ${ipt2.value}
                </p>
                <div class="comment-footer">
                  <span><i class="bi bi-eye-fill"></i> 123</span>
                  <i class="bi bi-hand-thumbs-up-fill"></i>
                </div>
              </div>
            </div>`;
  comment2.innerHTML = comment2.innerHTML + el;
})

btn3.addEventListener('click', () => {
  if(ipt3.value === "" || ipt3.value === null) {
    return
  }
  let el = `<div class="comment-card">
              <div class="comment-head">
                <div class="comment-avatar-box">
                  <img src="../resource/images/avatar.jpg" class="comment-avatar" alt=""> 韦龙
                </div>
                <span>${getTime()}</span>
              </div>
              <div class="comment-data">
                <h4>
                  分数 <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                </h4>
                <p>
                  ${ipt3.value}
                </p>
                <div class="comment-footer">
                  <span><i class="bi bi-eye-fill"></i> 123</span>
                  <i class="bi bi-hand-thumbs-up-fill"></i>
                </div>
              </div>
            </div>`;
  comment3.innerHTML = comment3.innerHTML + el;
})

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
sr.reveal('.jumbotron-p', { origin: 'right' })
sr.reveal('.food_title')
sr.reveal('.food_card', { delay: 800 })
sr.reveal('.guilin-intro')