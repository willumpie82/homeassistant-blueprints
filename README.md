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