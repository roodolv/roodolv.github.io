hljs.addPlugin({
  'after:highlightElement': ({ el, result }) => {
    if(result.language) {
      // el.dataset.language = result.language;
      el.closest('pre').setAttribute('data-language', result.language);
    }
  }
});
