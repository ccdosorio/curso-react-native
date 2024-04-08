const BasicTypes = () => {
  
  const name = 'Christian';
  const powers = ['React', 'ReactNative', 'Angular', 'Vue']

  return (
    <>
      <h3>Tipos basicos</h3>
      {name}

      <br />
      {powers.join(', ')}
    </>
  )
}

export default BasicTypes