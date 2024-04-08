interface Person {
  fullName: string;
  age: number;
  address: Address;
  isAlive?: boolean;
}

interface Address {
  country: string;
  houseNo: number;
}


const ObjectLiterals = () => {

  const person: Person = {
    fullName: 'Christian',
    age: 37,
    address: {
country: 'Guatemala',
      houseNo: 615
    }
  }




  return (
    <>
      <h3>Objetos Literales</h3>
      <pre>
      {JSON.stringify(person)}
      </pre>
    </>
  )
}

export default ObjectLiterals