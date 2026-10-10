# JSON Schemas · ADB v0.1.0

- [device-capability.schema.json](device-capability.schema.json) — companion-declared capabilities.
- [consent-grant.schema.json](consent-grant.schema.json) — purpose-bound local consent.
- [invocation.schema.json](invocation.schema.json) — typed command envelope.

Schemas validate *shape*, not authentication. Production requires signed identities, nonces, policy checks, local OS grants, safe parameter validation and audit.
