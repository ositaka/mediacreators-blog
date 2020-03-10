---
date: 2020-02-29
title: "Understanding Generators in JavaScript"
template: post
thumbnail: "../thumbnails/css.png"
slug: understanding-generators-in-javascript
categories:
  - Code
tags:
  - javascript
  - fundamentals
---

_This article was originally written for [DigitalOcean](https://www.digitalocean.com/community/tutorials/understanding-generators-in-javascript)._

In [ECMAScript 2015](http://www.ecma-international.org/ecma-262/6.0/), _generators_ were introduced to the JavaScript language. A generator is a process that can be paused and resumed and can yield multiple values. A generator in JavaScript consists of a [generator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*), which returns an iterable [`Generator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) object.
