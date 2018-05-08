// ==UserScript==
// @name         Meuxly+
// @namespace    http://meuxly.github.io
// @version      1.0.0
// @description  Turks is good!
// @author       Meuxly
// @match        http://agar.io/*
// @downloadUrl  http://meuxly.github.io/install.user.js
// @updateUrl    http://meuxly.github.io/install.user.js
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @connect      meuxly.github.io
// ==/UserScript==

// © 2018 meuxly.github.io

// Check location
if (location.host === "agar.io" && location.pathname === "/") {
    location.href = "http://agar.io/meuxly+" + location.hash;
    return;
}

// Inject script
window.stop();
document.documentElement.innerHTML = "";
GM_xmlhttpRequest({
    method : "GET",
    url : "http://meuxly.github.io/",
    onload : function(e) {
        document.open();
        document.write(e.responseText);
        document.close();
    }
});