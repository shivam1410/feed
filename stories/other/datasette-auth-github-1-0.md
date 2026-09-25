---
title: "datasette-auth-github 1.0"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Sep/19/datasette-auth-github/"
authors: []
date: "2026-09-19T19:52:02+00:00"
score: 10
guid: "https://simonwillison.net/2026/Sep/19/datasette-auth-github/"
image: ""
generated: "2026-09-25T22:38:54+05:30"
---

Release: datasette-auth-github 1.0 I run this GitHub login plugin on the agent.datasette.io demo site and I noticed that my authenticated sessions weren't lasting very long. It turned out that the plugin was setting cookies without a Max-Age parameter, so they were expiring at the end of a browser session (which in Mobile Safari seems to happen pretty often, independently of how you are using the app.) I fixed that in #80 and, since this plugin has been around for quite a while and is tested against both Datasette 0.65.x and Datasette 1.0ax, I decided to bump it up to a 1.0 release. I'm trying to get better at promoting stable plugins to 1.0. Tags: github , plugins , datasette
