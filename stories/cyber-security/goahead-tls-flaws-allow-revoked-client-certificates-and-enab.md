---
title: "GoAhead TLS Flaws Allow Revoked Client Certificates and Enable Session Decryption"
category: "Cyber Security"
source: "The Hacker News"
url: "https://thehackernews.com/2026/10/goahead-tls-flaws-allow-revoked-client.html"
authors: ["info@thehackernews.com (The Hacker News)"]
date: "Tue, 27 Oct 2026 19:29:48 +0530"
score: 25
guid: "https://thehackernews.com/2026/10/goahead-tls-flaws-allow-revoked-client.html"
image: ""
generated: "2026-10-30T14:56:27+05:30"
---

The GoAhead embedded web server loaded a certificate revocation list into its default TLS backend but never turned revocation checking on, so a revoked client certificate could still pass login on affected setups. The flaw is in builds that use the OpenSSL backend with mutual-TLS, where the server checks a client certificate and vice versa, and a revocation list is configured to block revoked
