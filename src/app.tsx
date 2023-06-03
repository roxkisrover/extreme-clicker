import { useState } from 'preact/hooks';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        class="block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
    </div>
  );
}
