import { useQuery } from "react-query";
import { getProfile } from "../../lib/getProfile";
import { UserType } from "../../types";

const ProfileCard = () => {

    const {
      data,
      isLoading,

    }: { data: UserType | undefined; isLoading: boolean } = useQuery(
      "profile",
      getProfile
    );

  return (
    <div className="flex flex-col py-6 px-3 bg-gray-100 max-w-md rounded-lg shadow">
      <h2 className="text-xl font-bold text-gray-800">
       {data?.first_name} {data?.last_name}
      </h2>
      <p className="text-sm text-gray-500">{data?.email}</p>

    </div>
  );
};
export default ProfileCard;
