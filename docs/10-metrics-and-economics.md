# ADB-EVAL-001 · Metrics and cost/quality comparison

**Status:** measurement plan, no actual benchmark data available.

| Dimension | Metric | Record with |
| --- | --- | --- |
| Reliability | successful task rate, human intervention, rollback success | OS/app/version and adapter |
| Security | unauthorized action count (target zero), revoke latency, replay denial | audit event evidence |
| UX | pairing drop-off, consent friction, task completion | consented user study |
| Latency | P50/P95 per inspect, click, media command and round trip | hardware/network profile |
| Privacy | capture visibility, data retention, accidental upload count | approved testing |
| Cost | hosting, support, device rollout, provider tokens, bandwidth/GB | per active device & session |
| Platform stability | app-store rules, OS permission changes, update breakage | version matrix |
| Accessibility/education | task success with assistive UX, supervised completion | ethical evaluation |

## Compare pathways
- API-native automation baseline versus UI automation: different breakage and maintenance profiles.
- Native adapter versus OpenClaw node integration: feature parity, security gates and licensing.
- Native TV application versus managed HDMI: installation, support, capabilities, content rights.
- Cloud-managed versus customer-premises: data residency, security workload and remote support.

Do not calculate ROI without real task baseline, cost, error and human-review figures; numerical outputs are hypotheses.
