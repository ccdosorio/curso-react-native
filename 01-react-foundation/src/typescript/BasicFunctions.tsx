export const BasicFunctions = () => {
  const addTwoNumbers = (a: number, b: number) => a + b;

  return (
    <div>
      <h3>Funciones</h3>
      <span>El resultado de sumar: {addTwoNumbers(2, 8)}</span>
    </div>
  );
};
