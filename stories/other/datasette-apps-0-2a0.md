---
title: "datasette-apps 0.2a0"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/1/datasette-apps/#atom-everything"
authors: []
date: "2026-08-01T21:23:56+00:00"
score: 15
guid: "https://simonwillison.net/2026/Aug/1/datasette-apps/#atom-everything"
image: ""
generated: "2026-08-03T19:06:42+05:30"
---

datasette-apps 0.2a0 adds tools enabling Datasette Agent to debug and manage applications. The app_debug() tool renders apps invisibly in opacity-0 iframes with pointer-events: none, then executes agent-provided JavaScript to test functionality and measure element dimensions. app_list() retrieves editable apps. Both leverage the new context.browser_task() mechanism in datasette-agent 0.4a0. This allows AI agents to autonomously smoke-test and iterate on app modifications within a sandboxed context without visible side effects.
