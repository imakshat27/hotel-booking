'use client';
import { useState } from 'react';

function Selector() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const incrementAdults = () => setAdults(adults + 1);
  const decrementAdults = () => adults > 1 && setAdults(adults - 1);
  const incrementChildren = () => setChildren(children + 1);
  const decrementChildren = () => children > 0 && setChildren(children - 1);
  const incrementRooms = () => setRooms(rooms + 1);
  const decrementRooms = () => rooms > 1 && setRooms(rooms - 1);

  return (
    <>
      <div className="mx-10 p-10 bg-muted rounded-xl w-full max-w-lg">
        <div>
          <h1>Hotel Search</h1>
          <div className="mt-4 space-y-4">
            <div>
              <label className="block mb-1">Destination</label>
              <input
                type="text"
                placeholder="Enter city or hotel name"
                className="w-full p-2 border border-border rounded-lg"
              />
            </div>
            <div>
              <label className="block mb-1">Check-in Date</label>
              <input
                type="date"
                className="w-full p-2 border border-border rounded-lg"
              />
            </div>
            <div>
              <label className="block mb-1">Check-out Date</label>
              <input
                type="date"
                className="w-full p-2 border border-border rounded-lg"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="block">Rooms</label>
                <div className="flex items-center gap-2">
                  <button
                    onClick={decrementRooms}
                    className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300"
                  >
                  -
                  </button>
                  <span className="w-8 text-center">{rooms}</span>
                  <button
                    onClick={incrementRooms}
                    className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className="block">Adults</label>
                <div className="flex items-center gap-2">
                  <button
                    onClick={decrementAdults}
                    className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300"
                  >
                  -
                  </button>
                  <span className="w-8 text-center">{adults}</span>
                  <button
                    onClick={incrementAdults}
                    className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className="block">Children</label>
                <div className="flex items-center gap-2">
                  <button
                    onClick={decrementChildren}
                    className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300"
                  >
                  -
                  </button>
                  <span className="w-8 text-center">{children}</span>
                  <button
                    onClick={incrementChildren}
                    className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <button className="w-full mt-4 p-2 bg-primary text-primary-foreground rounded">
              Search Hotels
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Selector;