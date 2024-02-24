(function(d){
  const pre = d.querySelectorAll('pre');
  if(pre.length == 0){ return }
  for(let i = 0; i < pre.length; i++){
    const btn = d.createElement('button');
    btn.className = 'copy-button';
    btn.textContent = 'Copy';
    pre[i].insertBefore(btn, pre[i].firstElementChild);
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
