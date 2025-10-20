# Mock Bus Data Configuration

## Overview

The mock MQTT package now simulates **5 buses** running on **2 different routes** with realistic movement patterns!

## What Changed

### 1. Multiple Routes Added
- **Route 1 (Airport Route)**: Campus → Jashimuddin (8 waypoints)
- **Route 2 (Rajbari-Gazipur Route)**: Campus → TNT (8 waypoints)

### 2. Bus Distribution
- **Bus 1**: Route 1 (Airport) - starts at position 0
- **Bus 2**: Route 2 (Rajbari) - starts at position 1
- **Bus 3**: Route 1 (Airport) - starts at position 2
- **Bus 4**: Route 2 (Rajbari) - starts at position 3
- **Bus 5**: Route 1 (Airport) - starts at position 4

### 3. Realistic Movement Features

Each bus now has:
- **Different starting positions** on their route
- **Staggered time offsets** (2 seconds apart) so they don't move in sync
- **Varied speeds**: Base speed varies from 28-40 km/h depending on bus number
- **Different cycle times**: Buses take 9-14 seconds to move between waypoints
- **Speed fluctuation**: ±15 km/h variation to simulate traffic
- **Speed limits**: Capped between 0-60 km/h for realism

## Files Modified

1. **`packages/configs/src/index.ts`**
   - Enabled 5 buses (previously only 1)
   - Added names: "Bus 1 - Airport Route", etc.

2. **`packages/mqtt-mock/src/service.ts`**
   - Added `route01Coordinates` (Airport route)
   - Added `route02Coordinates` (Rajbari route)
   - Buses alternate between routes (odd = Route 1, even = Route 2)
   - Each bus starts at a different position
   - Staggered time offsets for realistic distribution
   - Varied speeds and cycle times per bus

3. **`packages/mqtt-mock/README.md`**
   - Updated documentation to reflect new features

## How It Works

```typescript
// Bus route assignment
Bus 1, 3, 5 → Route 1 (Airport)    // Odd bus IDs
Bus 2, 4    → Route 2 (Rajbari)    // Even bus IDs

// Starting positions (prevents clustering)
Bus 1 → Position 0
Bus 2 → Position 1
Bus 3 → Position 2
Bus 4 → Position 3
Bus 5 → Position 4

// Time offsets (prevents synchronized movement)
Bus 1 → 0ms offset
Bus 2 → 2000ms offset
Bus 3 → 4000ms offset
Bus 4 → 6000ms offset
Bus 5 → 8000ms offset

// Speed variation
Bus 1 → Base 28 km/h ± 15 km/h
Bus 2 → Base 31 km/h ± 15 km/h
Bus 3 → Base 34 km/h ± 15 km/h
Bus 4 → Base 37 km/h ± 15 km/h
Bus 5 → Base 40 km/h ± 15 km/h
```

## Adding More Buses

To add more buses, edit `packages/configs/src/index.ts`:

```typescript
export const buses: readonly Bus[] = [
  { id: "1", name: "Bus 1 - Airport Route" },
  { id: "2", name: "Bus 2 - Rajbari Route" },
  { id: "3", name: "Bus 3 - Airport Route" },
  { id: "4", name: "Bus 4 - Rajbari Route" },
  { id: "5", name: "Bus 5 - Airport Route" },
  { id: "6", name: "Bus 6 - Rajbari Route" },  // Add more here
  { id: "7", name: "Bus 7 - Airport Route" },
];
```

The mock system will automatically:
- Assign odd-numbered buses to Route 1
- Assign even-numbered buses to Route 2
- Distribute starting positions
- Apply appropriate time offsets
- Vary speeds based on bus number

## Testing

Start the development server:
```bash
cd apps/next
pnpm dev
```

You should now see:
- 5 buses moving on the map
- 3 buses on Airport route
- 2 buses on Rajbari route
- Each moving at different speeds
- Realistic distribution (not clustered)

Enjoy your realistic bus simulation! 🚌🚌🚌🚌🚌
