# @ubus/mqtt-mock

Mock MQTT package for local development. This package simulates real-time bus location data without requiring an actual MQTT connection.

## Features

- 🚌 Simulates 5 buses moving along predefined routes
- 📍 Generates realistic latitude/longitude coordinates
- 🔄 Updates data every second like real MQTT messages
- ⚡ **Gradual speed changes** - realistic acceleration/deceleration (2 km/h per second)
- 🚦 **Smart waypoint behavior** - buses slow down at stops and accelerate away
- 🎯 Same API as the real `@ubus/mqtt` package
- 💾 Uses the same Zustand store for state management
- 🛣️ Multiple routes (Airport & Rajbari-Gazipur)

## How It Works

The mock package generates fake bus data by:
1. Using predefined route coordinates (Airport & Rajbari routes)
2. Interpolating between waypoints for smooth movement
3. **Gradually changing speed** with 2 km/h per second acceleration/deceleration
4. Slowing down when approaching waypoints and accelerating when leaving
5. Random speed variations to simulate traffic conditions
6. Updating the store every second via `setInterval` instead of MQTT messages

## Usage

The mock package is automatically configured in the Next.js app via TypeScript path mapping. All existing code using `@ubus/mqtt` will automatically use the mock version during development.

### Switching Between Real and Mock MQTT

**To use the MOCK version (for development):**

In `apps/next/tsconfig.json`:
```json
{
  "compilerOptions": {
    "paths": {
      "@ubus/mqtt": ["../../packages/mqtt-mock/src"]
    }
  }
}
```

**To use the REAL version (for production):**

In `apps/next/tsconfig.json`:
```json
{
  "compilerOptions": {
    "paths": {
      "@ubus/mqtt": ["../../packages/mqtt/src"]
    }
  }
}
```

Or simply remove the path mapping to use the real package.

## API Compatibility

This package exports the same API as `@ubus/mqtt`:

- `useBusLocationsQuery()` - React Query hook for bus locations
- `MqttProvider` - React context provider
- `mqttClient` - Mock client object
- `getBusLocationTopic()` - Topic generator (mock)
- `BusData` - TypeScript type
- `useMqttStore` - Zustand store

## Mock Data Characteristics

- **Bus Count**: 5 buses (configurable in `@ubus/configs`)
- **Routes**: 
  - Route 1 (Airport): Buses 1, 3, 5 - Campus → Jashimuddin
  - Route 2 (Rajbari): Buses 2, 4 - Campus → TNT
- **Update Frequency**: 1 second
- **Speed Range**: 15-60 km/h (varies by bus with realistic fluctuation)
- **Movement**: Smooth interpolation between waypoints
- **Heading**: Calculated based on direction of travel
- **Staggered Start**: Each bus starts at a different position with time offsets for realistic distribution

## Development

```bash
# Build
pnpm build

# Type check
pnpm typecheck

# Lint
pnpm lint
```

## Notes

- This package does NOT include the actual `mqtt` library dependency
- No environment variables needed for MQTT connection
- Perfect for development when MQTT broker is unavailable
- All data is generated client-side in the browser
