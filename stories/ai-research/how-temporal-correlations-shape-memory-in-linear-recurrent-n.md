---
title: "How Temporal Correlations Shape Memory in Linear Recurrent Neural Networks"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.00420"
authors: ["Arnol Manuel Fokam, Fasseu Sieyondji Akpevwoghene, Edem Fiifi Dawson"]
date: "Wed, 02 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.00420v1"
image: ""
generated: "2026-09-02T19:06:18+05:30"
---

arXiv:2609.00420v1 Announce Type: new Abstract: The linear recurrent neural network (LRNN) is a simple model for studying how much memory a network builds up as it trains. For uncorrelated inputs, earlier work found that training itself settles the network between keeping the past and reacting only to the present. Real sequences are correlated, and we solve the learning dynamics exactly for correlated inputs. In the solution, keeping the past carries a cost. The whole effect of correlation lands on that cost. This cost reduces to the earlier one when inputs are uncorrelated and grows once they are positively correlated. Three findings follow. (1) Correlation reshapes the course of learning, not only its end. Memory builds, overshoots, and is partly removed, and the settled network keeps less of the past. (2) Memory switches off at a threshold set by one number, how much each input resembles the one just before it. Neither sequence length nor longer-range correlation moves this threshold. Memory is worth keeping only when the task needs the previous input more than the current input already supplies it through correlation with the past. (3) The best network changes too. Zero error demands a feedthrough, a path that passes the current input straight to the network's output and remembers nothing, and training builds it unprompted when given one spare hidden dimension. Our work turns one property of the input into a prediction of whether a network learns memory and explains why correlated data turns recurrent networks into change detectors.
