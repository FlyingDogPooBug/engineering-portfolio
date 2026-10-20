# Keeping operating cycles out of both sides of a test

[Portfolio home](../../README.en.md) · [한국어](README.md) · [Live portfolio](https://yongmin.gardengnat12.chatgpt.site/#ideas)

> IDEAS / DATA EVALUATION · As of October 2026

A data recipe submitted by team 0ERROR to the 2026 Data + AI Innovation Challenge. It examines how segments from public hydraulic-equipment data are divided into training, validation and test sets.

| Item | Details |
|---|---|
| 2,205 | Source operating cycles |
| 26,460 | Segments · 32 sensor variables |
| 0 | Shared cycles after group splitting |

## Different rows can come from the same experiment

When one operating cycle becomes multiple segments, random row splitting can put parts of that cycle into both training and test sets. The recipe retains the source-cycle identifier and audits intersections between the splits.

## The deliverables

Prepared processed data, a split-audit script, recorded audit results and portal-entry text with AI assistance. A read-only check of the saved CSV found 1,884 shared source cycles between training and test in the row-random split, compared with zero in the cycle-grouped split.

## Submission and scope

The portal’s completed-submission screen is dated October 16, 2026. This demonstrates a data-split check, rather than improved detection accuracy or experiments completed on 0ERROR’s own cooling testbed.

---

Sources: the data-recipe entry, derived CSV, audit results, status record and submission screenshot in Data_AI_Challenge_2026. The saved data were checked read-only.

This document mirrors the verified public portfolio. Individual responsibilities, team work, proposals, submissions, awards and completed work are distinguished.

<!-- detailed-casebook -->

## Full technical record

[Three-chapter detailed case study in Korean](README.md) · [Detailed Korean PDF · 6 pages](../../site/downloads/datarecipe.pdf) · [Web case study](https://yongmin.gardengnat12.chatgpt.site/cases/datarecipe/)

The expanded record includes original report figures, design reasoning, deliverables, personal and team roles, and the limits of the evidence.
