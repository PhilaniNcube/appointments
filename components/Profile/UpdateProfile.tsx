import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useQuery } from "react-query";
import { getProfile } from "../../lib/getProfile";
import { UserType } from "../../types";
import ApplicationModal from "./ApplicationModal";

const UpdateProfile = () => {

  const [openModal, setOpenModal] = useState<boolean>(false)

   const {
     data,
     isLoading,
     isError,
   }: { data: UserType | undefined; isLoading: boolean; isError: boolean } =
     useQuery("profile", getProfile);

  return (
    <section className="max-w-7xl mx-auto mt-4 bg-gray-500 rounded-lg py-4 px-3">
      {data?.role === "patient" && (
        <div>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-blue-600 text-white text-base uppercase px-4 py-2 rounded-lg"
          >
            Apply To Listed As A Doctor
          </button>
        </div>
      )}

      <AnimatePresence exitBeforeEnter>
        {openModal && <ApplicationModal setOpenModal={setOpenModal} />}
      </AnimatePresence>
    </section>
  );
};
export default UpdateProfile;
