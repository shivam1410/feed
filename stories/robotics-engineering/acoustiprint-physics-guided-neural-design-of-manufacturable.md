---
title: "AcoustiPrint: Physics-Guided Neural Design of Manufacturable Acoustic Structures"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.30411"
authors: ["Shanmuka Sadhu, Harshvardhan C. Takawale, Yehia Zakaria, Ahmed Allam, Nirupam Roy"]
date: "Fri, 23 Oct 2026 00:00:00 -0400"
score: 25
guid: "oai:arXiv.org:2610.30411v1"
image: ""
generated: "2026-10-23T19:04:29+05:30"
---

Recent work in additive manufacturing and neural inverse design enables the creation of complex three-dimensional structures to manipulate physical fields, yet these designs must also adhere to discrete, non-differentiable fabrication constraints. Current methods limit the design space by imposing differentiable soft manufacturability loss penalties, or by fixing structures through post-processing, causing a discrepancy between the geometry optimized by the physics model and the final fabricated result. Thus, we present AcoustiPrint, a physics-informed neural architecture for constrained inverse design that represents three-dimensional geometries with an implicit neural representation (INR) and passes each candidate through a printability operator before evaluating its final response. The printability operator executes layer-wise self-support, discrete material selection, and whole-body connectivity, assuring fabrication feasibility. To allow for backpropagation through the discrete non-differentiable operations, we use surrogate gradients for the backward pass and a self-supervised printability objective that progressively drives the INR toward a valid design domain. We demonstrate AcoustiPrint for personalized transcranial focused ultrasound, where inter-patient differences in acoustic properties and head geometry deform wave propagation and requires patient-specific acoustic focusing. AcoustiPrint jointly optimizes three-dimensional geometry and material composition through differentiable wave physics while ensuring manufacturability. Experiments show manufacturable acoustic structures with enhanced focal accuracy and over density-based and phase-based baselines, demonstrating a generalized methodology for neural design through non-differentiable manufacturing constraints and differentiable physics.
