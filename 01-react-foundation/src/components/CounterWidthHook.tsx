import { useCounter } from "../hooks/useCounter";

export const CounterWidthHook = () => {
  const { count, increaseBy } = useCounter({ initialValue: 15 });

  return (
    <>
      <h3>
        Contador Width Hook: <small>{count}</small>
        <div>
          <button onClick={() => increaseBy(+1)}>+1</button>
          &nbsp;
          <button onClick={() => increaseBy(-1)}>-1</button>
        </div>
      </h3>
    </>
  );
};
