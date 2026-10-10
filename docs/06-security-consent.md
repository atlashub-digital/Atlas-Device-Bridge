# ADB-SEC-001 · Security and consent architecture

**Status:** PROPOSED. Security/privacy assessment required before a real-device test.

## Five separate gates
1. Device has a valid pairing for correct owner/tenant.
2. Device declared and locally enables capability, with OS permissions.
3. Authenticated human authorizes purpose-bound, short-lived visible session.
4. Server resolves actor/deployment grant and allowed tools; role cannot self-approve.
5. Local companion verifies command risk, non-replay, foreground/local consent and stop control.

**Pairing alone authorizes nothing.** Deny if any gate fails.

## Threats
- Hidden or coerced screen/camera/microphone monitoring; remote shell abuse; malicious screen content prompt injection; lateral movement across tenants; replayed commands; forged approvals; unrestricted file exfiltration; takeover of device registration; persistent capture after session end; unauthorized medical/personal data recording; minors targeted without safeguards.

## Mandatory controls
- Explicit screen/recording indicators, local stop/pause, revocation propagation and no stealth service.
- Mutual authenticated channel and device identity; rotate/revoke pairing material, validate client version; no inbound employee-device port.
- Per-capability schema allowlist + risk tier; deny `system.run`, arbitrary JavaScript, unrestricted filesystem and clipboard capture unless separately reviewed.
- Positive approval for money, publication, changes to security, account creation/deletion and irreversible side effects. For many actions, safer answer is **human only**.
- Parameter constraints, path allowlists from user-picked file handles (not arbitrary root paths), bounded frames and retention limits.
- Transcript/screenshots minimized, encrypted, never included in default diagnostics; no accidental image attachment to LLM logs.
- Auditable request, policy version, decision, actor/device reference, timestamps and outcome; redact content.
- Vulnerability management, signed releases, updater integrity, periodic pen-test and policy regression suite.

## Special populations
Children and family tutoring require transparent guardian involvement, age-appropriate design and local control; **never** hidden monitoring or bypass. Healthcare: avoid accessing clinical records unless contract, legal basis and privilege map strictly require it; do not give unsupervised clinical advice.

## Privacy law
LGPD/GDPR applicability depends on controller, location, purpose and data. DPIA/privacy impact assessment recommended for systematic capture; approval by counsel/security required for actual rollout.

## Failure handling
Default fail-closed for lost network, expired session, invalid capability, changed device identity, background/unlocked-state mismatch (where relevant), source revoke, or insufficient OS permission. Device must remain safe when gateway is down.
