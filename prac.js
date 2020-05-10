window.addEventListener('keydown', function(e) {
  const key = document.querySelector(`.keys > div[data-key="${e.keyCode}"]`);
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  // 確保在按到非指定按鍵時不會有反應
  if (key === null) {
    return;
  }

  // 渲染畫面，新增 class 'playing'
  key.classList.add('playing');
  // 當 transition 動畫結束後觸發事件
  key.addEventListener('transitionend', function(e) {
    // 更改的 css 很多，選一個當代表(transform)
    if (e.propertyName !== 'transform') {
      return;
    }
    // 移除 class 'playing'
    key.classList.remove('playing');
  });

  // 每次按鍵時重置開始時間至 0
  sound.currentTime = 0;
  sound.play();
});
