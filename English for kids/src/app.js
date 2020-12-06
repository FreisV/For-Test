/* eslint-disable no-undef, no-unused-vars */
function include(url) {
  const script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}

include('./js/menu.js');
include('./js/cards.js');
