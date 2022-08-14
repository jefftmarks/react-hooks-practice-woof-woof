import React from "react";

function DogContainer({dog, handleUpdateDog}) {
	function onClickGoodDog() {
		fetch(`http://localhost:3001/pups/${dog.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({isGoodDog: !dog.isGoodDog}),
		})
			.then(res => res.json())
			.then(updatedDog => handleUpdateDog(updatedDog))
	}

	return (
		<div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
					<img src={dog.image} alt={dog.name} />
					<h2>{dog.name}</h2>
					<button onClick={onClickGoodDog}>
						{dog.isGoodDog ? "Good Dog!" : "Bad Dog!"}
					</button>	
				</div>
      </div>
	)
}

export default DogContainer;