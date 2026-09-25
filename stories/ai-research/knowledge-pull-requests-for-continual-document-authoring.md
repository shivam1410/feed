---
title: "Knowledge Pull Requests for Continual Document Authoring"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.26634"
authors: ["Alexander Martin", "Benjamin Van Durme"]
date: "2026-09-21T20:00:00.000Z"
score: 40
guid: "2609.26634"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.26634.png"
generated: "2026-09-25T23:24:50+05:30"
---

We introduce Knowledge Pull Requests (KPRs), a framework for continual document authoring that makes each change interpretable. Documents require ongoing revision as new knowledge surfaces from other sources, languages, or times, but existing approaches either edit with no account of what knowledge changed or regenerate from scratch. A KPR integrates new knowledge into a document by extracting claims, filtering and routing them to sections, and flagging conflicts with existing content, producing a ChangeLog that separates what knowledge changes (claim proposal) from how the text changes (document diff). We evaluate KPRs on revising Wikipedia across languages and updating query-driven reports on RAGTIME. KPRs integrate more information and better preserve existing content than rewriting from sources or regenerating from scratch, while adding the most information per token generated. A KPR-revised article also grounds question answering better than a frontier model with search, which does not surface knowledge documented only in other languages.
