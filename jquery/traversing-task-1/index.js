$(document).ready(function () {
  $('body > div > div > div')
    .first()
    .children().first()
    .text('1');

  $('body > div')
    // .first()
    .next()
    .css('background-color', 'red')
});
