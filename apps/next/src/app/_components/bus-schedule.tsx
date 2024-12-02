import React from 'react';

export const BusSchedule: React.FC = () => {
  const stations = Array(10).fill({
    station: "Malibagh Railgate",
    time: "06:40 AM",
    bus: "BUS 3, 29",
  });

  return (
    <div className='p-4'>
      <h2 className="text-xl font-bold mb-4">Bus Schedule</h2>
      <div className="space-y-4">
        {stations.map((item, index) => (
          <div
            key={index}
            className="bg-surface-container text-on-surface p-4 rounded flex justify-between text-sm"
          >
            <div>Station: {item.station}</div>
            <div>Time: {item.time}</div>
            <div>Bus: {item.bus}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
