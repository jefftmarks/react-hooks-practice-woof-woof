import React from "react"

function DogBar({dogs, handleSelectDog}) {
	function onClickDog(dog) {
		handleSelectDog(dog);
	}

	return (
		<div id="dog-bar">
			{dogs.map(dog => (
				<span
					onClick={() => onClickDog(dog)}
					key={dog.id}
				>
					{dog.name}
				</span>
			))}
		</div>
	)
}

export default DogBar;