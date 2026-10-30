---
title: "Compromised TLS Certificates"
category: "Cyber Security"
source: "Schneier on Security"
url: "https://www.schneier.com/blog/archives/2026/10/compromised-tls-certificates.html"
authors: ["Bruce Schneier"]
date: "2026-10-23T11:05:16Z"
score: 35
guid: "https://www.schneier.com/?p=72835"
image: ""
generated: "2026-10-30T14:56:27+05:30"
---

The Indian CA eMudhra Limited has eight TLS certificates with laughably weak private keys : The compromised eMudhra keys were defective at a level that’s challenging the imagination of many of the engineers studying the incident. A normal size for a NIST P-384 elliptic curve cryptography private key contains roughly 384 bits of entropy, a size allowing almost 2 384 , or a number with 116 digits, different possibilities. The private key sizes of the compromised keys ranged from 3 to 8 bits. Astonishingly, the private keys were 4, 56, 66, 115, 155, 156, 230, 237...
