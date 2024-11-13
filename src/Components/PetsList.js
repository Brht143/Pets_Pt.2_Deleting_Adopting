import pets from "../petsData";
import PetItem from "./PetItem";
import { useState } from "react";
import Search from "./Search";

function PetsList() {
  const [type, setType] = useState("");
  const [query, setQuery] = useState("");
  const [available, setAvailable] = useState(pets);

  const adoptPet = (petID) => setAvailable(available.filter( pet => pet.id !== petID))
  const ListFiltered = available.filter(pet => pet.name.toLowerCase().includes(query));
  const TypeFiltered = (type) ? ListFiltered.filter(pet => pet.type === type) : ListFiltered;
  const petsList = TypeFiltered.map((pet) => <PetItem pet={pet} key={pet.id} handleAdopt={adoptPet} />)

  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <Search handleOnClick={setQuery}/>
              <br />
              Type:
              <select className="form-select" onChange={(event) => setType(event.target.value)}>
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{petsList}</div>
      </div>
    </section>
  );
}

export default PetsList;
