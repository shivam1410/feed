---
title: "Efficiently Representing Algorithms With Chain-of-Thought Transformers"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.19697"
authors: ["Yanhong Li, Anej Svete, Ashish Sabharwal, William Merrill"]
date: "Fri, 19 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.19697v1"
image: ""
generated: "2026-06-19T21:38:58+05:30"
---

arXiv:2606.19697v1 Announce Type: new Abstract: The increasing popularity of \emph{reasoning} models -- language models that output a series of reasoning or thought tokens before producing an answer -- is justified, in part, by theoretical results showing that chain-of-thought (CoT) transformers can simulate Turing machines, and thus perform arbitrary computation. However, the Turing machine, while suitable for complexity-theoretic analysis, is not convenient, intuitive, or efficient for discussing algorithms. Algorithms are typically designed and analyzed at a higher level of abstraction, captured by the \emph{Word RAM} model with random-access memory and unit-cost operations on $\bigO(\log n)$-bit words. As a result, Word RAM algorithms can be substantially more efficient than their Turing machine counterparts, raising the question: \emph{Can CoT transformers efficiently simulate Word RAM algorithms?} For instance, can they sort $n$ items in $\bigO(n \log n)$ steps or run Dijkstra's algorithm in $\bigO(E + V \log V)$ steps? We answer affirmatively, up to poly-logarithmic overhead. We first establish this for finite-precision transformers with poly-logarithmic width and rightmost unique hard attention, then strengthen the result to two more practical settings with finite width and log-precision: \emph{continuous} CoT, where reasoning takes the form of vectors rather than tokens, and a \emph{hybrid} architecture in which transformer layers sit atop a recurrent (linear RNN) layer. In all three cases, we find that CoT \emph{can} efficiently simulate any Word RAM algorithm with only a poly-logarithmic overhead in $n$. This overhead reduces to log-square when the Word RAM has a ``flat'' instruction set, and only logarithmic for multiplication-free flat instructions -- in stark contrast to known CoT simulations of Turing machines, which require quadratic overhead over Word RAM.
