# 🔌 Shelly Detached Input – Home Assistant Blueprints

This repository contains Home Assistant blueprints for **Shelly Gen3 & Gen4 devices**
configured in **detached input mode**.

The goal is to use **physical wall switches or buttons** to control **smart lights or automations**
without physically switching mains power to the lights.

An optional **local fallback mechanism** runs directly on the Shelly device and provides
predictable behavior and feedback even during Home Assistant restarts — significantly
improving the real-world usability (WAF factor) of smart lighting setups.

---

## 📦 Included

- 🧩 Home Assistant automation blueprint  
  **Shelly Detached Input – Switch or Button Mode (v1.3)**
- 🛡️ Optional Shelly fallback script (Gen3 & Gen4)
- 📖 Documentation for Home Assistant and Shelly configuration

---

## 🧱 Typical Use Case

Do you want to use a **physical wall switch** to control your **smart lights**
*without cutting power to the bulbs*?

This blueprint is designed exactly for that scenario.

### Example setup
- 💡 Smart lights (Hue, Zigbee, Wi-Fi, etc.)
- 🔌 **Shelly Gen3 device** configured in **detached mode**
- 🔘 A classic wall switch **or**
- 🖲️ A Shelly Wall Switch (2)

In this setup:
- The physical switch does **not** control mains power directly
- The Shelly input only reports user interaction
- Home Assistant handles the smart logic
- **Smart lights are not physically switched off by the wall switch**
- **Basic interaction remains functional even if Home Assistant is temporarily unavailable,
  thanks to the local Shelly fallback**

This results in:
- Predictable behavior
- A familiar “it just works” feeling
- A much higher WAF (Wife / Partner Acceptance Factor)

---

### ⚠️ Electrical Safety

Shelly devices operate on **mains voltage**.

Always ensure:
- Correct wiring according to Shelly documentation
- Compliance with local electrical regulations

If you are unsure, **consult a qualified professional installer**.

---

## ✨ Features

### 🔧 Input modes
- **Switch mode**
  - Uses a `binary_sensor`
  - Triggered on OFF → ON and ON → OFF transitions
- **Button mode**
  - Uses a Shelly `event` entity
  - Supported:
    - `single_push`
    - `double_push`
    - `long_push`

### 💡 Action modes
- **Lamp mode**
  - Switch mode → toggle light
  - Button mode:
    - single press → toggle
    - double press → set brightness to 100%
- **Custom mode**
  - Define your own action sequences per switch state or button event

---

## 📥 Importing the Blueprint

1. Go to  
   **Settings → Automations & Scenes → Blueprints**
2. Click **Import Blueprint**
3. Paste this URL:

https://raw.githubusercontent.com/willumpie82/homeassistant-blueprints/main/blueprints/automation/willumpie82/Shelly-detached-input.yaml

---

## ⚠️ Required Inputs (Home Assistant Limitation)

Home Assistant requires **all trigger entities to be valid at all times**.

This means:
- Switch mode → switch input is required
- Button mode → button event entity is required
- Some inputs may still need a value, even if they are ignored

👉 If an input is not relevant for your selected mode, simply select **any entity**.  
It will **not** be used by the automation.

This is a Home Assistant limitation, **not a blueprint bug**.

---

## 🔧 Shelly Configuration

### 1️⃣ Detached input
- Configure the Shelly input as **Detached**
- Disable any internal switching behavior

---

### 2️⃣ Confirm switch (Gen3 & Gen4)

The confirm switch is a **virtual component**, not a physical output.

**Steps:**

1. Open the Shelly web interface
2. Go to **Settings → Components**
3. Click **Create new**
4. Select **Boolean**
5. Configure:
   - **Name:** `confirm`
   - **View:** `Toggle`
   - Leave all other options at default
6. Save

The confirm component will:
- Appear in Home Assistant as a **`switch` entity**
- Be visible under the **Control** section of the Shelly device
- Be selectable as the **Confirm switch** in the blueprint

---

### 3️⃣ Shelly fallback script (optional)

The fallback script provides **local confirmation and predictable behavior**
even when Home Assistant is restarting or temporarily unavailable.

**What it does:**
- Listens for physical input events
- Generates a short confirmation pulse
- Resets automatically
- Works for both switch and button mode

📄 Script location:
shelly/confirm_fallback_gen3_gen4.js

---

## 🧭 Versioning

- Blueprint versioning is documented in:
  - Blueprint name
  - Blueprint description
  - Git commit history
- The filename remains stable to avoid breaking import links

Current version: **v1.3**

---

## 🚀 Roadmap

Planned for **v1.4**:
- Scene controller support
- Advanced dimming behavior
- Preset brightness levels
- Per-event action customization

---

## 🤝 Feedback

Feedback, bug reports, and feature ideas are welcome.

If you’re using this blueprint in an interesting way,
feel free to share it on the Home Assistant Community forum!