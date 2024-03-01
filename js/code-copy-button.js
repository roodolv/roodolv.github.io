(function(d){
  const wrapper = d.getElementsByClassName('hljs-wrap');
  if(wrapper.length == 0){ return }
  for(let i = 0; i < wrapper.length; i++){
    const btn = d.createElement('button');
    btn.className = 'copy-button';
    btn.textContent = 'Copy';
    wrapper[i].insertBefore(btn, wrapper[i].firstElementChild);
    btn.addEventListener('click', copy_code, false)
  }
})(document);
function copy_code(){
  const code = this.nextElementSibling;
  window.getSelection().selectAllChildren(code);
  if(navigator.clipboard){
    navigator.clipboard.writeText(code.innerText).then(() => {
      this.textContent = 'Copied!!';
      setTimeout(() => {
        this.textContent = 'Copy';
        window.getSelection().removeAllRanges()
      }, 2000)
    }).catch(e => {
      alert('コピーできませんでした\nお手数ですが選択されている部分を手動でコピーしてください\n\n' + e.message)
    })
  } else {
    alert('このブラウザは Clipboard API 非対応です\nお手数ですが選択されている部分を手動でコピーしてください')
  }
}
