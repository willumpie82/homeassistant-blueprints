# Home Assistant Blueprints by willumpie82

This repository contains automation blueprints for [Home Assistant](https://www.home-assistant.io/).

---

## 📦 Available Blueprints

### 🔘 Z-Wave.me WALLC-S (4-button wall switch)

This blueprint is designed for the **Z-Wave.me WALLC-S** 4-button wall switch, integrated via **Z-Wave JS**.

Each button pair (left = buttons 1+2, right = buttons 3+4) can be configured in two modes:

- **Lamp Mode**  
  Assign a dimmable light to a button pair.  
  - Top button = **turn on** the light  
  - Bottom button = **turn off** the light  
  - Hold = **dim up / dim down**  
  - Release = **stop dimming**

- **Custom Mode**  
  Define your own actions for **single press, double press, hold, and release** per button.  
  This gives you full flexibility to trigger any automation, script, or service call in Home Assistant.

---

### 🚨 Panic Button – Actionable Alert

Turns a (Zigbee) button into a panic button. A press sends an **actionable notification**
(optionally a *critical* alert that rings through silent mode) to the Home Assistant Companion app,
with two response buttons. Each response runs your own actions, e.g. speak "OK" / "I'm coming"
on a speaker or show it on a wall display.

Inputs: button, notify service, alert type, response 1/2 name and actions (plus title, message and timeout).

**Hardware:** Sonoff SNZB-01P. One blueprint per integration:

| Integration | Blueprint | Import |
|---|---|---|
| Zigbee2MQTT | `panic_button_z2m.yaml` – set the MQTT topic of your button | [![Import blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https%3A%2F%2Fgithub.com%2Fwillumpie82%2Fhomeassistant-blueprints%2Fblob%2Fmain%2Fblueprints%2Fautomation%2Fwillumpie82%2Fpanic_button_z2m.yaml) |
| ZHA | `panic_button_zha.yaml` – pick the ZHA device, commands prefilled for the SNZB-01P (`toggle,on,off`) | [![Import blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https%3A%2F%2Fgithub.com%2Fwillumpie82%2Fhomeassistant-blueprints%2Fblob%2Fmain%2Fblueprints%2Fautomation%2Fwillumpie82%2Fpanic_button_zha.yaml) |

Import button not working? In Home Assistant go to **Settings → Automations & Scenes → Blueprints → Import Blueprint**
and paste the URL:

- `https://github.com/willumpie82/homeassistant-blueprints/blob/main/blueprints/automation/willumpie82/panic_button_z2m.yaml`
- `https://github.com/willumpie82/homeassistant-blueprints/blob/main/blueprints/automation/willumpie82/panic_button_zha.yaml`

**3D-printed housing:** emergency-stop style button with a limited stroke so the cap cannot crush the SNZB-01P.
MakerWorld: _link follows once the design is published_

---

## 📥 Importing the Blueprint

You can import the blueprint directly into Home Assistant using this link:
https://github.com/willumpie82/homeassistant-blueprints/blob/main/blueprints/automation/willumpie82/wallc-s.yaml

**How to import:**
1. Open Home Assistant.  
2. Go to **Settings → Automations & Scenes → Blueprints → Import Blueprint**.  
3. Paste the link above and click **Import Blueprint**.  

---

## 🔘 Button Mapping

| Button | Property Key | Position       |
|--------|--------------|----------------|
| 1      | `"001"`      | Top left       |
| 2      | `"005"`      | Bottom left    |
| 3      | `"002"`      | Top right      |
| 4      | `"006"`      | Bottom right   |

---

## 📝 Notes

- This blueprint is designed specifically for the **Z-Wave.me WALLC-S** wall switch.  
- Requires **Z-Wave JS integration** in Home Assistant.  
- Lamp mode expects the selected light to support brightness (for dimming).  

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).