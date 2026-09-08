# Test & Learn: A/B Testing Inside the Offer Nomination Flow

Bringing controlled experimentation to personalised offers by putting it inside the workflow offer managers already use, instead of building a separate experimentation tool nobody would adopt.

**Role:** Senior Product Manager, owner of the personalisation and measurement product suite
**Surface:** EMOM, dunnhumby's personalised offer management and measurement platform
**Timeline:** [ADD]
**Team:** [ADD]

## Context

dunnhumby runs customer data science for grocery retail. EMOM is the product suite retailers use to plan, target and measure personalised offers against their loyalty customer base. The users are offer managers at grocery retailers — people who decide what an offer says, who sees it, and how deep the discount goes, across a top-5 European grocer and other major grocery and retail clients in the UK, Norway and New Zealand.

## Problem

Personalised offers are full of decisions that move redemption and margin: discount depth (10% off vs 20% off), mechanic (percentage off vs money off), offer duration (short window vs long window), offer copy ("Flash Sale" vs "Just for you"). None of these were being tested. Offer managers optimised on precedent and intuition, because the platform gave them no way to do otherwise.

To compare two versions of an offer, a manager had to build two separate offers end to end, duplicating setup for every test; split the audience by hand, with no guarantee the two groups were comparable; and reconcile results across two separate campaign records afterwards, with no clean attribution of which variant drove the difference. Effort was high and the answer was untrustworthy, so testing rarely happened.

## What I shipped (V1)

A/B testing embedded inside the existing offer nomination flow, on the Creatives step. The nomination flow is Information, Audience, Redemption, Creatives. On Creatives, the offer manager turns on A/B testing, picks which variable to test, defines the variants, and the platform handles audience allocation and the control group. One offer, multiple variants. No duplicate offer setup.

Testable variables at V1: offer text (copy/naming), mechanics (percentage off vs money off), dates (short vs long duration), and audiences (percentage of users who see the offer). Audience allocation is uniform and automatic, and the control group is handled by the platform rather than configured by hand.

Measurement lives in the existing measurement dashboard, the same place offer managers already read results, and reports allocated and exposed customers and coupons, exposure rate, redemption and participation rates, sales uplift, total cost and incremental ROAS. Every result is flagged at one of three tiers: high statistical significance, directional statistical significance, or not significant.

Deferred out of V1: multi-variant testing (several versions of the same element in one experiment — 10% off vs 20% off vs 30% off), audience A/B testing (the same offer compared across different predefined audiences), multiple-variable testing (combinations of elements evaluated together), and side-by-side variant comparison or cross-offer uplift in the measurement dashboard.

## Decisions and trade-offs

**1. Embedded in the nomination flow, not a standalone experimentation module.** Adoption was the binding constraint, not capability. Offer managers had no experimentation habit, and moving them out of a familiar workflow into a new tool would have killed usage before it started. Cost: a test can only express what a single nomination can express. Cross-offer designs and holdout groups need a different home later.

**2. Platform-managed uniform allocation, not manual weighting.** Hand-split audiences were the biggest single reason results weren't trusted, since nothing guaranteed the two groups were comparable. Removing manual control removed that failure mode. Cost: no risk-limited designs, like a 90/10 rollout, which power users will eventually want.

**3. Single-variable A/B first, multivariate deferred.** Multivariate testing splits an audience into cells, and most offer-level audiences aren't large enough to fill them. An underpowered sophisticated test produces confident-looking noise, which is worse than a readable simple test. Multivariate ships once there's evidence that audience sizes support it.

**4. Three-tier significance, not a binary verdict.** Marketers act on direction as often as they act on proof. High, directional, and not-significant tiers let them use a weak signal without mistaking it for a strong one.

## Outcomes

[TODO — needs real data before this section can be written:]
- Tests run in the first N months
- Share of campaigns using the A/B testing feature
- Setup time before vs after, for a comparable test
- A real uplift a test surfaced, and what changed as a result
- Client adoption across the retailer base

## What I'd do differently

The enablement material shipped alongside the feature included a best-practices section: set a proper test duration, avoid over-segmentation, set an appropriate test/control split, use meaningful metrics, make sure there's enough data for statistical significance. That's the product's job, not a slide's. Minimum-duration warnings and sample-size guardrails should have been in V1, built into the flow itself. Training users out of a failure mode in a document while the flow still lets them fall into it isn't a fix, it's a delay.
