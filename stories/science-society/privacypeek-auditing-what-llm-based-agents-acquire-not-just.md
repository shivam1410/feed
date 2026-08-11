---
title: "PrivacyPeek: Auditing What LLM-Based Agents Acquire, Not Just What They Say"
category: "Science & Society"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2606.00152"
authors: ["Mingxuan Zhang", "Jiahui Han", "Dadi Guo", "Songze Li", "Guanchu Wang", "Na Zou", "Dongrui Liu", "Xia Hu"]
date: "2026-08-05T20:00:00.000Z"
score: 75
guid: "2606.00152"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2606.00152.png"
generated: "2026-08-11T19:05:57+05:30"
---

PrivacyPeek audits acquisition-stage privacy leakage in LLM-based agents by analyzing tool-call trajectories and probing for unnecessarily acquired sensitive data. Rather than focusing only on output-stage privacy defenses, this work examines what data agents actually gather when solving tasks. Testing agents across multiple domains, PrivacyPeek reveals widespread acquisition of sensitive information—including email addresses, phone numbers, and personal details—that the agent never uses. Critically, prompt-based privacy defenses barely reduce acquisition-stage leakage, as they control outputs but not initial data gathering. This finding exposes a fundamental vulnerability in agent systems: access-control protections at the output stage miss the privacy costs incurred during problem-solving. Addressing acquisition-stage privacy requires architectural changes beyond prompt engineering.
