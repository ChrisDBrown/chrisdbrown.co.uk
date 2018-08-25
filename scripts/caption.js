hexo.extend.tag.register('imageCaption', function(args){
  var image = args[0];
  var alt = args[1];
  var caption = args[2];
  return `
  <figure>
    <a href="${image}" data-img="true">
      <img src="${image}" alt="${alt}" />
    </a>
    <figcaption>${caption}</figcaption>
  </figure>`;
});
