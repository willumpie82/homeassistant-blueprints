# Shelly Relay Setup for Home Assistant

This guide explains how to integrate and automate your Shelly relay device with Home Assistant.

---

## 🛠️ Requirements

- A Shelly relay device (e.g., Shelly 1, Shelly 1 Mini Gen3 or Gen4)
- Home Assistant running and accessible
- Shelly device configured in Home assisant

---

## 🔌 Step 2: Configure the Shelly Device

1. Access the Shelly web interface (usually at `http://<device-ip>`).
2. Set the input to **detached mode**.
3. Within the compontents page create a new bolean component 'confirm'
4. With scripts, create a new script and insert the content of shelly_smart_bulb_control.js, save and 'start' the script. make sure the script is started at start-up

