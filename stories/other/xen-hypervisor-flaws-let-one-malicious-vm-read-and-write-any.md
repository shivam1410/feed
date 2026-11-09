---
title: "Xen Hypervisor Flaws Let One Malicious VM Read and Write Any Other VM's Memory"
category: "Other"
source: "The Hacker News"
url: "https://thehackernews.com/2026/11/xen-hypervisor-flaws-let-one-malicious.html"
authors: ["info@thehackernews.com (The Hacker News)"]
date: "Wed, 04 Nov 2026 17:16:27 +0530"
score: ""
guid: "https://thehackernews.com/2026/11/xen-hypervisor-flaws-let-one-malicious.html"
image: ""
generated: "2026-11-09T20:33:26+05:30"
---

Two flaws in the Xen hypervisor allow a malicious guest virtual machine (VM) to read and write the memory of other VMs on the same host, including dom0. Dom0 is the VM that, by default, has full permissions and manages the others. Patches are out, and there is no known mitigation, the Xen Project said in an advisory on November 3. All Xen versions from 4.6 onward are vulnerable,
