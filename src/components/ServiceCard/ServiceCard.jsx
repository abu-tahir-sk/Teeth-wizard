import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
  const {cost,image,description,treatment,id} = service;
  return (
      
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-blue-950 font-bold" title={'this title'}>
         {treatment}
         <div className="badge badge-secondary ">${cost}</div>
        </h2>
        <p title={description}>{description.slice(0.50)}.......</p>
        <div className="card-actions justify-end">
          <Link className="badge badge-outline text-blue-950  border-none font-semibold p-4" to={`details/${id}`}>CheckOut More</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
