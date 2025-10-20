"use client";

import type { UseQueryResult } from "@tanstack/react-query";
import { useQueries } from "@tanstack/react-query";
import { useEffect } from "react";

import type { Bus } from "@ubus/configs";
import { buses } from "@ubus/configs";
import type { BusData } from "@ubus/stores/mqtt-store";
import { useMqttStore } from "@ubus/stores/mqtt-store";

// Mock route coordinates for different bus routes
const route01Coordinates = [
    { lat: 23.887865517819904, lng: 90.38965845192575 }, // Campus
    { lat: 23.87973070789998, lng: 90.39244422841688 }, // Sluice Gate Rd
    { lat: 23.879665735193726, lng: 90.40134291781709 }, // Abdullahpur
    { lat: 23.877697778250536, lng: 90.40129810479999 }, // Abdullahpur Bus Stopage
    { lat: 23.874657998329567, lng: 90.40070199378476 }, // House Building
    { lat: 23.867925369035405, lng: 90.40046959219086 }, // Azampur
    { lat: 23.864432806675126, lng: 90.40019824056725 }, // Rajlakshmi
    { lat: 23.86085978535195, lng: 90.40038197278926 }, // Jashimuddin
];

const route02Coordinates = [
    { lat: 23.88786836338872, lng: 90.38965949509083 }, // Campus
    { lat: 23.892693181994133, lng: 90.40188046163024 }, // Station Road
    { lat: 23.908558370388562, lng: 90.39791662656535 }, // College Gate
    { lat: 23.921170227116633, lng: 90.3923622949954 }, // Gazipura
    { lat: 23.93458604805771, lng: 90.3868203788033 }, // Boro Bari
    { lat: 23.944639798126303, lng: 90.38274333706374 }, // Board Bazar
    { lat: 23.989245104503226, lng: 90.38169431196036 }, // Chowrasta
    { lat: 23.991630991276722, lng: 90.39486724829868 }, // TNT
];

// Assign routes to buses (alternate between routes)
const busRoutes = new Map<string, typeof route01Coordinates>();

// State to track current position for each bus
const busPositions = new Map<string, number>();

// State to track time offset for each bus (for varied movement)
const busTimeOffsets = new Map<string, number>();

// State to track current speed for each bus (for gradual acceleration/deceleration)
const busCurrentSpeeds = new Map<string, number>();

// State to track target speed for each bus
const busTargetSpeeds = new Map<string, number>();

// State to track last update time for speed calculations
const busLastUpdateTime = new Map<string, number>();

function generateMockBusData(busId: string): BusData {
    // Initialize route for this bus if not exists (alternate between routes)
    if (!busRoutes.has(busId)) {
        const busNumber = parseInt(busId) || 1;
        busRoutes.set(busId, busNumber % 2 === 0 ? route02Coordinates : route01Coordinates);
    }

    // Initialize position if not exists
    if (!busPositions.has(busId)) {
        // Start buses at different positions along their route
        const busNumber = parseInt(busId) || 1;
        const route = busRoutes.get(busId)!;
        busPositions.set(busId, (busNumber - 1) % route.length);
    }

    // Initialize time offset if not exists (to make buses move at different times)
    if (!busTimeOffsets.has(busId)) {
        const busNumber = parseInt(busId) || 1;
        busTimeOffsets.set(busId, busNumber * 2000); // 2 second offset per bus
    }

    const route = busRoutes.get(busId)!;
    const currentIndex = busPositions.get(busId)!;
    const nextIndex = (currentIndex + 1) % route.length;
    const timeOffset = busTimeOffsets.get(busId)!;

    // Get current and next coordinate
    const current = route[currentIndex]!;
    const next = route[nextIndex]!;

    // Interpolate between points for smoother movement
    // Different cycle times for different buses
    const busNumber = parseInt(busId) || 1;
    const cycleTime = 8000 + (busNumber * 1000); // 8-15 second cycles depending on bus
    const progress = ((Date.now() + timeOffset) % cycleTime) / cycleTime;

    const lat = current.lat + (next.lat - current.lat) * progress;
    const lng = current.lng + (next.lng - current.lng) * progress;

    // Calculate heading based on direction
    const heading = Math.atan2(next.lng - current.lng, next.lat - current.lat) * (180 / Math.PI);

    // Gradual speed changes with small incremental steps
    const now = Date.now();

    // Initialize current speed if not exists
    if (!busCurrentSpeeds.has(busId)) {
        busCurrentSpeeds.set(busId, 0); // Start from 0
    }

    // Initialize target speed if not exists
    if (!busTargetSpeeds.has(busId)) {
        const baseSpeed = 25 + (busNumber * 3);
        busTargetSpeeds.set(busId, baseSpeed);
    }

    // Initialize last update time
    if (!busLastUpdateTime.has(busId)) {
        busLastUpdateTime.set(busId, now);
    }

    const currentSpeed = busCurrentSpeeds.get(busId)!;
    const targetSpeed = busTargetSpeeds.get(busId)!;
    const lastUpdate = busLastUpdateTime.get(busId)!;
    const timeDelta = (now - lastUpdate) / 1000; // Convert to seconds

    // Acceleration/deceleration parameters
    const acceleration = 2; // km/h per second (gradual acceleration)
    const maxSpeedChange = acceleration * timeDelta;

    // Calculate new speed with gradual change
    let newSpeed = currentSpeed;
    if (Math.abs(targetSpeed - currentSpeed) > 0.5) {
        if (currentSpeed < targetSpeed) {
            // Accelerate gradually
            newSpeed = Math.min(currentSpeed + maxSpeedChange, targetSpeed);
        } else {
            // Decelerate gradually
            newSpeed = Math.max(currentSpeed - maxSpeedChange, targetSpeed);
        }
    }

    // Update current speed
    busCurrentSpeeds.set(busId, newSpeed);
    busLastUpdateTime.set(busId, now);

    // Randomly change target speed occasionally (every 5-10 seconds)
    if (Math.random() < 0.02) { // ~2% chance per update (every ~50 seconds on average)
        const baseSpeed = 25 + (busNumber * 3);
        const minSpeed = Math.max(10, baseSpeed - 15);
        const maxSpeed = Math.min(60, baseSpeed + 15);
        const newTargetSpeed = minSpeed + Math.random() * (maxSpeed - minSpeed);
        busTargetSpeeds.set(busId, newTargetSpeed);
    }

    // Decelerate when approaching a waypoint (last 20% of segment)
    if (progress > 0.8) {
        const decelerationFactor = 1 - ((progress - 0.8) / 0.2); // 1.0 to 0.0
        const slowSpeed = newSpeed * Math.max(0.3, decelerationFactor); // Minimum 30% of current speed
        newSpeed = slowSpeed;
    }

    // Accelerate when leaving a waypoint (first 20% of segment)
    if (progress < 0.2) {
        const accelerationFactor = progress / 0.2; // 0.0 to 1.0
        const slowSpeed = newSpeed * Math.max(0.3, accelerationFactor); // Start from 30% speed
        newSpeed = slowSpeed;
    }

    const speed = Math.max(0, Math.min(60, newSpeed)); // Cap between 0-60 km/h

    // Update position when we complete a segment
    if (progress > 0.95) {
        busPositions.set(busId, nextIndex);
    }

    return {
        bus_id: busId,
        latitude: lat,
        longitude: lng,
        timestamp: new Date().toISOString(),
        speed: speed, // Already capped between 0-60 km/h
        heading: (heading + 360) % 360,
    };
}

export const useBusLocationsQuery = (): UseQueryResult<BusData>[] => {
    const setData = useMqttStore.getState().setData;

    useEffect(() => {
        // Simulate MQTT messages by updating store every second
        const interval = setInterval(() => {
            buses.forEach((bus: Bus) => {
                const mockData = generateMockBusData(bus.id);
                setData(mockData);
            });
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [setData]);

    return useQueries({
        queries: buses.map((bus: Bus) => ({
            queryKey: [`bus-location-${bus.id}`],
            queryFn: () => {
                const storeData = useMqttStore.getState().data;

                const currentData = storeData.find(
                    (busData): busData is BusData => busData.bus_id === bus.id,
                );

                // Return mock data if no data in store yet
                return currentData ?? generateMockBusData(bus.id);
            },
            refetchInterval: 1000,
            staleTime: 5000,
            retry: 1,
            retryDelay: 1000,
        })),
    });
};
