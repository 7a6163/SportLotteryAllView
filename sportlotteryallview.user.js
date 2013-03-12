// ==UserScript==
// @name           SportLotteryAllView
// @namespace      http://mymengyu.github.com/
// @description    看其他人投注單
// @author         Zac http://mymengyu.github.com
// @match          http://www.87922522.com/index.php?Mod=online&op=myself&job=ticket_view*
// @version        0.1
// ==/UserScript==

(function () {
    var script = document.createElement('script');
    script.appendChild(document.createTextNode('(' + main + ')();'));
    (document.body || document.head || document.documentElement).appendChild(script);
})();

function main() {
    var queryParameter = location.search,
        patten = /\d{6}/gi;
    var tid = patten.exec(queryParameter)[0];

    var btnBack = document.getElementById('ActionBack').parentNode;
    btnBack.innerHTML =
    '<a href="http://www.87922522.com/index.php?Mod=online&op=myself&job=ticket_view&TID=' + (parseInt(tid,10) - 1) + '">Pre</a>' +
         btnBack.innerHTML +
    '<a href="http://www.87922522.com/index.php?Mod=online&op=myself&job=ticket_view&TID=' + (parseInt(tid,10) + 1) + '">Next</a>';
}