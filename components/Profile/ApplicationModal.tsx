import { XIcon } from "@heroicons/react/solid";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { useUser } from "@supabase/auth-helpers-react";
import { motion } from "framer-motion";
import Error from "next/error";
import { useRouter } from "next/router";
import { stringify } from "querystring";
import { FormEvent } from "react";
import { QueryClient, useMutation, UseMutationResult } from "react-query";
import { DoctorType } from "../../types";

export interface DocParams {
  address: string;
  closing_time: string;
  opening_time: string;
  consultation_fee: number;
  experience: number;
  phone_number: string;
  specialization: string;
  website: string;
}


const ApplicationModal = ({setOpenModal}: {setOpenModal: (arg0:boolean) => void}) => {

  const queryClient = new QueryClient();

   const router = useRouter()
    const { isLoading, user, error } = useUser();

  const mutation = useMutation(
    async ({
      address,
      closing_time,
      consultation_fee,
      experience,
      opening_time,
      phone_number,
      specialization,
      website,
    }: DocParams) => {
      const result = await supabaseClient.from("doctors").insert([
        {
          address: address,
          closing_time: closing_time,
          consultation_fee: +consultation_fee,
          experience: +experience,
          opening_time: opening_time,
          phone_number: phone_number,
          specialization: specialization,
          website: website,
        },
      ]);

      const { data, error } = await supabaseClient
        .from("profiles")
        .update({ role: "doctor" })
        .eq("id", user?.id);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("doctors");
        setOpenModal(false);
      },
    }
  );


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log("handleSubmit");
    e.preventDefault()
    const {address, closing_time, consultation_fee, experience, opening_time, phone_number, specialization, website} = Object.fromEntries(new FormData(e.currentTarget))



    if(typeof address === 'string' ||
       typeof closing_time === 'string' ||
       typeof opening_time === 'string' ||
       typeof experience === 'number' ||
       typeof consultation_fee === 'number' ||
       typeof specialization === 'string' ||
       typeof website === 'string' ||
       typeof phone_number === 'string'

    ) {

      const res  =  mutation.mutate({
          address: address as string,
          closing_time: closing_time as string,
          consultation_fee: +consultation_fee,
          experience: +experience,
          opening_time: opening_time as string,
          phone_number: phone_number as string,
          specialization: specialization as string,
          website: website as string,
        }) ;

      }


  };

  return (
    <motion.div
      initial={{ opacity: 0, y: "50px" }}
      animate={{ opacity: 1, y: "0px" }}
      exit={{ opacity: 0, y: "50px" }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 bg-gray-700/90 h-screen flex justify-center items-center"
    >



      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex flex-col bg-white rounded-lg relative min-w-[250px] w-1/2 py-6 px-4"
      >
        <XIcon
          className="absolute top-3 right-5 h-6 w-6 text-red-800 cursor-pointer"
          onClick={() => setOpenModal(false)}
        />
        <div className="flex flex-col space-y-2">
          <label
            className="text-sm text-gray-700 font-medium"
            htmlFor="address"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            required
            name="address"
            placeholder="Enter Address"
            className="px-3 py-1 text-gray-600 border border-gray-400 rounded"
          />
        </div>
        <div className="flex flex-col space-y-2 mt-4">
          <label
            className="text-sm text-gray-700 font-medium"
            htmlFor="phone_number"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phone_number"
            required
            name="phone_number"
            placeholder="Enter Phone Number"
            className="px-3 py-1 text-gray-600 border-gray-400 border rounded"
          />
        </div>
        <div className="flex flex-col space-y-2 mt-4">
          <label
            className="text-sm text-gray-700 font-medium"
            htmlFor="experience"
          >
            Years of Experience
          </label>
          <input
            type="number"
            id="experience"
            required
            name="experience"
            placeholder="Enter Years of Experience"
            className="px-3 py-1 text-gray-600 border-gray-400 border rounded"
          />
        </div>
        <div className="flex flex-col space-y-2 mt-4">
          <label
            className="text-sm text-gray-700 font-medium"
            htmlFor="consultation_fee"
          >
            Consultation Fee
          </label>
          <input
            type="number"
            id="consultation_fee"
            required
            name="consultation_fee"
            placeholder="Enter Consultation Fee"
            className="px-3 py-1 text-gray-600 border-gray-400 border rounded"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col space-y-2 mt-4">
            <label
              className="text-sm text-gray-700 font-medium"
              htmlFor="opening_time"
            >
              Opening Time
            </label>
            <input
              type="time"
              id="opening_time"
              required
              name="opening_time"
              placeholder="Opening Time"
              className="px-3 py-1 text-gray-600 border-gray-400 border rounded"
            />
          </div>
          <div className="flex flex-col space-y-2 mt-4">
            <label
              className="text-sm text-gray-700 font-medium"
              htmlFor="closing_time"
            >
              Closing Time
            </label>
            <input
              type="time"
              id="closing_time"
              required
              name="closing_time"
              placeholder="closing Time"
              className="px-3 py-1 text-gray-600 border-gray-400 border rounded"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-2 mt-4">
          <label
            className="text-sm text-gray-700 font-medium"
            htmlFor="website"
          >
            Website
          </label>
          <input
            type="text"
            id="website"
            name="website"
            placeholder="Enter your website"
            className="px-3 py-1 text-gray-600 border-gray-400 border rounded"
          />
        </div>
        <div className="flex flex-col space-y-2 mt-4">
          <label
            className="text-sm text-gray-700 font-medium"
            htmlFor="specialization"
          >
            Specialization
          </label>
          <input
            type="text"
            id="specialization"
            name="specialization"
            placeholder="e.g. Cardiology"
            className="px-3 py-1 text-gray-600 border-gray-400 border rounded"
          />
        </div>
        <button
          type="submit"
          className="text-white text-md px-4 py-2 rounded bg-sky-500 mt-4"
        >
          Submit
        </button>
      </form>
    </motion.div>
  );
};
export default ApplicationModal;
