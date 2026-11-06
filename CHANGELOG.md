# Changelog – Home Assistant Blueprints by willumpie82

All notable changes to the blueprints in this repository will be documented in this file.

---

## [Unreleased]
### Added
- **Panic Button** blueprints with actionable Companion app notification, alert type (critical / time-sensitive / active / passive) and two configurable responses with their own actions: `panic_button_z2m.yaml` (Zigbee2MQTT, for the Sonoff SNZB-01P) and `panic_button_zha.yaml` (ZHA, commands prefilled for the SNZB-01P).

---

## [1.0.0] – 2025-10-02
### Added
- Initial release of the **Z-Wave.me WALLC-S (4-button wall switch)** blueprint.
- Supports two modes per button set:
  - **Lamp Mode**: top = on, bottom = off, hold = dim up/down, release = stop dimming.
  - **Custom Mode**: user-defined single, double, hold, and release actions.
- Full button mapping included.
- Compatible with **Z-Wave JS** integration in Home Assistant.
- README.md included with import instructions and usage guide.

### Notes
- This is the first public version of the WALLC-S blueprint.
- License: MIT