---
title: "datasette-apps 0.1a3"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jun/15/datasette-apps-2/#atom-everything"
authors: []
date: "2026-06-15T20:25:07+00:00"
score: ""
guid: "https://simonwillison.net/2026/Jun/15/datasette-apps-2/#atom-everything"
image: ""
generated: "2026-06-23T19:00:42+05:30"
---

Release: datasette-apps 0.1a3 Fixed a bug where users without the create-app permission could still create apps. #27 Fixed a bug where it was impossible to grant permission to edit an app to users who were not the app's owner. The rules for edit/delete are now the same as view: if the app is private only the owner can modify it, otherwise permission is controlled by Datasette's regular permission system. #29 Tags: datasette
