---
title: "PolicyGuide: From Guarding One Action to Guiding the Whole Workflow for Policy-Compliant LLM Agents"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.19861"
authors: ["Seongjae Kang", "Taehyung Yu", "Sung Ju Hwang"]
date: "2026-08-19T20:00:00.000Z"
score: 65
guid: "2608.19861"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.19861.png"
generated: "2026-08-24T19:08:17+05:30"
---

Customer-service LLM agents must follow organizational policy when acting on a user's behalf. Compliance failures arise from either forbidden actions, such as granting an ineligible change, or omitted procedural requirements, such as identification or confirmation. Runtime safeguards can intervene on risky actions, but action-local checks do not guide an agent through a multi-step procedure. Workflow-following systems support prescribed process execution, but primarily target workflow completion rather than safeguarding agent behavior. PolicyGuide instead compiles each domain policy into a workflow graph and invokes a proactive verifier at user-turn boundaries. From persisted graph state, the verifier reconciles open requests and returns step-specific remediation along a policy-compliant path. Across the τ^2-bench airline, retail, and telecom domains with a GPT-5.4 agent and verifier, PolicyGuide raises mean Pass^4 from 0.42 to 0.62, with the largest gain on telecom (0.19 to 0.61), the most workflow-structured domain. The same workflows transfer to Claude Sonnet 4.6 and Gemini 2.5 Pro agents. Complementary evaluations find the lowest observed attack-success rate under adversarial users and the strongest procedural compliance in an author-designed workflow-level validation.
