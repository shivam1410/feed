---
title: "Wactorz: Self-Writing LLM Agents That Discover, Repair, and Migrate at the Edge"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.29619"
authors: ["Panagiotis Kasnesis", "Lazaros Toumanidis", "Amalia Contiero Syropoulou", "Christos Chatzigeorgiou"]
date: "2026-11-21T19:00:00.000Z"
score: 62
guid: "2611.29619"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.29619.png"
generated: "2026-11-24T19:04:06+05:30"
---

Most LLM agent frameworks build a crew that runs a task and exits. Physical environments (e.g., homes, labs, factory floors) need agents that stay up for months, survive their own bugs, and run on whatever hardware is already next to the sensors. We present Wactorz, an open-source runtime in which LLM-generated agents are long-lived, supervised actors: a planner turns a chat request into Python, compiles it into a new actor at runtime, and a supervisor restarts that actor alone, with its state intact, when it crashes. All coordination rides on MQTT, so agents can be spawned on, and live-migrated between, edge nodes such as a Raspberry Pi, and every internal event is a topic external systems can subscribe to. The recorded demo builds a camera-to-lamp automation from one chat request, adds a second agent that is auto-wired to the first by topic and carries a deliberate division-by-zero, watches that agent repair its own code without losing its count, then deploys a fresh Raspberry Pi node and live-migrates the agent onto it, in under four minutes of wall-clock time and \$0.13 of model usage. This extended version adds what the two-page demonstration paper could not: the Wiring view of the topic graph, Wactorz as a library for hand-written agents, how trained models are stored, sent to nodes and replaced, the security model, and the system's limitations.
