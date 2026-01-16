# 🔌 Shelly Detached Input – Home Assistant Blueprints

This repository contains Home Assistant blueprints for Shelly devices configured in **detached input mode**.  
The blueprints allow you to use Shelly inputs as **switches or buttons**, while keeping full control over
lights, scenes, or custom automations inside Home Assistant.

The setup is designed to be **flexible, robust, and future-proof**, with optional local fallback behavior
running directly on the Shelly device (Gen3 & Gen4).

---

## 📦 Included

- 🧩 Home Assistant automation blueprint  
  **Shelly Detached Input – Switch or Button Mode (v1.3)**
- 🛡️ Optional Shelly fallback script (Gen3 & Gen4)
- 📖 Clear documentation for Home Assistant and Shelly configuration

---

## ✨ Features

### 🔧 Input modes
- **Switch mode**
  - Uses a `binary_sensor`
  - Triggered on OFF → ON and ON → OFF transitions
- **Button mode**
  - Uses a Shelly `event` entity
  - Supports:
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

### 🛡️ Optional confirm feedback
- Trigger a virtual confirm switch on the Shelly
- Works with both switch and button mode
- Fully compatible with the fallback script

---

## 📥 Importing the Blueprint

Use Home Assistant’s blueprint import feature:

1. Go to  
   **Settings → Automations & Scenes → Blueprints**
2. Click **Import Blueprint**
3. Paste this URL:
https://raw.githubusercontent.com/willumpie82/homeassistant-blueprints/main/blueprints/automation/willumpie82/Shelly-detached-input.yaml

---

## ⚠️ Important: Required Inputs (Home Assistant Limitation)

Home Assistant requires **all trigger entities to be valid at all times**.

This means:
- When using **Switch mode**, the switch input **must be selected**
- When using **Button mode**, the button event entity **must be selected**
- Some inputs may still require a value, even if they are ignored

👉 If an input is not relevant for your selected mode, simply select **any entity**.  
It will **not** be used by the automation.

This behavior is a Home Assistant limitation, **not a blueprint bug**.

---

## 🔧 Shelly Configuration

### 1️⃣ Configure the Shelly input
- Set the input to **Detached mode**
- Disable any internal switching behavior

This ensures Home Assistant has full control over the logic.

---

### 2️⃣ Create the Confirm Switch (Gen3 & Gen4)

The confirm switch is a **virtual component**, not a physical output.

**Steps:**

1. Open the Shelly web interface
2. Go to **Settings → Components**
3. Click **Create new**
4. Select **Boolean**
5. Configure:
   - **Name:** `confirm`
   - **View:** `Toggle`
   - Leave all other options at their default values
6. Save the component

The confirm component will now:
- Appear in Home Assistant as a **`switch` entity**
- Be visible under the **Control** section of the Shelly device
- Be selectable as the **Confirm switch** in the blueprint

---

### 3️⃣ Shelly Fallback Script (Optional, Gen3 & Gen4)

To improve reliability, especially during Home Assistant restarts or network issues,
you can run a fallback script directly on the Shelly.

**What the script does:**
- Listens for physical input activity
- Generates a short confirmation pulse
- Resets itself automatically
- Works independently of Home Assistant

The same script works for:
- Switch mode
- Button mode

📄 Script file:
shelly/confirm_fallback_gen3_gen4.js

**How to add the script:**

1. Open the Shelly web interface
2. Go to **Scripts**
3. Add a new script
4. Paste the contents of `confirm_fallback_gen3_gen4.js`
5. Enable the script

No further configuration is required.

---

## 🧠 Why use a fallback script?

While Home Assistant is very reliable, a local fallback provides:

- Immediate feedback on button presses
- Consistent behavior during HA restarts
- A better “physical switch” feel

Home Assistant and the Shelly script work **together**, not against each other.

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
- Preset brightness options
- More flexible per-event custom actions

---

## 🤝 Feedback & Contributions

Feedback, bug reports, and feature suggestions are welcome.

If you’re using this blueprint in an interesting way, feel free to share it
on the Home Assistant Community forum!

---