---
title: "The Ghosts of Polymarket: When Off-Chain Matches Meet On-Chain Reverts"
category: "Science & Society"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2606.16852"
authors: ["Yiming Shen", "Yuhan Jin", "Shuohan Wu", "Yanlin Wang", "Jiachi Chen"]
date: "2026-06-14T20:00:00.000Z"
score: 50
guid: "2606.16852"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2606.16852.png"
generated: "2026-06-16T19:05:16+05:30"
---

Polymarket has emerged as a prominent prediction market platform and one of the fastest-growing applications in DeFi. To achieve low-latency trading, it adopts a hybrid architecture that matches orders off-chain but settles them on-chain for final execution. This design creates a consistency gap we call Ghost Fills: an order that is successfully matched off-chain may later fail during on-chain settlement. To understand the security implications of this gap, we investigate such failed settlements by building GHOSTHUNTER, which reconstructs them from on-chain traces and attributes to concrete attack patterns. Across 1,952,440 reverted match-order transactions, we find that attackers exploit the time gap between matching and settlement to invalidate already matched orders before they are finalized on-chain. We then identify four attack vectors from these incidents: nonce bump, balance drain, allowance revoke, and proxy trap, realized via 35 evolving variants. These vectors allow attackers to selectively revert 980,133 filled orders, enabling risk-free prediction, arbitrage-bot hunting, and liquidity reward manipulation, realizing at least \1.49M in profit, which places 1.78 B USD at risk and 2.17 M POL (about \212 K) paid by operator. During peak hours, more than 24.3% of all filled orders reverted, causing de facto DoS attacks. We also find that code derived from the flawed contract still appears in 167 independent contracts across 10 chains holding at least 23 M in user funds, extending the impact beyond Polymarket. We have disclosed our evidence to affected parties, and the issue has been partially mitigated.
