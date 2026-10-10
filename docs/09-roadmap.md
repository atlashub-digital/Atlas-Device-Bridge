# ADB-PLAN-001 · Stage gates, POCs and review artifacts

**Status:** PLANNED, not authorized for production rollout.

## P0 — Opportunity, controls and platform audit
Freeze list of business use cases, required OS targets, risk matrix, license/terms and customer consent policy. Deliver device/platform compatibility worksheet, privacy impact and interface agreement to existing AI Workforce.

## P1 — Secure reference protocol
Device identity/pairing plan; signed session consent; typed capabilities and approval; audit/revoke/kill-switch; synthetic tests and threat model.
**Gate:** tests for wrong tenant/device, deny-by-default, expiry and replay.

## P2 — Desktop pilot (Windows first; macOS comparison)
Native permission adapter and user-visible companion against sandbox app. Screen capture only after explicit OS/local permission. One controlled read, one confirmed click, one selected-file sync to AKH staging.
**Gate:** end-to-end verified task with safe pause, no unauthorized file read, local stop effective.

## P3 — Android/TV parallel feasibility
Android foreground assistant with consent; TV own app/HDMI player tutor demo. Separate developer-policy certification study for iOS/TV vendor ecosystems.
**Gate:** record capability supported on actual OS/hardware/firmware, no claim of universal remote control.

## P4 — OpenClaw adapter evaluation
Conformance mapping of selected `node.invoke` commands under ADB policy gateway; compare native implementation cost, stability, security and license. May be rejected.
**Gate:** no unsafe command escape or permission bypass.

## P5 — Commercial decision
Support cost per device, user friction, SLO, risk, privacy/legal sign-off; select AI Workforce add-on vs Build/Transfer vs not productized.
**Gate:** observed usage and controlled security assessment.

## Evidence format
Each POC must ship tested OS/model/version list, adapter commit, permission video/screenshots with synthetic info, denial traces redacted, test scripts, review sign-off, ADR and rollback.
