# Shelly Detached Input Blueprint

## 🔌 Shelly Detached Input – Single Button (v1.3.1)

### 🏠 Use case

Want to use a physical wall switch to control your smart lights?

With a Shelly Gen3/Gen4 device in detached mode, this blueprint allows you to:

- Keep smart lights powered (not physically disconnected)
- Control them via a normal wall switch or Shelly wall button
- Let Home Assistant handle the smart logic
- Still have predictable behavior if Home Assistant is temporarily unavailable (fallback)

> ⚠️ Working with mains voltage is dangerous.
> Always disconnect power before wiring, and consult a professional installer if in doubt.

---

## ✨ Features

- Supports Switch mode (binary_sensor on/off)
- Supports Button mode (Shelly button events)
- Lamp mode or fully Custom actions
- Optional Confirm output on the Shelly device
- Works with Shelly Gen3 & Gen4
- Designed for detached input configuration
- High WAF (Wife Acceptance Factor) thanks to local fallback

---

## 🛠 How it works

| Mode | Trigger | Behavior |
|------|--------|----------|
| Switch | binary_sensor | Toggle or custom ON/OFF actions |
| Button | Shelly device trigger | Single / Double / Long press actions |

In Lamp mode:
- Single press → Toggle light
- Double press → 100% brightness

In Custom mode:
- Each press type can run your own action sequence.

---

## 🔧 Shelly configuration (Confirm Output / Fallback)

On your Shelly Gen3 / Gen4 device:

1. Go to Components
2. Create new → Boolean
3. Name: confirm
4. View: toggle
5. Leave all other options default

This Boolean will appear in Home Assistant as a switch
and can be selected as the Confirm switch in the blueprint.

The Shelly script will handle resetting it automatically.

---

## 🧪 Debugging (Remote Testing)

This blueprint contains an optional debug trigger.

Home Assistant → Developer Tools → Events

Event type:
shelly_button_event

Example payload:

```json
{
  "device_id": "YOUR_SHELLY_DEVICE_ID",
  "event_type": "single_push",
  "subtype": "button1"
}