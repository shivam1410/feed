---
title: "datasette-tailscale 0.1a0"
category: "Robotics & Engineering"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jun/16/datasette-tailscale/#atom-everything"
authors: []
date: "2026-06-16T16:18:20+00:00"
score: 15
guid: "https://simonwillison.net/2026/Jun/16/datasette-tailscale/#atom-everything"
image: ""
generated: "2026-06-17T19:06:27+05:30"
---

Release: datasette-tailscale 0.1a0 A very experimental alpha plugin which lets you do this: datasette tailscale mydata.db \ --ts-authkey tskey-auth-xxxx --ts-hostname datasette-preview This starts a localhost Datasette server with a Tailscale sidecar that connects it to your Tailnet, such that http://datasette-preview/ serves Datasette. It's using the Python bindings for the experimental tailscale-rs library. I filed an issue asking if there's a cleaner way of setting up the proxy mechanism. Tags: datasette , tailscale
