"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef } from "react";

export default function CompareExample() {
  // useState - Render хийнэ
  const [stateCount, setStateCount] = useState(0);

  // useRef - Render хийхгүй
  const refCount = useRef(0);

  console.log("🔄 Component RENDER боллоо!");

  return (
    <div className="p-8 space-y-8">
      {/* useState хэсэг */}
      <div className="border p-4 rounded bg-blue-50">
        <h2 className="text-xl font-bold text-blue-600">useState</h2>
        <p className="text-2xl">Count: {stateCount}</p>
        <button
          onClick={() => setStateCount(stateCount + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          +1 нэмэх (useState)
        </button>
      </div>

      {/* useRef хэсэг */}
      <div className="border p-4 rounded bg-green-50">
        <h2 className="text-xl font-bold text-green-600">useRef</h2>
        <p className="text-2xl">Count: {refCount.current}</p>
        <button
          onClick={() => {
            refCount.current = refCount.current + 1;
            console.log("✅ refCount.current =", refCount.current);
          }}
          className="bg-green-500 text-white px-4 py-2 rounded mt-2"
        >
          +1 нэмэх (useRef)
        </button>
      </div>
    </div>
  );
}
// ```

// ---

// ### Алхам 2: Browser дээр нээх
// ```
// http://localhost:3000/test
