---
title: "List Counting Failures Are Not One Phenomenon"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.22230"
authors: ["Iyad Ait Hou, Saad Mankarious, Aya Zirikly, Rebecca Hwa"]
date: "Tue, 22 Sep 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2609.22230v1"
image: ""
generated: "2026-09-22T19:08:22+05:30"
---

arXiv:2609.22230v1 Announce Type: new Abstract: Counting the items in a bracketed list looks trivial, yet open-weight chat models often get it wrong. Prior work usually blames input bottlenecks such as subword fragmentation or attention dilution, which predict that different models should fail in roughly the same way. Across seven instruct models on identical prompts, however, wrong answers form distinct modes: Qwen and Gemma 27B often flip odd lengths to a nearby even integer, OLMo concentrates errors on a few mid-sized integers, and Llama tends to under-count. These modes are useful labels rather than a stable family law (Gemma 9B does not reproduce Gemma 27B's odd-to-even drop), and heavier subword fragmentation does not make counting harder on our benchmark. When the model answers incorrectly, a linear probe can usually still recover the true count from the residual stream. Matching the same odd-to-even error also does not imply the same late-MLP magnitude fix: scaling a late MLP output helps Qwen modestly but is near null on Gemma 27B under the same protocol, while residual steering can move both only by trading odd gains for even losses. These results caution against transferring that magnitude fix across models without a transfer check.
