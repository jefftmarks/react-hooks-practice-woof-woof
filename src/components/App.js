import React, { useEffect, useState } from "react";
import DogBar from "./DogBar";
import DogContainer from "./DogContainer";

function App() {
  const [dogs, setDogs] = useState([])
  const [activeDog, setActiveDog] = useState(null);
  const [filterIsOn, setFilterIsOn] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then(res => res.json())
      .then(dogData => setDogs(dogData));
  }, [])

  function handleSelectDog(dog) {
    setActiveDog(dog);
  }

  function handleUpdateDog(updatedDog) {
    setDogs(dogs.map(dog => {
      if (dog.id === updatedDog.id) {
        return updatedDog;
      } else {
        return dog;
      }
    }))
    setActiveDog(updatedDog);
  }

  const filteredDogs = dogs.filter(dog => {
    if (filterIsOn) {
      return dog.isGoodDog;
    } else {
      return dog;
    }
  })

  return (
    <div className="App">
      <div id="filter-div">
        <button onClick={() => setFilterIsOn(!filterIsOn)}id="good-dog-filter">
          {filterIsOn ? "Filter good dogs: OFF" : "Filter good dogs: ON"}
        </button>
      </div>
      <DogBar dogs={filteredDogs} handleSelectDog={handleSelectDog}/>
      {activeDog ? <DogContainer
        dog={activeDog}
        handleUpdateDog={handleUpdateDog}
      /> : null}
    </div>
  );
}

export default App;
