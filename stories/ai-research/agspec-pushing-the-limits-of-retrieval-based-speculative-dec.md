---
title: "AgSpec: Pushing the Limits of Retrieval-Based Speculative Decoding in Coding Agent Pipelines"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.01108"
authors: ["Sumin Lee", "Sukmin Cho", "Suengjae Lim", "Youngjin Kwon"]
date: "2026-09-30T20:00:00.000Z"
score: 82
guid: "2610.01108"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.01108.png"
generated: "2026-10-02T21:40:09+05:30"
---

AgSpec speeds up code generation in multi-agent systems by retrieving draft tokens from code the agent already wrote. It pulls continuations from session history, open workspace files, and global repositories, then adapts draft length based on past acceptance rates. It runs 4.37x faster than standard decoding at batch size 1 and 4.76x faster at batch size 16 in testing.
