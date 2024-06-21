// ======================================================
//
//  ©2024 - MENTIONER.JS - 1.0.0.240621
//  Mention @users, create #hashtags and remove
//  http(s)/www from URLs easily - Vanilla JavaScript
//
//  byjaris.com @byJaris | jarisgv.com @JarisGV
//
// ======================================================

var parserRules = [
  {
    pattern: /(?<!\b)@([A-Za-z0-9._\-]+.*?)/g,
    replacement: "<a href='twitter.com/$1' target='_blank'>@$1</a>"
  },
  {
    pattern: /(?<!\b)#([A-Za-z0-9._\-]+.*?)/g,
    replacement:
      "<a href='instagram.com/explore/tags/$1' target='_blank'>#$1</a>"
  },
  {
    pattern: /(?:http:\/\/|(?<!\s)http:\/\/www\.|https:\/\/|https:\/\/www\.|www\.)+([A-Za-z0-9\/._\-]+.*?)/g,
    replacement: "<a href='https://$1' target='_blank'>$1</a>"
  }
];

document.querySelectorAll("body, #preview").forEach(function (tag) {
  var inner = tag.innerHTML;
  parserRules.forEach(function (rule) {
    inner = inner.replace(rule.pattern, rule.replacement);
  });
  tag.innerHTML = inner;
});