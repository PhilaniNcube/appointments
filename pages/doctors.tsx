import Head from "next/head";
import { Fragment } from "react";

const doctors = () => {
  return (
           <Fragment>
           <Head>
            <title>Doctors | Appointments</title>
           </Head>
           <main className="min-h-screen py-24">
              <div className="max-w-7xl mx-auto w-full flex h-full items-center justify-center">
                 <h1>Doctors</h1>
              </div>
           </main>
           </Fragment>
           )
};
export default doctors;
