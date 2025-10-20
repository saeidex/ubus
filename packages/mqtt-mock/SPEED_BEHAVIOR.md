# Gradual Speed Changes - Mock Bus Data

## Overview

The mock buses now feature **realistic gradual speed changes** with small incremental steps, simulating real-world acceleration and deceleration patterns!

## Key Features

### 🚗 Gradual Acceleration/Deceleration
- **Acceleration Rate**: 2 km/h per second
- **Smooth transitions**: Speed changes happen gradually over time, not instantly
- **No sudden jumps**: Speed increases/decreases in small steps every update

### 🚦 Waypoint Behavior

**Approaching a Waypoint (Last 20% of segment)**:
- Bus gradually **decelerates** as it approaches the waypoint
- Slows down to 30% of current speed
- Simulates buses slowing down for stops

**Leaving a Waypoint (First 20% of segment)**:
- Bus gradually **accelerates** from the waypoint
- Starts at 30% speed and increases
- Simulates buses pulling away from stops

### 🎯 Speed Variation

Each bus maintains:
- **Current Speed**: The actual speed at this moment
- **Target Speed**: The speed it's trying to reach
- **Base Speed**: 25-40 km/h depending on bus number

Target speed randomly changes occasionally:
- ~2% chance per update (~every 50 seconds)
- Varies within ±15 km/h of base speed
- Creates realistic traffic-like speed variations

## Example Speed Pattern

```
Time    | Speed | Behavior
--------|-------|----------------------------------
0:00    | 0     | Starting from stop
0:01    | 2     | Gradually accelerating (+2 km/h)
0:02    | 4     | Gradually accelerating (+2 km/h)
0:03    | 6     | Gradually accelerating (+2 km/h)
...     | ...   | ...
0:15    | 30    | Reached target speed (30 km/h)
0:20    | 30    | Cruising at constant speed
0:22    | 35    | New target: 35 km/h
0:23    | 37    | Gradually accelerating (+2 km/h)
0:24    | 39    | Gradually accelerating (+2 km/h)
0:25    | 35    | Reached new target speed
...     | ...   | ...
0:45    | 28    | Approaching waypoint, decelerating
0:46    | 21    | Decelerating further
0:47    | 14    | Slowing to stop
0:48    | 8     | Almost stopped
0:49    | 0     | Stopped at waypoint
0:50    | 3     | Starting acceleration from stop
...     | ...   | Cycle repeats
```

## Technical Implementation

### State Tracking
```typescript
busCurrentSpeeds    // Current speed of each bus
busTargetSpeeds     // Target speed each bus is aiming for
busLastUpdateTime   // Last time speed was updated (for time-based calculations)
```

### Acceleration Logic
```typescript
const acceleration = 2; // km/h per second
const timeDelta = (now - lastUpdate) / 1000;
const maxSpeedChange = acceleration * timeDelta;

// Gradual speed change
if (currentSpeed < targetSpeed) {
    newSpeed = Math.min(currentSpeed + maxSpeedChange, targetSpeed);
} else {
    newSpeed = Math.max(currentSpeed - maxSpeedChange, targetSpeed);
}
```

### Waypoint Behavior
```typescript
// Decelerate when approaching waypoint (last 20%)
if (progress > 0.8) {
    const decelerationFactor = 1 - ((progress - 0.8) / 0.2);
    newSpeed = newSpeed * Math.max(0.3, decelerationFactor);
}

// Accelerate when leaving waypoint (first 20%)
if (progress < 0.2) {
    const accelerationFactor = progress / 0.2;
    newSpeed = newSpeed * Math.max(0.3, accelerationFactor);
}
```

## Benefits

✅ **More Realistic**: Mimics real vehicle behavior
✅ **Smoother Animation**: No jerky speed changes
✅ **Better UX**: Users see natural bus movement
✅ **Traffic Simulation**: Random speed variations simulate real traffic
✅ **Stop Behavior**: Buses slow down and speed up at stops

## Customization

You can adjust these parameters in `service.ts`:

```typescript
// Acceleration rate (km/h per second)
const acceleration = 2; // Increase for faster acceleration

// Random target speed change probability
if (Math.random() < 0.02) // Adjust 0.02 for more/less frequency

// Waypoint deceleration zone
if (progress > 0.8) // Adjust 0.8 to change when deceleration starts

// Minimum speed at waypoints
Math.max(0.3, decelerationFactor) // Adjust 0.3 (30% minimum speed)
```

## Testing

Watch the buses in action:
```bash
cd apps/next
pnpm dev
```

Observe:
- Smooth speed increases from stops
- Gradual deceleration when approaching stops
- Natural speed variations during cruising
- No sudden speed jumps

Enjoy the realistic bus movement! 🚌💨
