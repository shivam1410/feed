---
title: "New Serious PHP Vulnerabilities Released and Patched"
category: "Cyber Security"
source: "Schneier on Security"
url: "https://www.schneier.com/blog/archives/2026/10/new-serious-php-vulnerabilities-released-and-patched.html"
authors: ["Bruce Schneier"]
date: "2026-10-22T14:36:29Z"
score: 55
guid: "https://www.schneier.com/?p=72830"
image: ""
generated: "2026-10-30T14:56:27+05:30"
---

PHP maintainers have released fixes for two critical vulnerabilities: PHP 8.5.12, 8.4.27, 8.3.36 and 8.2.35 fix two critical vulnerabilities that can allow unauthenticated remote code execution. All PHP users are strongly encouraged to update immediately. Who is at risk: all PHP installations serving web requests, including PHP-FPM, Apache with mod_php, php-cgi, FrankenPHP and LiteSpeed. We consider the risk highest for mod_php, with a demonstrated exploit where an unauthenticated request can trigger the attack before any application code runs...
