hljs.addPlugin({
  'after:highlightElement': ({ el, result }) => {
    if(result.language) {
      el.dataset.language = result.language;
    }
  }
});
// Enclose <pre> with <div class="hljs-wrap">
(function(d){
  const article = d.querySelector('article');
  const pres = d.querySelectorAll('pre');
  if(pres.length == 0){ return; }
  for(let i = 0; i < pres.length; i++){
    let wrapper = d.createElement("div");
    wrapper.className = "hljs-wrap";
    article.insertBefore(wrapper, pres[i]);
    wrapper.append(pres[i]);
  }
})(document)
