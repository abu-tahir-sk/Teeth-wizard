import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";


const AllTreatment = () => {
      const  services = useLoaderData()
      return (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-10/12 mx-auto py-6">
        {services.map((service) => 
          <ServiceCard service={service} key={service.id}></ServiceCard>
        )}
     
      </div>
      );
};

export default AllTreatment;