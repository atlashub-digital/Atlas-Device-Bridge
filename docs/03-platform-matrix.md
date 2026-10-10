# ADB-PLAT-001 · Device/OS feasibility matrix

**State:** preliminary research; features must be proven on selected OS build/hardware/store distribution. Never market generic remote control from a capability checkmark.

| Target | Observe / guide | Actions likely feasible | Major restrictions |
| --- | --- | --- | --- |
| Windows desktop | Own opt-in UI, Accessibility/UI Automation, permitted capture | UI Automation, browser automation, selected app workflows | UAC, secure desktop, elevation, app security, permissions; experimental integrations |
| macOS | Opt-in menu bar app, capture with TCC, accessibility | Accessibility UI, AppleScript/Shortcuts where permitted, scoped browser automation | OS privacy prompts, locked session, notarization/sandbox rules |
| Linux desktop | Portal-mediated sharing, app/browser accessibility | X11/Wayland-specific automation and supported APIs | Wayland/compositor security, fragmented desktops |
| Android phone/tablet | Foreground own app, permissions, approved screen-share | Intents, in-app flows, selected accessibility use cases | MediaProjection consent, accessibility use constraints, background restrictions, Play rules |
| iPhone/iPad | In-app content/actions; user-approved share where available | App Intents/Shortcuts / app-owned actions | iOS sandbox; no generic cross-app manipulation, unknown app-store constraints |
| Android/Google TV | Controlled own app/player, Android TV MediaSession | In-app playback, navigation and approved interactions | Cannot assume control over other TV apps/YouTube |
| Samsung Tizen / LG webOS | Own app/API capabilities vary | App/player/remote functions by documented hardware API | Vendor APIs, certification, fragmentation |
| External HDMI / mini-PC | High within owned dedicated app | Fully controlled kiosk/TV tutor environment | Extra hardware, maintenance and power |
| Browser app | DOM inspection in own site / Playwright with authorized session | Forms, navigation, automation in controlled environment | Restricted origins, anti-bot, SSO, policy / ToS |

## Proof burden
Per platform record: OS version, device model, app-store distribution, required explicit permission, foreground/background behavior, success under locked screen, revocation effect, latency, privacy-indicator behavior and command inventory. An access path feasible in an enterprise-managed context may be prohibited for consumer app distribution.

## Native iOS
Use [App Intents](https://developer.apple.com/documentation/AppIntents) to expose **your app's own actions**; never interpret as an entitlement to control arbitrary apps.

## Android
Document current [MediaProjection](https://developer.android.com/media/grow/media-projection) and [AccessibilityService](https://developer.android.com/reference/android/accessibilityservice/AccessibilityService) policies, foreground requirements and explicit purpose. Play policy approval separate from OS technical feasibility.

## OpenClaw as comparative evidence
[Nodes documentation](https://github.com/openclaw/openclaw/blob/main/docs/nodes/index.md) describes paired device nodes and various capability gates. [Computer-use docs](https://github.com/openclaw/openclaw/blob/main/docs/nodes/computer-use.md) show platform-specific limits. It is an **external reference**, not proof ADB works or has the same rights.
