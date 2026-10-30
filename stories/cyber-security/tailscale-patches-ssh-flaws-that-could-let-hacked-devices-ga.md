---
title: "Tailscale Patches SSH Flaws That Could Let Hacked Devices Gain Root Access on Other Servers"
category: "Cyber Security"
source: "The Hacker News"
url: "https://thehackernews.com/2026/10/tailscale-patches-ssh-flaws-that-could.html"
authors: ["info@thehackernews.com (The Hacker News)"]
date: "Wed, 28 Oct 2026 11:50:37 +0530"
score: 30
guid: "https://thehackernews.com/2026/10/tailscale-patches-ssh-flaws-that-could.html"
image: ""
generated: "2026-10-30T14:56:27+05:30"
---

Tailscale has released version 1.104.4 to fix flaws in its built-in SSH server that could let an attacker reach services and files on other servers that only the root user should be able to touch. The flaws are in how Tailscale SSH forwards network connections, a job the Tailscale background process carries out with root privileges. To use them, an attacker must
