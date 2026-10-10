import {authorize} from './policy.mjs';
const actor={tenantId:'tenant-A',scopes:['device:invoke','device:write']};
const device={tenantId:'tenant-A',deviceRef:'device-A',paired:true,online:true,localEnabled:true,capabilities:['ui.inspect','ui.click']};
const session={tenantId:'tenant-A',sessionRef:'session-A',allowedCapabilities:['ui.inspect','ui.click'],localConfirmed:true,visibleIndicator:true,captureAllowed:false,expiresAt:'2099-01-01T00:00:00.000Z'};
console.log(JSON.stringify({warning:'SYNTHETIC policy check, not a real device action',result:authorize({actor,device,session,request:{deviceRef:'device-A',sessionRef:'session-A',capabilityId:'ui.inspect'}})},null,2));
