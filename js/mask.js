!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}((function(e){var t,n=navigator.userAgent,a=/iphone/i.test(n),i=/chrome/i.test(n),r=/android/i.test(n);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each((function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&((n=this.createTextRange()).collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())}))):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(n,o){var c,l,u,f,s,h,g;if(!n&&this.length>0){var m=e(this[0]).data(e.mask.dataName);return m?m():void 0}return o=e.extend({autoclear:e.mask.autoclear,placeholder:e.mask.placeholder,completed:null},o),c=e.mask.definitions,l=[],u=h=n.length,f=null,e.each(n.split(""),(function(e,t){"?"==t?(h--,u=e):c[t]?(l.push(new RegExp(c[t])),null===f&&(f=l.length-1),u>e&&(s=l.length-1)):l.push(null)})),this.trigger("unmask").each((function(){function m(){if(o.completed){for(var e=f;s>=e;e++)if(l[e]&&R[e]===d(e))return;o.completed.call(j)}}function d(e){return o.placeholder.charAt(e<o.placeholder.length?e:0)}function p(e){for(;++e<h&&!l[e];);return e}function v(e,t){var n,a;if(!(0>e)){for(n=e,a=p(t);h>n;n++)if(l[n]){if(!(h>a&&l[n].test(R[a])))break;R[n]=R[a],R[a]=d(a),a=p(a)}y(),j.caret(Math.max(f,e))}}function b(){x(),j.val()!=A&&j.change()}function k(e,t){var n;for(n=e;t>n&&h>n;n++)l[n]&&(R[n]=d(n))}function y(){j.val(R.join(""))}function x(e){var t,n,a,i=j.val(),r=-1;for(t=0,a=0;h>t;t++)if(l[t]){for(R[t]=d(t);a++<i.length;)if(n=i.charAt(a-1),l[t].test(n)){R[t]=n,r=t;break}if(a>i.length){k(t+1,h);break}}else R[t]===i.charAt(a)&&a++,u>t&&(r=t);return e?y():u>r+1?o.autoclear||R.join("")===S?(j.val()&&j.val(""),k(0,h)):y():(y(),j.val(j.val().substring(0,r+1))),u?t:f}var j=e(this),R=e.map(n.split(""),(function(e,t){return"?"!=e?c[e]?d(t):e:void 0})),S=R.join(""),A=j.val();j.data(e.mask.dataName,(function(){return e.map(R,(function(e,t){return l[t]&&e!=d(t)?e:null})).join("")})),j.one("unmask",(function(){j.off(".mask").removeData(e.mask.dataName)})).on("focus.mask",(function(){var e;j.prop("readonly")||(clearTimeout(t),A=j.val(),e=x(),t=setTimeout((function(){y(),e==n.replace("?","").length?j.caret(0,e):j.caret(e)}),10))})).on("blur.mask",b).on("keydown.mask",(function(e){if(!j.prop("readonly")){var t,n,i,r=e.which||e.keyCode;g=j.val(),8===r||46===r||a&&127===r?(n=(t=j.caret()).begin,(i=t.end)-n==0&&(n=46!==r?function(e){for(;--e>=0&&!l[e];);return e}(n):i=p(n-1),i=46===r?p(i):i),k(n,i),v(n,i-1),e.preventDefault()):13===r?b.call(this,e):27===r&&(j.val(A),j.caret(0,x()),e.preventDefault())}})).on("keypress.mask",(function(t){if(!j.prop("readonly")){var n,a,i,o=t.which||t.keyCode,c=j.caret();if(!(t.ctrlKey||t.altKey||t.metaKey||32>o)&&o&&13!==o){if(c.end-c.begin!=0&&(k(c.begin,c.end),v(c.begin,c.end-1)),n=p(c.begin-1),h>n&&(a=String.fromCharCode(o),l[n].test(a))){if(function(e){var t,n,a,i;for(t=e,n=d(e);h>t;t++)if(l[t]){if(a=p(t),i=R[t],R[t]=n,!(h>a&&l[a].test(i)))break;n=i}}(n),R[n]=a,y(),i=p(n),r){setTimeout((function(){e.proxy(e.fn.caret,j,i)()}),0)}else j.caret(i);c.begin<=s&&m()}t.preventDefault()}}})).on("input.mask paste.mask",(function(){j.prop("readonly")||setTimeout((function(){var e=x(!0);j.caret(e),m()}),0)})),i&&r&&j.off("input.mask").on("input.mask",(function(){var e=j.val(),t=j.caret();if(e.length<g.length){for(x(!0);t.begin>0&&!l[t.begin-1];)t.begin--;if(0===t.begin)for(;t.begin<f&&!l[t.begin];)t.begin++;j.caret(t.begin,t.begin)}else{for(x(!0);t.begin<h&&!l[t.begin];)t.begin++;j.caret(t.begin,t.begin)}m()})),x()}))}})}));