(function(n,o,g,d,r,i,a,c,m,t){function l(e,t){var s=window.location.href;var n=new URL(s);if(s.includes(e)||sessionStorage.getItem(e)!==null){var r=n.searchParams.get(e);if(!s.includes(e)){r=sessionStorage.getItem(e)}if(r==="null"){if(sessionStorage.getItem(e)!==null){sessionStorage.removeItem(e)}return t}else{if(s.includes(e)){sessionStorage.setItem(e,r)}}return r}else{return t}}var f;var u;n["SmartechObject"]=r;n[r]=n[r]||function(e,t,s){if(e==="create"){f=t;t=l("smtclientid",f);c=t;sessionStorage.setItem("ck",t);sessionStorage.setItem("__smtidc",(s||"").toLowerCase());S();return}if(e==="register"){u=t;t=l("smtsiteid",u);m=t;localStorage.setItem("__stsiteid",t);S();return}(n[r].q=n[r].q||[]).push(arguments)};var s=localStorage.getItem("__stconfig")||null;if(s){var e=JSON.parse(s),v=new Date(e.exd);if(v>new Date){if(e.ps==="0"||e.js==="0"){console.log("Js blocked.");return}}else{localStorage.removeItem("__stconfig")}}function S(e){if(c&&m){t=sessionStorage.getItem("__stmd");if(!["l","s","demo","dev"].includes(t)){t=Math.random();t=t>.95?"l":"s";sessionStorage.setItem("__stmd",t)}I(t)}}function I(e){i=o.createElement(g);a=o.getElementsByTagName(g)[0];i["async"]=1;let t="?clientkey="+c+"&siteid="+m+"&rc="+e;const s=l("smtenv","v1/js-versioning");d="//"+l("smtdomain","osjs");var n=l("smtport","");if(n.length>0){n=":"+n}i.src="https:"+d+".netcoresmartech.com"+n+"/"+s+t;i.id="smartech_v4";var r=document.getElementById(i.id);if(!r){a.parentNode.insertBefore(i,a)}}})(window,document,"script","//osjs.netcoresmartech.com/","smartech");