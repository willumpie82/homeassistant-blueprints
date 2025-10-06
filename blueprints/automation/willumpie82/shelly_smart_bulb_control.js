// Shelly 1 Mini Gen4 script
// Input: detached push button (input:0)
// Relay: switch:0
// Virtual boolean: id=200 ("Confirm")
// Select input-type "single_push" for momentary button or "toggle" for switch

let SW_INPUT   = 0;
let SW_OUTPUT  = 0;
let CONFIRMED_ID = 200;
let TIMEOUT_MS = 1000;
//let EVENTTYPE = "single_push";
let EVENTTYPE = "toggle";


// Get handle for the virtual boolean
let confirmed = Virtual.getHandle("boolean:" + CONFIRMED_ID);

Shelly.addEventHandler(function(ev) {

  if (ev.component === "input:" + SW_INPUT) {
    console.log("input triggered: " + ev.info.event);
    if (ev.info.event === EVENTTYPE) {
      handleSinglePush();
    }
  }
});

function handleSinglePush() {
  confirmed.setValue(false);
  console.log("handler-fired");
  // Get relay status synchronously
  let swStatus = Shelly.getComponentStatus("switch:" + SW_OUTPUT);
  let relayIsOn = !!swStatus.output;

  if (!relayIsOn) {
    // If relay is OFF -> turn it ON
    Shelly.call("Switch.Set", { id: SW_OUTPUT, on: true });
    console.log("turn-off");
    return;
  }

  Timer.set(TIMEOUT_MS, false, function() {
    if (!confirmed.getValue()) {
      // Not confirmed -> turn relay OFF
      Shelly.call("Switch.Set", { id: SW_OUTPUT, on: false });
      console.log("fallback activated")
    }
    confirmed.setValue(false);
  });
}