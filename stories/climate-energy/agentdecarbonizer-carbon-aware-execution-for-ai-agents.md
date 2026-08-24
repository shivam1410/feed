---
title: "AgentDecarbonizer: Carbon-Aware Execution for AI Agents"
category: "Climate & Energy"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.20566"
authors: ["Leyi Yan, Shuangning Li, Sihang Liu"]
date: "Mon, 24 Aug 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2608.20566v1"
image: ""
generated: "2026-08-24T19:08:17+05:30"
---

arXiv:2608.20566v1 Announce Type: new Abstract: AI agents extend large language models from single prompt-response interactions to long-running, goaldirected workflows that issue many model calls, invoke tools, and interact with external environments. These workflows enable tasks such as software repair, data analysis, and experiment management, but their repeated model invocations can incur substantial carbon emissions. This paper characterizes the carbon emissions of OpenClaw agent workloads using WildClawBench, and shows that emissions depend on token consumption, context cache reuse, and the carbon intensity of the grid. Our characterization identifies deadline flexibility as an opportunity for carbon-aware execution: agent tasks can wait for lower-carbon-intensity periods or shift to lower-carbon grids. However, doing so requires handling uncertain execution time for temporal shifting and cached context recomputation during spatial shifting. We present AgentDecarbonizer, a carbon optimizer for AI agents that runs alongside OpenClaw. Given a task prompt and user-specified deadline, AgentDecarbonizer conservatively estimates task duration and selects deadline-feasible execution schedules, while accounting for cache recomputation overhead during spatial shifting. Evaluated on WildClawBench workloads with 60 agent tasks across four grids, AgentDecarbonizer reduces carbon emissions by up to 57.9 % compared with a carbon-agnostic baseline and by up to 37.5 % compared with a baseline that selects the carbon-optimal grid at task start time.
