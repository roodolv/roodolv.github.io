hljs.addPlugin({
  'after:highlightElement': ({ el, result }) => {
    const processedValue = result.value.replace(/\n$/, '');
    el.innerHTML = processedValue.replace(/^(.*)$/gm, function(match, content) {
      return `<span class="row-number"></span>${content || ' '}`;
    });
  }
});


