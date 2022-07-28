import doctors from "../../pages/doctors";
import { IDoctorType } from "../../types";

const DoctorCard = ({doctor}: {doctor: IDoctorType}) => {



  return <div className="max-w-xl p-4 mt-4 bg-slate-100 shadow-md rounded-lg overflow-hidden">
     <h2 className="text-lg md:text-2xl font-medium">{doctor.specialization}</h2>
     <p className="text-md">Address: {doctor.address}</p>
     <p className="text-md">Phone Number: {doctor.phone_number}</p>
  </div>;
};
export default DoctorCard;
