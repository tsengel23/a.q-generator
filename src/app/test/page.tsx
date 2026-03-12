// "use client";
// /* eslint-disable react-hooks/exhaustive-deps */
// import { useState, useRef } from "react";

// export default function CompareExample() {
//   // useState - Render хийнэ
//   const [stateCount, setStateCount] = useState(0);

//   // useRef - Render хийхгүй
//   const refCount = useRef(0);

//   console.log("🔄 Component RENDER боллоо!");

//   return (
//     <div className="p-8 space-y-8">
//       {/* useState хэсэг */}
//       <div className="border p-4 rounded bg-blue-50">
//         <h2 className="text-xl font-bold text-blue-600">useState</h2>
//         <p className="text-2xl">Count: {stateCount}</p>
//         <button
//           onClick={() => setStateCount(stateCount + 1)}
//           className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
//         >
//           +1 нэмэх (useState)
//         </button>
//       </div>

//       {/* useRef хэсэг */}
//       <div className="border p-4 rounded bg-green-50">
//         <h2 className="text-xl font-bold text-green-600">useRef</h2>
//         <p className="text-2xl">Count: {refCount.current}</p>
//         <button
//           onClick={() => {
//             refCount.current = refCount.current + 1;
//             console.log("✅ refCount.current =", refCount.current);
//           }}
//           className="bg-green-500 text-white px-4 py-2 rounded mt-2"
//         >
//           +1 нэмэх (useRef)
//         </button>
//       </div>
//     </div>
//   );
// }
// // ```

// // ---

// // ### Алхам 2: Browser дээр нээх
// // ```
// // http://localhost:3000/test

"use client";

import { useRef, useState } from "react";

export default function RefExamples() {
  // ========== Жишээ 1: Input Focus ==========
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  // ========== Жишээ 2: Timer ==========
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) return; // Аль хэдийн ажиллаж байвал дахин эхлүүлэхгүй

    timerRef.current = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const resetTimer = () => {
    stopTimer();
    setSeconds(0);
  };

  return (
    <div className="p-8 space-y-12">
      {/* ========== Жишээ 1: Input Focus ========== */}
      <div className="border p-6 rounded bg-blue-50">
        <h2 className="text-xl font-bold text-blue-600 mb-4">
          Жишээ 1: Input руу Focus хийх
        </h2>
        <p className="text-gray-600 mb-4">
          Товч дарахад input автоматаар сонгогдоно
        </p>
        <div className="space-y-4">
          <input
            ref={inputRef}
            className="border p-3 rounded w-full"
            placeholder="Энд бичнэ..."
          />
          <button
            onClick={handleFocus}
            className="bg-blue-500 text-black px-6 py-2 rounded"
          >
            Input руу Focus хийх
          </button>
        </div>
      </div>

      {/* ========== Жишээ 2: Timer ========== */}
      <div className="border p-6 rounded bg-green-50">
        <h2 className="text-xl font-bold text-green-600 mb-4">
          Жишээ 2: Timer (Секунд тоолох)
        </h2>
        <p className="text-gray-600 mb-4">Timer ID-г useRef-д хадгална</p>
        <p className="text-6xl font-bold mb-6">{seconds}</p>
        <div className="space-x-3">
          <button
            onClick={startTimer}
            className="bg-green-500 text-black px-6 py-2 rounded"
          >
            ▶ Эхлүүлэх
          </button>
          <button
            onClick={stopTimer}
            className="bg-yellow-500 text-black px-6 py-2 rounded"
          >
            ⏸ Зогсоох
          </button>
          <button
            onClick={resetTimer}
            className="bg-red-500 text-black px-6 py-2 rounded"
          >
            ↺ Дахин эхлүүлэх
          </button>
        </div>
      </div>
    </div>
  );
}

//
//
