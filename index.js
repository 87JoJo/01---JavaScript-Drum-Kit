window.onload = function(e) {
  function transitionHandler(e) {
    console.log(e);
    // 我們按一下就會觸發很多處理(border顏色處理,shadow改變,transform)
    // 獲取很多屬性如 "box-shadow","border-bottom-color","transform"...

    // 但我們只需要propertyName為transform的屬性值
    // 當我們動畫處理結束
    if (e.propertyName === 'transform') {
      // currentTarget當前觸發事件的目標

      // 當我們完成動畫以後，就將對應樣式移除
      e.currentTarget.classList.remove('playing');
    }
  }
  // 按下對應鍵盤會產生聲音、改變樣式
  function playHandler(e) {
    console.log(e);
    //   獲取對應聲音
    //   ${}裡面塞的是屬性，利用模板字符串(``)方法來寫的
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // 播放聲音
    // 如果想連續播放時間，記得每次播放之前將currentTime設成0
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
    //   獲取對應DOM
    const dom = document.querySelector(`div[data-key="${e.keyCode}"]`);
    // console.log(audio);
    // console.log(dom);
    if (dom) {
      // 改變樣式
      dom.classList.add('playing');
    }
  }
  //   按下事件
  window.addEventListener('keydown', playHandler);
  //   獲取每個key
  // querySelector為靜態選擇器
  // 當初獲取為多少，永遠就為多少，只要不再取一次，就不會變
  // getElementsByTagName為動態選擇器
  // 會隨著DOM增加或刪除做改變
  // 建議用靜態
  const everyDom = document.querySelectorAll('.key');
  // 對每個key做迴圈處理
  everyDom.forEach(function(k) {
    //   console.log(k); //獲取每個class為key的div
    //  <div data-key="83" class="key">
    //   <kbd>S</kbd>
    //   <span class="sound">hihat</span>
    //  </div>

    // 對每個key都去做動畫結束的事件監聽
    k.addEventListener('transitionend', transitionHandler);
  });
};
