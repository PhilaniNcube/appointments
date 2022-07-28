import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { PostgrestError } from "@supabase/supabase-js";
import { IDoctorType, UserType } from "../types";

export const getDoctors = async () => {
  const {data, error} = await supabaseClient.from('doctors')
  .select('*')

  if(error) {
    throw new Error(error.message)
  } else  {
    return data as IDoctorType[]
  }

}
