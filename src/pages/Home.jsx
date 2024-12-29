import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../base/counterSlice";

function Home() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleDec() {
    dispatch(decrement(1));
  }

  function handleInc() {
    dispatch(increment(1));
  }

  return (
    <div className="w-[500px] mx-auto text-center bg-black text-white rounded-md p-5">
      <h1 className="text-xl font-medium mb-5">
        Salom, bu mening Home sahifam!
      </h1>
      <p>Bu yerda siz o'zingizning sahifangizni yaratishingiz mumkin.</p>
      <div>
        <h2 className="text-2xl font-bold mb-4">{counter}</h2>
        <button
          onClick={handleDec}
          className="bg-red-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-red-600"
        >
          -
        </button>
        <button
          onClick={handleInc}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Home;
