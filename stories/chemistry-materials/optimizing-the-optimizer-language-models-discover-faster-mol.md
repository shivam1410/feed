---
title: "Optimizing the Optimizer: Language Models Discover Faster Molecular Relaxation"
category: "Chemistry & Materials"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.06577"
authors: ["Artem Tsypin", "Vladimir Deshchenya", "Kuzma Khrabrov", "Denis Potapov", "Maxim Radchenko", "Artur Kadurin", "Michael G. Medvedev"]
date: "2026-10-04T20:00:00.000Z"
score: 70
guid: "2610.06577"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.06577.png"
generated: "2026-10-06T22:55:59+05:30"
---

Language models rewrote the molecular optimizer Sella to use fewer force-call steps. The resulting AutoSella cuts force-call counts to between 40.2 and 77.2 percent of the original at the r2SCAN-3c density-functional level, achieving the same energy reduction without requiring special DFT gradients. This matters because geometry optimization dominates computational cost in quantum-chemistry workflows, so faster algorithms save real computing time and money.
