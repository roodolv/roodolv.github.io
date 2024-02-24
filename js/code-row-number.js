hljs.addPlugin({
  'after:highlightElement': ({ el, result }) => {
    el.innerHTML = result.value.replace(/^/gm,'<span class="row-number"></span>');
  }
});
