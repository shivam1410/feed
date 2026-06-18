---
title: "Publishing WASM wheels to PyPI for use with Pyodide"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jun/13/publishing-wasm-wheels/#atom-everything"
authors: []
date: "2026-06-13T23:55:18+00:00"
score: 30
guid: "https://simonwillison.net/2026/Jun/13/publishing-wasm-wheels/#atom-everything"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

PyPI now supports publishing Python wheels built for Pyodide (Python on WebAssembly) directly from package authors, removing a critical bottleneck. Previously, Pyodide maintainers manually built and hosted 300+ packages—a maintenance burden that blocked community contributions and slowed adoption. Now C and Rust extensions compiled to WASM can be distributed like standard Python wheels on any platform. This change dramatically lowers barriers to browser-based Python development and enables package authors to maintain WASM distributions independently, accelerating ecosystem growth.
