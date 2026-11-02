---
title: "Communication-Efficient Private Federated Reinforcement Learning with Post-Quantum Authentication for Vehicular Networks"
category: "Cyber Security"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.41055"
authors: ["Hojat Allah Salehi, Devrim Aras, Md Jueal Mia, M. Hadi Amini, Imtiaz Karim, Mashrur Chowdhury, Bhavani Thuraisingham"]
date: "Mon, 02 Nov 2026 00:00:00 -0500"
score: 22
guid: "oai:arXiv.org:2610.41055v1"
image: ""
generated: "2026-11-02T19:04:34+05:30"
---

Federated reinforcement learning supports cooperative vehicular routing without centralizing trajectory data, but model updates may reveal private information and incur communication overhead over intermittent vehicle-to-infrastructure links, particularly when post-quantum authentication is required. We study correlated private quantization, using complementary shared randomness between paired vehicles to reduce aggregation mean squared error while preserving the marginal parameter-level local differential privacy and one-bit communication cost of independent quantization. A tunable extension mixes shared and independent randomness to bound privacy leakage given paired outputs and shared-randomness side information. For this extension, R\'enyi differential privacy accounting establishes vector-level local differential privacy for one model upload even when pairings are revealed. Under matched vector-level privacy and identical local and global parameters, the extension yields 16.5% lower analytical aggregation mean squared error than independent quantization. We evaluate cooperative routing by coupling traffic simulation with packet-level simulation of post-quantum-authenticated vehicle-to-infrastructure communication. Compared to full-precision updates, one-bit uploads reduce authenticated uplink size by 92.4% and increase mean verified updates aggregated per round from 19.6 to 26.5. Under mobility-constrained communication at a parameter-level privacy budget of 1, correlated private quantization reduces mean travel time by 14.3% relative to independent quantization at the same budget and communication cost. At a parameter-level privacy budget of 0.3, a vehicle-origin inference attack trained on independent simulations reaches 30% accuracy with correlated private quantization and 22% with independent quantization after 100 rounds, versus 91% without privacy and 10% for random guessing.
