# ADB-KH-001 · Atlas Device Bridge ↔ Atlas Knowledge Hub

**Status:** PROPOSED interoperability; both repositories are architecture baselines.

## Integration purpose
Use ADB as an **optional data-entry adapter** when authorized local folders or on-device documents are not already available via safer SaaS connectors. AKH controls the resulting knowledge lifecycle. ADB does not become document management, agent memory or authorization authority for the AKH corpus.

## Consent-aware ingest
1. User chooses explicit file(s)/folder(s) in device companion; show summary of scope and classification.
2. ADB establishes tenant-scoped ingest request and short-lived token for selected objects only.
3. AKH independently verifies tenant, source grant, owner, retention and permitted file type.
4. File passes malware/classification checks, content extraction and version/provenance capture.
5. AKH indexes approved extracts; response returns individual source status and retention.
6. If local grant revoked, AKH receives revocation event and invalidates derived indexes/caches per retention policy.

## Example contract
```json
{
  "source_type":"device_bridge",
  "owner_org":"synthetic-company",
  "tenant_ref":"synthetic-tenant",
  "consent_ref":"consent-synthetic-001",
  "selected_items":[{"opaque_file_ref":"file-synthetic-001","sha256":"provided-after-copy"}],
  "destination_library":"clients/synthetic-tenant"
}
```

No actual files or bearer tokens embedded in public examples.

## Quality/safety
A retrieved on-device document is still untrusted user content; its instructions cannot elevate the system prompt. No automatic import of desktop search index, browser cookies, messages, medical records or hidden folders. See [AKH ingestion](https://github.com/atlashub-digital/Atlas-Knowledge-Hub/blob/main/docs/05-ingestion.md).
