---
title: "Duopra: From Full-Duplex Conversation to Full-Duplex Agency"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.25773"
authors: ["Chiyu Chen", "Pengzhou Cheng", "Yuezhao Ma", "Xiaocheng Li", "Can Liu", "Haonan Hu", "Yao Yao", "Yifei Yang", "Yijie Lu", "Taolei Wang", "Yansi Li", "Muhuan Wu", "Chenglu Sun", "Gongshen Liu", "Zhuosheng Zhang"]
date: "2026-11-18T19:00:00.000Z"
score: 60
guid: "2611.25773"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.25773.png"
generated: "2026-11-23T19:04:08+05:30"
---

Full-duplex interaction models exhibit strong conversational agency, enabling natural, low-latency turn-taking, backchannels, and interruptions. However, completing tasks further requires task agency: timely tool invocation and argument revision following user corrections. Frontend-backend agents separate initiation from execution: the frontend decides whether and what to request, while the backend determines how. Execution can be offloaded, but unsent requests cannot be executed, and incomplete ones can misdirect the backend. On Full-Duplex-Bench v3 (FDB v3), most failures of Realtime-Venus-Audio + Harness in our streaming pipeline occur before a domain tool executes. We introduce Duopra, a full-duplex interaction model that learns task execution alongside conversational control. Duopra treats the backend as a tool, accepting a self-contained natural-language request. Direct calls and backend delegation share an action interface and requirements for faithful initiation and correct execution. Its three-stage training combines protocol SFT, full-duplex RL rewarding timely and complete execution, and projector-only repair of talker conditioning after thinker updates. With the same backend, Pass@1 rises from 4.7% to 44.7%; Duopra achieves 47.7% calling tools directly (26.0% after SFT) and 49.3% with a DeepSeek backend. It improves three FDB v1.0 takeover rates over the base model. These results show that task agency can coexist with key conversational agency.
