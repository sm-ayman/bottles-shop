import { Suspense } from "react";
import "./App.css";
import Bottles from "./components/Bottles/Bottles";

const bottlesPromise = fetch("../public/bottles.json").then((res) =>
  res.json()
);

function App() {
  return (
    <>
      <h1>Awesome Water Bottles</h1>
      <Suspense fallback={<h3>Loading Bottles...</h3>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
