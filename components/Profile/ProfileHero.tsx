import { useUser } from "@supabase/auth-helpers-react";
import { Fragment } from "react";
import { useQuery } from "react-query";
import { getProfile } from "../../lib/getProfile";
import { UserType } from "../../types";
import CircleLoader from "../Loaders/CircleLoader";
import ProfileCard from "./ProfileCard";
import UpdateProfile from "./UpdateProfile";

const ProfileHero = () => {



  const { data, isLoading, isError }:{data:UserType|undefined, isLoading:boolean, isError:boolean} = useQuery(
    "profile",
    getProfile
  );

  return (
           <header className="max-w-7xl mx-auto py-3">
             {isLoading ? <CircleLoader /> : data ? (
              <Fragment>
                <ProfileCard />
                <UpdateProfile />
              </Fragment>
             ): isError && <div><h2 className="text-red-500">There was an error fetching the data</h2></div>}
           </header>)
};
export default ProfileHero;
