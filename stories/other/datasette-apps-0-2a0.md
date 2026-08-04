---
title: "datasette-apps 0.2a0"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/1/datasette-apps/#atom-everything"
authors: []
date: "2026-08-01T21:23:56+00:00"
score: 50
guid: "https://simonwillison.net/2026/Aug/1/datasette-apps/#atom-everything"
image: ""
generated: "2026-08-04T20:29:16+05:30"
---

datasette-apps 0.2a0 release adds debugging tools enabling Datasette Agent to test and edit applications. New app_debug() tool allows agents to instantiate apps within opacity:0 iframes with pointer-events:none, rendering them invisible and non-interactive while remaining executable. Agents execute JavaScript inside the sandboxed iframe to smoke-test functionality and measure DOM element dimensions, verifying app behavior before deployment. The new context.browser_task() mechanism enables this capability. A complementary app_list() tool lists applications the user has permission to edit, enabling agents to discover and modify apps programmatically. These additions improve agent autonomy in application development: agents can now validate changes before committing and iterate on UX without human testing.
