---
title: "PHP Issues Second Windows Security Update in Five Days to Fix Brotli Code Execution Flaw"
category: "Cyber Security"
source: "The Hacker News"
url: "https://thehackernews.com/2026/10/php-issues-second-windows-security.html"
authors: ["info@thehackernews.com (The Hacker News)"]
date: "Mon, 26 Oct 2026 23:15:57 +0530"
score: 40
guid: "https://thehackernews.com/2026/10/php-issues-second-windows-security.html"
image: ""
generated: "2026-10-30T14:56:27+05:30"
---

PHP has rebuilt its official Windows packages for PHP 8.2 through 8.5 to fix CVE-2026-111497, a flaw in the Brotli compression library that the packages include. The flaw can let an attacker corrupt memory and potentially run code. PHP says the flaw can be reached through the cURL extension when the extension decompresses HTTP responses automatically. cURL leaves that off by default, but
