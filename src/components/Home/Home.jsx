import { NavLink, useLoaderData } from "react-router-dom";
import Benner from "../Benner/Benner";
import ServiceCard from "../ServiceCard/ServiceCard";
import Feedback from "../FeedBack/Feedback";

const Home = () => {
  const {services,feedBack} = useLoaderData();
  
  return (
    <div>
      <Benner></Benner>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {services.slice(0,4).map((service) => 
          <ServiceCard service={service} key={service.id}></ServiceCard>
        )}
      </div>
      <div className="w-10/12 mx-auto flex justify-start pb-8">
      <NavLink to="/allTreatment" className="btn bg-blue-950 text-white">Show More</NavLink>
      </div>

      <div>
        <Feedback feedBack={feedBack}></Feedback>
      </div>
    </div>
  );
};

export default Home;
