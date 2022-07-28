import { Fragment } from "react";
import { useQuery } from "react-query";
import { getDoctors } from "../../lib/getDoctors";
import CircleLoader from "../Loaders/CircleLoader";
import DoctorCard from "./DoctorCard";
import DoctorHero from "./DoctorHero";

const DoctorsList = () => {

const {data:doctors, isLoading, isError} = useQuery("doctors", getDoctors, {
  refetchOnWindowFocus: false,
  refetchOnMount: false,
})

  return (<section>
             {isLoading ? <CircleLoader /> : doctors ? (
              <Fragment>
                <DoctorHero />
                <div className="max-w-7xl mx-auto mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                {doctors.map((doctor) => <DoctorCard doctor={doctor} />)}
                </div>
              </Fragment>
             ) : isError && <div className="max-w-7xl mx-auto py-12 flex h-screen justify-center items-center"><h1 className="text-5xl font-bold">There was an error fetching the doctors, try again later.</h1></div>}
          </section>)
};
export default DoctorsList;
