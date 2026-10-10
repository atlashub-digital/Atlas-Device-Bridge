# ADB-ALT-001 · Implementation alternatives and trade-offs

**State:** OPEN comparison, not a decision to adopt OpenClaw.

| Approach | Strengths | Risks / fit |
| --- | --- | --- |
| **A: ADB policy gateway + native adapters** | strong typed contract, portable security, clear audit | multi-platform development/maintenance |
| B: OpenClaw node as optional adapter | existing pairing/commands on some devices | runtime coupling, upstream changes, command surface mapping, licensing review |
| C: Browser-only automation with Playwright | fast web-only pilots, isolated sessions | cannot cover native apps, risk of fragile selectors |
| D: Managed RPA tooling | mature enterprise UI flows and governance | licensing/vendor dependence and user-experience cost |
| E: VNC/RDP/remote desktop | broad desktop visibility | large security/consent surface, not suitable as generic agent action channel |
| F: Own app and API-only tasks | strongest platform approval path | reduced control over legacy environments |
| G: Dedicated HDMI/kiosk appliance | controlled TV/media experience | hardware logistics/updates |
| H: No bridge; only integrations | safest/cheapest for API-accessible task | limited local-context use cases |

## Recommendation
Start A + limited C for Windows desktop POC; evaluate B behind a **conformance adapter** and permission mapping. Prioritize native API/in-app intents over UI automation whenever equivalent.

## OpenClaw due diligence checklist
Compare declared vs actually permitted commands; pairing revocation; local device permission; default dangerous-command enablement; screen/camera handling and log retention; update path; cloud/network requirement; licensing; system prompt integration and failure states. Never open upstream admin gateway or arbitrary `system.run` to AI Workforce tools.

## Decision criteria
Risk first: permission fidelity, no silent capture, app-store compliance, rollback, support burden; then availability, latency, compatibility, costs. See [measurement](10-metrics-and-economics.md) and [ADR](adr/ADR-0002-adapters.md).
