import Head from "next/head";
import { Fragment } from "react";
import DoctorsList from "../components/Doctors/DoctorsList";

const doctors = () => {
  return (
           <Fragment>
           <Head>
            <title>Doctors | Appointments</title>
           </Head>
           <DoctorsList />
           </Fragment>
           )
};
export default doctors;
