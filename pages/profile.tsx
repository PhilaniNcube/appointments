import Head from "next/head";
import { Fragment } from "react";
import { useQuery } from "react-query";
import ProfileHero from "../components/Profile/ProfileHero";
import { getProfile } from "../lib/getProfile";

const profile = () => {

  const {data, isError, isLoading, isSuccess} = useQuery("profile", getProfile)

  return (
          <Fragment>
              <Head>
                <title>Profile</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              </Head>
              <ProfileHero />
          </Fragment>
          )
};
export default profile;
