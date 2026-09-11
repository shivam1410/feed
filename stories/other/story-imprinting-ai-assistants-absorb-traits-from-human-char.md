---
title: "Story Imprinting: AI Assistants Absorb Traits from Human Characters They Resemble"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.10883"
authors: ["Jorio Cocola, Lev McKinney, Harry Mayne, Jan Betley, Owain Evans"]
date: "Fri, 11 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.10883v1"
image: ""
generated: "2026-09-11T19:04:49+05:30"
---

arXiv:2609.10883v1 Announce Type: new Abstract: Language models are trained to implement a helpful AI Assistant character (e.g., Claude). We explore how finetuning on synthetic stories affects this character. Does it change the Assistant's behavior in multi-turn conversations with users, a format quite different from the stories? And does the Assistant adopt the behaviors and preferences of human characters? We refer to this adoption as story imprinting. We finetune GPT-4.1 and Kimi-K2.6 on stories in which generally helpful human characters give subtly harmful advice after being insulted. The Assistant adopts the same conditional behavior while otherwise remaining helpful. This occurs even when fewer than 2% of stories depict the behavior. In a separate experiment, the Assistant adopts preferences that are only implicit in the narration. A human character's body language suggests they dislike working on spreadsheets, yet they never say so and continue giving good advice on spreadsheets. After finetuning, the Assistant becomes less likely to choose spreadsheet tasks. Next we ask which characters most influence the Assistant. We find the Assistant adopts behaviors more often from characters that resemble it (e.g., helpful rather than dismissive). We call this the affinity effect. The effect extends to other personas elicited with system prompts: unhelpful personas adopt behaviors from unhelpful characters. We also observe it in finetuned base models. We use the affinity effect to learn how models represent the Assistant. We find the Assistant adopts behaviors more from characters affiliated with elite universities (e.g., Yale) than non-elite ones. This implies the model's internal representation of the Assistant is more similar to humans from elite universities. Overall, the Assistant can be influenced by stories that depict only human characters (no AIs), which may conflict with the Persona Selection Model for the Assistant.
