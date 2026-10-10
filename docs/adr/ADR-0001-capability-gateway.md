# ADR-0001 — Policy-first typed capability gateway (PROPOSED)

- Date: 2026-10-10.
- Context: LLM tool-calls to real devices create high-impact privacy, integrity and safety risks.
- Proposal: verified tenant+device+session with explicit OS/local consent; only registered typed commands; deny by default and local veto.
- Alternatives: raw VNC/RDP, direct LLM shell, direct OpenClaw gateway, UI-only remote screenshare.
- Pros: audit, least privilege and multi-platform contract. Cons: engineering overhead, adapters required.
- Evidence: kill-switch, replay denial, pair/approve split, unauthorized tenant A/B tests, native permissions.
- State: proposed awaiting product and security approval.
