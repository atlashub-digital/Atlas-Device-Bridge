# ADR-0002 — Native-first with optional OpenClaw adapter (PROPOSED)

- Date: 2026-10-10.
- Recommendation: use API/native OS adapter first; OpenClaw node adapter evaluated only behind policy gateway.
- Alternatives: OpenClaw as core runtime; browser-only; commercial RPA; custom unified OS automation.
- Required: documented feature mapping and drift tests, license review, no accidental `system.run` grant, correct session revocation.
- State: proposed; no proof of OpenClaw/Hermes integration in this repository.
