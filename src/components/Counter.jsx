import React from "react";
import useCounter from "../hooks/useCounter";
import useFetch from "../hooks/useFetch";

const Counter = () => {
  const { increment, decrement, counter, reset } = useCounter();
  const { data } = useFetch(`https://jsonplaceholder.typicode.com/users`);
  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>+</button>
      <br />
      <button onClick={decrement}>-</button>
      <br />
      <button onClick={reset}>Reset</button>
      {data.map((user) => (
        <h3>{user.name}</h3>
      ))}
    </div>
  );
};

export default Counter;
