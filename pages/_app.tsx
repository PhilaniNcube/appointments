import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@supabase/auth-helpers-react";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import Navigation from "../components/Navigation";


function MyApp({ Component, pageProps }: AppProps) {


  const [queryClient] = React.useState(() => new QueryClient({}));

  return (
    <UserProvider supabaseClient={supabaseClient}>
      <Navigation/>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </QueryClientProvider>

    </UserProvider>
  );
}

export default MyApp;

