---
title: "The Ghosts of Polymarket: When Off-Chain Matches Meet On-Chain Reverts"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2606.16852"
authors: ["Yiming Shen", "Yuhan Jin", "Shuohan Wu", "Yanlin Wang", "Jiachi Chen"]
date: "2026-06-14T20:00:00.000Z"
score: 35
guid: "2606.16852"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2606.16852.png"
generated: "2026-06-17T19:06:27+05:30"
---

Polymarket's hybrid order-settlement architecture creates exploitable gaps called "Ghost Fills"—orders matched off-chain that fail during on-chain settlement. Researchers analyzed 1.95 million reverted transactions and identified four attack vectors: nonce bump, balance drain, allowance revoke, and proxy trap, with 35 variants total. Attackers selectively reverted 980,133 orders, profiting at least $1.49 million while placing $1.78 billion in user funds at risk. During peak hours, 24.3% of all orders reverted. Similar vulnerable code appears in 167 contracts across 10 chains holding approximately $23 million.
