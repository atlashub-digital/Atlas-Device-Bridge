# ADB-PROTO-001 · Pairing, session, capability and command contracts

**State:** PROPOSED; JSON Schema v1 artifacts in [contracts](../contracts/device-capability.schema.json). This is a reference design, not production authentication.

## Identity model
Tenant (verified deployment), operator principal, enrolled device identity, local signed-in user, purpose-bound session ID, declared capability, issued approval/consent ID, correlation ID and one-time replay token. None are inferred from prompt text.

## Device manifest
```json
{
  "schema_version":"1.0",
  "device_class":"desktop",
  "platform":"windows",
  "client_version":"0.1.0",
  "capabilities":[
    {"id":"ui.inspect","risk":"read","requires_foreground":true},
    {"id":"ui.click","risk":"write","requires_foreground":true}
  ]
}
```
Manifest is **claims** requiring observed handshake checks and local grant. It is never proof of consent.

## Session consent
```json
{
  "schema_version":"1.0",
  "session_ref":"synthetic-session-1",
  "device_ref":"synthetic-device-1",
  "purpose":"guided_onboarding",
  "allowed_capabilities":["ui.inspect","ui.click"],
  "visible_indicator":true,
  "expires_at":"2026-10-10T21:00:00Z",
  "local_confirmed":true
}
```
Trust actual signed origin and state, not arbitrary JSON. An outdated consent or new capability ID requires renewed approval.

## Capability classes
```text
device.info         read/minimal
ui.inspect          read/local user visibility
screen.snapshot     capture/high sensitivity
ui.click            write/interactive
form.fill           write/interactive
document.select     user-local selection
knowledge.ingest    transfer / explicit source grant
media.play          controlled app/player
camera.snap         capture/high sensitivity
system.run          DENIED by default / outside POC
```

## Transport envelope
Request: version, correlation_id, device_ref, session_ref, capability_id, typed params, approval_ref when necessary, nonce, timestamp and cryptographic binding. Response: success | denied(reason_code) | partial | unavailable | cancelled, bounded typed outputs and audit reference.

**Never** send service_role/OAuth passwords/raw API keys through an LLM prompt. Server must verify signed invocation; device re-verifies local consent and OS permission. An invocation request schema on its own is not an authorization system.
