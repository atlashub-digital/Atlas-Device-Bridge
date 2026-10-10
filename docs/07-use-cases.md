# ADB-UC-001 · Scenario portfolio and acceptance

**Status:** RESEARCH, prioritized examples; no proof of working device actions.

## POC-A: Desktop guidance / data intake
Employee connects Windows sandbox laptop, pairs via visible challenge, starts 10-minute consented session, agent inspects sandbox app UI, guides first, completes one allowlisted click with confirmation, and imports one **user-selected** mock folder to AKH with source provenance and tenant mapping. Tests: stop mid-run, deny folder outside selection, expired session, wrong tenant, screen lock/OS permission changes.

## POC-B: Controlled TV Tutor
Own Android TV/Google TV app plays licensed content with Q&A, optional avatar and quiz; parent/teacher sees active session. Fallback HDMI/mini-PC where native TV ecosystem is too restricted. Test restart, remote key handling, captions, network loss, age guardrail and no overlay into third-party apps. Avoid claiming native YouTube automation.

## POC-C: Mobile Field Companion
Android foreground app assists worker by voice, approved camera image and local procedure. Consent and device UI explain capture. iOS study uses app-owned flows and App Intents, not system-wide control. Test permission denial, background transition, data upload revoke.

## POC-D: Legacy ERP support
Prefer official API or browser-safe DOM first. If unavailable, limited visual automation with human preview/approval and field-level restrictions. Never enter credential vault/password fields via LLM. Rollback procedures required for writes.

## POC-E: Accessibility / family
User-initiated navigation aid, readable instructional overlays in owned app, educator-supervised content; minimize child data. No covert control, no surveillance, no behavioral profiling.

## POC-F: Marketing studio preview
AMF may **choose** to display approved creative on an authorized preview device, but editorial/publication approval remains in Factory. No publishing through Device Bridge by default.

## Non-candidate uses
Invisible screen recording; arbitrary phone control; credential harvesting; unauthorized staff monitoring; controlling a third-party smart TV app without official supported API; unsupervised medical decisions.
