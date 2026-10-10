# Atlas Device Bridge · Documentation map

## Start with
1. [Opportunity and strategic context](01-opportunity.md)
2. [End-to-end architecture](02-architecture.md)
3. [OS/device capability matrix](03-platform-matrix.md)
4. [Alternatives, including OpenClaw](04-alternatives.md)
5. [Protocol and contracts](05-protocol-contracts.md)
6. [Security, consent and privacy](06-security-consent.md)
7. [Use-case playbooks](07-use-cases.md)
8. [Atlas Knowledge Hub integration](08-knowledge-hub.md)
9. [Roadmap and acceptance gates](09-roadmap.md)
10. [Evaluation, economics and limits](10-metrics-and-economics.md)
11. [Stakeholder roles](11-governance.md)
12. [Open-source references](references.md)
13. [Dated analysis](analysis-log.md)

## Engineering artifacts
- [Device capability JSON Schema](../contracts/device-capability.schema.json)
- [Session consent JSON Schema](../contracts/consent-grant.schema.json)
- [Invocation JSON Schema](../contracts/invocation.schema.json)
- [Pure-JS policy reference](../src/policy.mjs) and [tests](../test/policy.test.mjs)
- [Architecture SVG](../assets/architecture.svg)
- [ADRs](adr/ADR-0001-capability-gateway.md), [roadmap](09-roadmap.md), [CHANGELOG](../CHANGELOG.md)

## Searchable ID taxonomy
ADB-OPP opportunity · ADB-ARCH architecture · ADB-PLAT platforms · ADB-ALT alternatives · ADB-PROTO protocol · ADB-SEC security · ADB-UC use-cases · ADB-KH knowledge integration · ADB-PLAN roadmap · ADB-EVAL metrics.

**Statuses:** OBSERVED (checked reference), PROPOSED (analysis), ACCEPTED (explicit sign-off), IMPLEMENTED (code), VERIFIED (test evidence), DEPLOYED (live with proof). At v0.1.0 only docs/prototypes are implemented.
