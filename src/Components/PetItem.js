import { useState } from "react";

function PetItem({ pet, handleAdopt }) {

  const [image, setImage] = useState(pet.image);

  const onClickHandle = () => handleAdopt(pet.id)

  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={image} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button type="button" className="btn btn-info" onClick={() => (image === pet.image) ? setImage(pet.image2) : setImage(pet.image)}>
            Pet
          </button>
          <button type="button" class="btn btn-info  m-2" onClick={onClickHandle}>
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
