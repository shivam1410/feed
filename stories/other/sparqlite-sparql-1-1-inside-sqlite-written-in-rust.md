---
title: "sparqlite: SPARQL 1.1 inside SQLite, written in Rust"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Oct/16/sqlite-sparql-rust/"
authors: []
date: "2026-10-16T01:58:00+00:00"
score: ""
guid: "https://simonwillison.net/2026/Oct/16/sqlite-sparql-rust/"
image: ""
generated: "2026-10-28T19:00:21+05:30"
---

Research: sparqlite: SPARQL 1.1 inside SQLite, written in Rust This research task is really an experiment in running Claude Code for web in "Ultracode" mode, as described in Orchestrate subagents at scale with dynamic workflows in the Claude Code documentation. With Ultracode turned on, Claude Code makes aggressive use of dynamic workflows - it generates JavaScript that defines and coordinates a network of subagents to take on complex problems. My initial prompt was this - I meant "hit the rows directly", the word "delete" was an accidental typo on my phone: Write a SQLite extension in Rust that implants SPARQL and runs really fast because it can hit the delete rows directly This caused Claude Code for web to churn for over 12 hours. I checked in on its progress the next day and sent a single follow-up prompt when I noticed how many Rust crates it had built: Every folder in the crates/ directory needs a README Include a tutorial.md teaching users how to install the extension and how to run it in the SQLite CLI and then teaching them SPARQL in addition to how to use the SQLite extension Include a script with the tutorial for populating a SQLite database with useful and realistic example data for that tutorial This project feels like next-level vibe coding - it's not remotely feasible to review the code that was produced here, and even following the documentation is a significant investment in work. I'm not entirely sure what to do with this - I appear to have a full SPARQL implementation in Rust inside SQLite now, but how valuable is that if I created it on a whim and can't (or won't) invest the necessary time to understand what it can do? Tags: rdf , semantic-web , sqlite , ai , rust , generative-ai , llms , coding-agents , claude-code
