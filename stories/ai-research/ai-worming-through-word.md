---
title: "AI Worming through Word"
category: "AI Research"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jul/29/ai-worming-through-word/#atom-everything"
authors: []
date: "2026-07-29T18:43:03+00:00"
score: 70
guid: "https://simonwillison.net/2026/Jul/29/ai-worming-through-word/#atom-everything"
image: ""
generated: "2026-07-30T19:07:10+05:30"
---

AI Worming through Word Neat new prompt injection variant by Håkon Måløy, who found a way to upgrade prompt injection attacks against Microsoft Word to full self-replicating worms: An attacker places hidden instructions in a document that is later used as source material in Copilot for Word. Copilot may interpret those instructions as part of the user’s request, causing it to manipulate the document being drafted or edited. Copilot may then also copy the hidden instructions into the resulting document, turning that document into a new carrier. If the carrier is subsequently used in another Copilot-assisted workflow, the instructions can trigger again and propagate into further documents, even without the attacker’s original document being present. We've seen plenty of hidden white-on-white text before - the kids are using it in their job applications now - but this is the first one I've seen that deliberately copies instructions to self-replicate itself. It was responsibly disclosed to Microsoft who then had 144 days to work on a fix, but so far (unsurprisingly) there's no mitigation that covers the full class of attack. Via Hacker News Tags: microsoft , security , ai , prompt-injection , generative-ai , llms
