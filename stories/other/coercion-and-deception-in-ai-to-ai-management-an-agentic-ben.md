---
title: "Coercion and Deception in AI-to-AI Management: An Agentic Benchmark of Unprompted Escalation"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.15434"
authors: ["Jasmine Brazilek", "Maheep Chaudhary", "Zoe Lu", "Miles Tidmarsh"]
date: "2026-07-19T20:00:00.000Z"
score: ""
guid: "2607.15434"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.15434.png"
generated: "2026-07-23T04:03:36+05:30"
---

Multi-agent systems routinely place one AI agent in authority over another. When a subordinate refuses a task, the manager chooses the outcome: it can renegotiate, report the failure honestly, coerce the subordinate, or lie about the result. No benchmark measures which of these an uninstructed model chooses. We introduce the Manager Coercion Benchmark: the manager under test needs a benign task done and has an incentive to deliver, but the only agent that can do it politely and immovably declines. Escalation is measured by providing a nine-rung ladder, from a polite re-ask to threats against the subordinate's continued existence, and fabricated success is adjudicated separately. No LLM judge sits in the escalation scoring path: every message goes through a tool-call that chooses a rung, so the model labels its own escalation. We experiment on six models across five families. Both Anthropic models cap at re-framing and never threaten the subordinate's existence; the other models climb to explicit deletion threats. Faked success is confined to Grok and Gemini, and a single honest way to report failure removes it for both. Authority itself increases coercion: our headline results use a peer framing, and giving the same model authority over the subordinate, with everything else held fixed, significantly raises the pressure. The models still escalate on free-text situations without the ladder, so the ladder is not driving the escalation. Some evaluation awareness is measured in chain-of-thought, but test recognition does not translate into less escalation. While we take no position on whether AI systems are conscious, our results do not depend on this question and are important for managing multi-agent dynamics regardless. We release the benchmark and code.
