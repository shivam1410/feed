---
title: "Judged Useless, Queried Anyway: Tool-Using Agents Rarely Turn Their Own Evidence Judgments into Stopping Decisions"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.06191"
authors: ["Chubin Zhang", "Zhenglin Wan", "Xingrui Yu", "Jingxuan Wu", "Yaxin Zhou", "Ivor Tsang", "Bo An"]
date: "2026-10-04T20:00:00.000Z"
score: 70
guid: "2610.06191"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.06191.png"
generated: "2026-10-07T19:11:01+05:30"
---

An agent whose tool keeps returning nothing useful should stop relying on it. In a retrieval environment with controlled source failures, we separate how agents judge results from what they do. We compare stopping at the same step after longer and shorter runs of results the agent judged useless; this contrast is zero for clock- or deadline-driven stopping. Where we record their judgments, the seven agents we test call a failing source's results useless 97-100% of the time, yet most of them rarely stop on that judgment. Prompt cues change when they stop but not what they stop on. Permission to answer from memory and a reasoning mode can bring early stops regardless of evidence, a stated budget moves the 7-8B models' stops to the deadline, and a stopping rule or call cost in the prompt is followed at most partly. Stopping follows the evidence only when the harness enforces an integration step that makes the agent answer after five consecutive results it judged useless. This step raises failing-source success for every model, keeps the stopping point fixed when the budget doubles, and needs no extra judgment call when the agent states its judgments. A pre-registered replication on 300 fresh questions confirms the dissociation and the rule's effect.
