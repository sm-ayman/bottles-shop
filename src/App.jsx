import { Suspense } from "react";
import "./App.css";
import Bottles from "./components/Bottles/Bottles";

const bottlesPromise = fetch("/bottles.json").then((res) => res.json());

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 md:px-4">
      {/* Main Heading */}
      <p className="md:text-3xl font-bold text-center text-blue-700 mb-10">
        Awesome Water Bottles
      </p>

      {/* Bottles Section */}
      <Suspense
        fallback={
          <h3 className="text-center text-gray-500 md:text-lg animate-pulse">
            Loading Bottles...
          </h3>
        }
      >
        <div className="max-w-7xl mx-auto">
          <Bottles bottlesPromise={bottlesPromise} />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
