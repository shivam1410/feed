---
title: "datasette-apps 0.3a0"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Nov/4/datasette-apps/"
authors: []
date: "2026-11-04T00:29:36+00:00"
score: ""
guid: "https://simonwillison.net/2026/Nov/4/datasette-apps/"
image: ""
generated: "2026-11-06T21:37:05+05:30"
---

Release: datasette-apps 0.3a0 Datasette Apps adds support for hosting and editing custom HTML applications inside of Datasette. These can be created by hand, but it's easier to create them using LLMs via Datasette Agent . This release improves that integration: Apps can now be tagged in Datasette Agent chat messages by typing # , which autocompletes from the apps the user has permission to view. New app_add_stored_queries() and app_remove_stored_queries() tools let the agent manage which stored queries an app is allowed to call. Granting a write query requires approval from the user first. app_create() now checks that each requested stored query exists and that the user can view it, and asks the user to approve any write queries before the app is created. The "View app" buttons shown by the agent tools, and the links on # app references, now open the app full screen in the Datasette Agent panel. Tags: datasette , datasette-agent , datasette-apps
