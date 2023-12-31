const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlStarWars: "https://www.swapi.tech/api",

			people: [],
			characterDetails: [],
			
			planets: [],
			planetsDetails: [],

			vehicles: [],
			vehiclesDetails: [],


			favoriteItems:[

			],

			//llamar las funciones en el use effect 

		},

		actions: {
			//Funcion para traer los personajes
			getPeople: () => {
				const store = getStore() //Traer el store y hacer el uso de variables
				fetch(`${store.urlStarWars}/people`)
					.then(response => response.json())
					.then(data => {
						setStore({ people: data.results }) //acceder a la data
					})
					.catch(error => console(error + "Error in getPeople()"));
			},

			getPeopleById: id => {
				const store = getStore();
				fetch(`${store.urlStarWars}/people/${id}`)
					.then(response => response.json())
					.then(data => {
						setStore({characterDetails: data.result})
						console.log(store.characterDetails);
					})
					.catch(error => console(error + "Error in getPeopleById()"));
			},

			getPlanets: () => {
				const store = getStore() //Traer el store y hacer el uso de variables
				fetch(`${store.urlStarWars}/planets`)
					.then(response => response.json())
					.then(data => {
						setStore({ planets: data.results }) //acceder a la data
					})
					.catch(error => console(error + "Error in getPlanets()"));
			},

			getPlanetsById: id => {
				const store = getStore();
				fetch(`${store.urlStarWars}/planets/${id}`)
					.then(response => response.json())
					.then(data => {
						setStore({planetsDetails: data.result})
						console.log(store.planetsDetails);
					})
					.catch(error => console(error + "Error in getPlanetsById()"));
			},
			getVehicles: () => {
				const store = getStore() //Traer el store y hacer el uso de variables
				fetch(`${store.urlStarWars}/vehicles`)
					.then(response => response.json())
					.then(data => {
						setStore({ vehicles: data.results }) //acceder a la data
					})
					.catch(error => console(error + "Error in getVehicles()"));
			},

			getVehiclesById: id => {
				const store = getStore();
				fetch(`${store.urlStarWars}/vehicles/${id}`)
					.then(response => response.json())
					.then(data => {
						setStore({vehiclesDetails: data.result})
						console.log(store.vehiclesDetails);
					})
					.catch(error => console(error + "Error in getVehiclesById()"));
			},

			addFavoriteItems : (newItem)=>{
				const store = getStore();
				setStore({favoriteItems: [newItem, ...store.favoriteItems]})
				localStorage.setItem("favoriteItems", JSON.stringify(store.favoriteItems));
			},
			deleteFavoriteItems : (position)=>{
                const store = getStore();
				let newFavoriteList = store.favoriteItems.filter((favorite, index)=> index != position )
				setStore({favoriteItems: newFavoriteList})

			},
		}
	}
};

export default getState;

// const getPeopleByID = id => {
				// 	setStore({ idCharacter: null });
				// 	setStore({ uidCharacter: null });
				// 	const store = getStore();

				// 	fetch(`${store.urlApi}/people/${id}`)
				// 	  .then(response => response.json())
				// 	  .then(data => {
				// 		console.log(data);
				// 		setStore({ idCharacter: data.result.properties });
				// 		setStore({ uidCharacter: id });
				// 	  })
				// 	  .catch(error => console.log(error + " Error in getPeopleByID()"));
				//   };