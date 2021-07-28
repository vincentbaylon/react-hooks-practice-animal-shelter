- APP (onChangeType // to Filters) (onFindPetsClick // to Filters)
    (pets // to PetBrowser) (onAdoptPet(id) // to PetBrowser)

    - Filters (onChangeType // from APP) (onFindPetsClick // to Filters)
        [x] onChangeType // updates APP's filters.type state
        [x] onFindPetsClick // APP should fetch a list of pets using fetch('http://localhost:3001/pets')
            [x] Use optional query parameter
                [x] Use APP's state.filters to control/update this parameter
                    - If the type is 'all', send a request to /pets
                    - If the type is 'cat', send a request to /pets?type=cat
                    - If the type is 'dog', send a request to /pets?type=dog
                    - If the type is 'micropig', send a request to /pets?type=micropig
            [x] Set APP's pets state with results of fetch request, and pass data to PetBrowser

    - PetBrowser (pets // from APP) (onAdoptPet(id) // from APP) 
        [x] onAdoptPet // take in id for a pet, find matching pet in pets array in APP and set isAdopted to true

    - Pet (pet // ) (onAdoptPet // )
        [x] pet // render pet card show:
            - name
            - type
            - age
            - weight
            - gender (male = ♂ or female = ♀)
        [x] isAdopted property // if true show disabled button otherwise show primary to adopt the pet
        [x] onAdoptPet // call with pet's id when user clicks the adopt the pet button - not when they click the disabled button