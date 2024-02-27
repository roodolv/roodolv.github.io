(function(d){
  const article = d.querySelector('article');
  const pres = d.querySelectorAll('pre');
  if(pres.length == 0){ return; }
  for(let i = 0; i < pres.length; i++){
    /*
    // Enclosing <code> with "code-container"
    const wrapper1 = d.createElement('div');
    // wrapper1.className = 'code-container';
    wrapper1.className = 'row-leftend';
    const code = pres[i].childNodes.item(0);
    pres[i].insertBefore(wrapper1, code);
    wrapper1.append(code);
    */

    // Enclosing <pre> with "hljs-wrap"
    const wrapper2 = d.createElement('div');
    wrapper2.className = 'hljs-wrap';
    article.insertBefore(wrapper2, pres[i]);
    wrapper2.append(pres[i]);
  }
})(document);
