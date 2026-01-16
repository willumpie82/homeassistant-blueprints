# Shelly Detached Input – Home Assistant Blueprints

This repository contains Home Assistant blueprints for using Shelly devices
configured in **detached mode**, including optional confirmation feedback
using a Shelly output.

---

## 📦 Contents

- Home Assistant automation blueprints
- Shelly fallback script for Gen3 & Gen4 devices
- Documentation for configuring the confirm switch

---

## ⚙️ Supported Features

- Switch mode (binary_sensor)
- Button mode (event-based input)
- Lamp or custom action mode
- Optional confirm output (Shelly switch)
- Compatible with Shelly Gen3 & Gen4

---

## 🔧 Confirm Switch – How it works

The **confirm switch** is an optional Shelly output that provides feedback
whenever an input is triggered.

Typical use cases:
- Visual confirmation (LED, relay click)
- Fallback behavior if Home Assistant is temporarily unavailable

The confirm switch is:
- Triggered by Home Assistant
- Automatically reset by the Shelly device

---

## 🧠 Why a Shelly fallback script?

Home Assistant is very reliable, but in rare cases (restart, network issues)
a detached input may not immediately trigger an automation.

The fallback script ensures:
- A short confirmation pulse is always generated locally on the Shelly
- The input still feels responsive even if HA is unavailable

Home Assistant and the Shelly script work **together**, not against each other.

---

## 🧩 Shelly Configuration (Gen3 & Gen4)

### 1️⃣ Configure the input
- Set input mode to **Detached**
- Disable any internal switching behavior

### 2️⃣ Configure the confirm output
- Choose an unused switch output
- Set it to **momentary** or allow the script to reset it
- This output will be used as the "confirm switch" in Home Assistant

### 3️⃣ Add the fallback script
1. Open the Shelly web interface
2. Go to **Scripts**
3. Add a new script
4. Paste the contents of  
   `shelly/confirm_fallback_gen3_gen4.js`
5. Adjust:
   ```js
   CONFIRM_SWITCH_ID = 0

ℹ️ **Note**
The fallback script does not depend on switch or button mode.
It only reacts to physical input events and can be used unchanged
for both configurations.