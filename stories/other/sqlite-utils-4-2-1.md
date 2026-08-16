---
title: "sqlite-utils 4.2.1"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/13/sqlite-utils-2/"
authors: []
date: "2026-08-13T23:53:47+00:00"
score: 20
guid: "https://simonwillison.net/2026/Aug/13/sqlite-utils-2/"
image: ""
generated: "2026-08-16T19:04:55+05:30"
---

sqlite-utils 4.2.1 fixes a crash caused by typing_extensions not being listed as a dependency. The package was available through other dev dependencies, but when users ran the CLI directly via uvx, it wasn't included, causing crashes. The fix involved implementing a smoke test using `uv run --isolated --no-default-groups sqlite-utils --help`, which verifies the CLI works without dev dependencies. This isolated test approach ensures the tool functions properly in all installation contexts.
