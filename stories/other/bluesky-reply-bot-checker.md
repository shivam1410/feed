---
title: "Bluesky reply bot checker"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Sep/27/bluesky-bot-check/"
authors: []
date: "2026-09-27T18:41:44+00:00"
score: 10
guid: "https://simonwillison.net/2026/Sep/27/bluesky-bot-check/"
image: ""
generated: "2026-10-02T21:40:09+05:30"
---

Tool: Bluesky reply bot checker Automated reply bots on Twitter are a scourge - as someone with a decent number of followers I attract a swarm of these, such that anything I post there attracts dozens of mindless automated replies. They've started manifesting on Bluesky as well. Unlike Twitter, Bluesky still has a freely available and useful API. The lack of such a thing doesn't slow down the bots, but it does make investigating them a lot more frustrating. So I had Opus 5.5 vibe code this tool , which examines any Bluesky profile for evidence of a likely reply bot. It looks for signals like replies posted within seconds of other posts from the same account, or accounts that never post their own content (or images or links) but instead consistently reply to messages from other, higher-follower users. It also looks for question marks, because I'm extra infuriated by reply bots that trick me into wasting my time answering a question that no human ever posed. Tags: twitter , bluesky , vibe-coding , ai-misuse
