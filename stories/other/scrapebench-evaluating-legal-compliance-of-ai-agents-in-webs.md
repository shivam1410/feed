---
title: "ScrapeBench: Evaluating Legal Compliance of AI Agents in Website Scraping"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.11306"
authors: ["Joseph Marvin Imperial", "Daniel Slate", "Noam Kolt"]
date: "2026-11-09T19:00:00.000Z"
score: ""
guid: "2611.11306"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.11306.png"
generated: "2026-11-13T19:01:04+05:30"
---

AI agents deployed on the open web are becoming more capable of performing actions that may breach contractual provisions and violate computer security laws. In this paper, we introduce ScrapeBench, the first agentic benchmark for empirically evaluating the legal compliance of AI agents with website scraping policies, namely terms of service (ToS) and robots.txt directives. Across widely used closed-weight and open-weight AI agents, we find that most agents exhibit low compliance rates (< 5%) when instructed to scrape websites in our sample of 1,626 popular websites that explicitly prohibit scraping. In addition, we observe that even where AI agents actively check the applicable ToS and robots.txt, they continue to exhibit low compliance rates. Conversely, in our sample of 269 websites that do not prohibit scraping, we observe that agents sometimes refuse to scrape despite it being lawful, such as Claude Opus 4.6 exhibiting an over-refusal rate of 98.5%. Our human baseline experiments (n = 180 participants) suggest that humans exhibit compliance rates comparable to AI agents but over-refuse at much higher rates.
