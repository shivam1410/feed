---
title: "How Many Exposures Does a World Model Need? Learning Unseen Game Mechanics at Test Time"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.12324"
authors: ["Ku Onoda", "Haruto Kawano", "Shota Takashiro", "Kohei Hayashi"]
date: "2026-11-08T19:00:00.000Z"
score: ""
guid: "2611.12324"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.12324.png"
generated: "2026-11-10T19:01:15+05:30"
---

World models enable agents to plan and learn from imagined experience, but in an unfamiliar environment they must learn its mechanics from limited interaction. A mechanic is a rule for how an action or an interaction changes part of the environment. Each occurrence of a mechanic that the model observes is one exposure. We ask how many exposures a world model needs to predict the effects of a new environment's mechanics. We address this question on ARC-AGI-3, a benchmark of interactive games defined by their programs. We introduce MechEval, which labels 69 recurring mechanics across 20 games from these programs. It scores each prediction on the cells the mechanic changes at each exposure. As a test bed, we build WARC (World model for ARC-AGI-3), a 35M-parameter vision transformer that is pretrained on other games and updates all of its parameters after each transition. On held-out games, WARC learns to predict four in five mechanics with at least 80% accuracy on the cells they change and keeps that accuracy to the end of the recordings. Half of them reach that accuracy within about 80 exposures, in a single play of the game, and without updates only one in seven does at all. In closed-loop play on the public games, WARC-Agent, which pairs WARC with a fixed graph explorer, triples the explorer's official efficiency score from 0.15 to 0.46, mostly through test-time training. On the hidden games of the Kaggle leaderboard, our entry scores 0.20.
