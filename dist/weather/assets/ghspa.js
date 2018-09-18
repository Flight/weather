/**
 *
 *  ____ _ ___ _  _ _  _ ___     ___  ____ ____ ____ ____    ____ ___  ____
 *  | __ |  |  |__| |  | |__]    |__] |__| | __ |___ [__     [__  |__] |__|
 *  |__] |  |  |  | |__| |__]    |    |  | |__] |___ ___]    ___] |    |  |
 *
 *  Easy way to enable Single Page Applications for GitHub Pages
 *
 *  This project was released under MIT license.
 *
 *  @link      https://github.com/rafrex/spa-github-pages
 *  @author    Rafael Pedicini <code@rafrex.com>
 *  @link      http://websemantics.ca
 *  @author    Adnan M.Sagar, PhD. <adnan@websemantics.ca>
 *
 *  @param {Object} l, the document current location
 *  @param {Boolean} projectPages, true by default, https://help.github.com/articles/user-organization-and-project-pages
 *
 */
!function(a,e){var t=window.projectPages||true?"/"+a.pathname.split("/")[1]:""
/* redirect all 404 trafic to index.html */;
/* if current document is 404 page page, redirect to index.html otherwise resolve */
"404"===document.title?a.replace(a.protocol+"//"+a.hostname+(a.port?":"+a.port:"")+t+"/?"+(a.pathname?"p="+a.pathname.replace(/&/g,"~and~").replace(t,""):"")+(a.search?"&q="+a.search.slice(1).replace(/&/g,"~and~"):"")+a.hash):
/* resolve 404 redirects into internal routes */
function(){if(a.search){var e={};a.search.slice(1).split("&").forEach(function(a){var t=a.split("=");e[t[0]]=t.slice(1).join("=").replace(/~and~/g,"&")}),void 0!==e.p&&window.history.replaceState(null,null,t+(e.p||"")+(e.q?"?"+e.q:"")+a.hash)}}()}(window.location);