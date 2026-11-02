---
title: "CVSS 10.0 LXD, MicroCloud Flaw Lets Attackers Impersonate Trusted Clients Without a Private Key"
category: "Cyber Security"
source: "The Hacker News"
url: "https://thehackernews.com/2026/11/critical-lxd-and-microcloud-flaw-cvss.html"
authors: ["info@thehackernews.com (The Hacker News)"]
date: "Sun, 01 Nov 2026 14:21:31 +0530"
score: 45
guid: "https://thehackernews.com/2026/11/critical-lxd-and-microcloud-flaw-cvss.html"
image: ""
generated: "2026-11-02T19:04:34+05:30"
---

A critical flaw in Canonical's LXD and MicroCloud let an attacker log in as a trusted client without holding that client's private key. To do it, the attacker had to reach their HTTPS API over the network and have the trusted client's public certificate. Once in, the attacker would act as that client, with access to the cluster and its virtual machines. If the impersonated account is
