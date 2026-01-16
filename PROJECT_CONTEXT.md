# Project Context – Shelly Detached Input Blueprint

## Goal
Create a Home Assistant blueprint for Shelly Gen3/Gen4 devices in detached input mode.

## Current version
v1.3 (not released yet)

## Key features
- Switch mode (binary_sensor)
- Button mode (event entity)
- Lamp mode and Custom mode
- Optional virtual confirm switch (Boolean component on Shelly)
- Optional fallback script running on Shelly

## Important constraints
- Blueprint input must be defined under `blueprint:` (legacy syntax)
- HA requires all trigger entities to be valid
- No defaults like empty string for entity selectors
- Filename in repo must stay stable

## Shelly specifics
- Confirm switch is a Boolean component:
  - name: confirm
  - view: toggle
- No physical relay involved
- Same fallback script for switch & button mode

## Roadmap
v1.4:
- Scene controller
- Advanced dimming behavior