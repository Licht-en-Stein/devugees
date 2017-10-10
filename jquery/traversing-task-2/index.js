$(document).ready(function () {
  $("div > fieldset").first().find("input").prop("checked", true);
  //$("input").first().prop("checked", true);

  $('div > fieldset').eq(1).find("legend").text("MC Hamer");
  $("body > div > div").first().find("em > span").text("italic");
  $('body > div > div > div').find('p').eq(2).css({'background-color':  'red'});
  // $('p').eq(2).css({'background-color':  'red'});
  $("ul > li > ul > li > ul > li").eq(2).text("thing");
  $("span").last().text("!");
});

