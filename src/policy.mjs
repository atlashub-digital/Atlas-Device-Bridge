/** ADB local policy reference: illustrative only; authentication/signatures are OUT OF SCOPE. */
const DENY=(reason)=>({allow:false,reason});
const SENSITIVE=new Set(['screen.snapshot','camera.snap','microphone.record','knowledge.ingest']);
const WRITES=new Set(['ui.click','form.fill','media.play','knowledge.ingest']);
export function authorize({actor,device,session,request,now=new Date()}) {
  if (!actor || !device || !session || !request) return DENY('missing_context');
  if (actor.tenantId !== device.tenantId || actor.tenantId !== session.tenantId) return DENY('tenant_mismatch');
  if (!actor.scopes?.includes('device:invoke')) return DENY('missing_role_grant');
  if (!device.paired || !device.online || !device.localEnabled) return DENY('device_unavailable');
  if (session.revoked || session.stopPressed) return DENY('session_revoked');
  if (!session.localConfirmed || !session.visibleIndicator) return DENY('local_consent_missing');
  if (!(new Date(session.expiresAt).getTime() > now.getTime())) return DENY('expired');
  if (request.deviceRef !== device.deviceRef || request.sessionRef !== session.sessionRef) return DENY('target_mismatch');
  if (!device.capabilities?.includes(request.capabilityId) || !session.allowedCapabilities?.includes(request.capabilityId)) return DENY('capability_denied');
  if (SENSITIVE.has(request.capabilityId) && !session.captureAllowed) return DENY('capture_not_consented');
  if (WRITES.has(request.capabilityId) && !actor.scopes.includes('device:write')) return DENY('write_not_granted');
  if (WRITES.has(request.capabilityId) && !request.humanApproved) return DENY('human_approval_missing');
  if (request.capabilityId === 'system.run' || request.capabilityId === 'credential.read') return DENY('hard_denied');
  return {allow:true,reason:'allow_prototype_only'};
}
