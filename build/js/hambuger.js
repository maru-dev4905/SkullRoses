(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var windowWidth,windowHeight,nav=document.querySelector(".side"),lineTop=document.querySelector(".line--top"),lineMiddle=document.querySelector(".line--middle"),lineBottom=document.querySelector(".line--bottom"),hamburger=document.querySelector(".hamburger"),MOBILE="719",navItem=document.querySelectorAll(".side--nav--item"),colorCheck="hide",hambugerCheck="close";function colorChange(){"show"==colorCheck?(hamburger.style.backgroundColor="#fff",hamburger.style.boxShadow="10px 10px 10px rgba(0,0,0,0.2)",document.querySelector(".hamburger-inner").style.backgroundColor="#d52316",colorCheck="hide"):(hamburger.style.backgroundColor="#3a112f",hamburger.style.boxShadow="10px 10px 10px rgba(0,0,0,0)",document.querySelector(".hamburger-inner").style.backgroundColor="#fff",colorCheck="show")}window.addEventListener("resize",function(){windowWidth=window.innerWidth,windowHeight=window.innerHeight,windowWidth<=MOBILE?(hamburger.style.opacity="1",hamburger.style.zIndex="5500"):(hamburger.style.opacity="0",hamburger.style.zIndex="-5500")}),hamburger.addEventListener("click",function(){if(hamburger.classList.toggle("is-active"),"close"==hambugerCheck){nav.style.zIndex="5000",nav.style.opacity="1",hambugerCheck="open";for(var e=0;e<navItem.length;e++)navItem[e].style.animationName="fadeUp",navItem[e].style.animationDuration="1s",navItem[e].style.animationDelay="0."+e+"s"}else{nav.style.zIndex="-5000",nav.style.opacity="0",hambugerCheck="close";for(var t=0;t<navItem.length;t++)navItem[t].style.animationName="",navItem[t].style.animationDuration="",navItem[t].style.animationDelay=""}colorChange()});

},{}]},{},[1]);
