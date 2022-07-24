import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { PostgrestError } from "@supabase/supabase-js";
import { UserType } from "../types";

export const getProfile = async () => {
  const {data, error} = await supabaseClient.from('profiles')
  .select('*').single()

  if(error) {
    throw new Error(error.message)
  } else  {
    return data
  }

}
