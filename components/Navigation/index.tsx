import { Menu, Transition } from "@headlessui/react";
import { ChevronDoubleDownIcon, ChevronDownIcon, LockClosedIcon, MenuAlt1Icon, TerminalIcon, UserCircleIcon, XIcon } from "@heroicons/react/solid";
import { useUser } from "@supabase/auth-helpers-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { forwardRef, Fragment, useState } from "react";

const Navigation = () => {


    const [open, setOpen] = useState(false)
     const { isLoading, user, error } = useUser();

     console.log({open})


  return (
    <nav className="bg-sky-600 sticky top-0 left-0 right-0">
      {/* * Desktop Navigation  Starts* */}
      <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto py-2">
        <div className="flex items-center">
          <UserCircleIcon className="h-10 w-10 text-blue-300" />
        </div>

        <nav className="flex items-center space-x-2">
          <Link href="/">
            <a className="text-md font-medium text-teal-50">Home</a>
          </Link>
          <Link href="/doctors">
            <a className="text-md font-medium text-teal-50">Doctors</a>
          </Link>
          {user ? (
            <Fragment>
              <div className=" ">
                <UserCircleIcon
                  className="h-8 w-8 text-white hover:text-gray-300 cursor-pointer"
                  onClick={() => setOpen(!open)}
                />
                <AnimatePresence exitBeforeEnter>
                  {open && (
                    <motion.div
                      key="settings"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute z-10 flex flex-col isolate space-y-4 items-start mt-4 right-16 top-8 w-56 bg-gray-800 rounded-lg p-4"
                    >
                      <Link href="/profile">
                        <a
                          onClick={() => setOpen(false)}
                          className="text-red-50 font-medium text-md"
                        >
                          Profile
                        </a>
                      </Link>
                      <Link href="/settings">
                        <a
                          onClick={() => setOpen(false)}
                          className="text-red-50 font-medium text-md"
                        >
                          Settings
                        </a>
                      </Link>
                      <Link href="/api/auth/logout">
                        <a
                          onClick={() => setOpen(false)}
                          className="text-red-500 font-medium text-md"
                        >
                          Logout
                        </a>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <Link href="/sign-in">
                <a className="text-md font-medium text-teal-50">Sign In</a>
              </Link>
              <Link href="/register">
                <a className="text-md font-medium text-teal-50">Register</a>
              </Link>
            </Fragment>
          )}
        </nav>
      </div>
      {/*** Desktop Navigation Ends***/}

      {/*** Mobile Navigation Starts***/}
      <div className="md:hidden container px-4 py-2 mx-auto flex justify-between">
        <div className="flex items-center">
          <TerminalIcon className="h-8 w-8 text-white" />
        </div>

        <div className="flex items-center text-md space-2-4">
          <MenuAlt1Icon
            className="h-8 w-8 text-white cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <AnimatePresence exitBeforeEnter>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0 }}
              className="h-screen bg-gray-600 z-50 flex flex-col absolute items-end px-3 py-24 top-0 right-0 w-full"
            >
              <XIcon
                onClick={() => setOpen(false)}
                className="h-10 w-10 z-30 text-white absolute top-12 right-14 cursor-pointer"
              />
              <nav className="flex flex-col h-full justify-between max-w-lg mx-auto">
                <Link href="/">
                  <a
                    onClick={() => setOpen(false)}
                    className="text-xl font-medium text-teal-50"
                  >
                    Home
                  </a>
                </Link>
                <Link href="/doctors">
                  <a
                    onClick={() => setOpen(false)}
                    className="text-xl font-medium text-teal-50"
                  >
                    Doctors
                  </a>
                </Link>
                {user ? (
                  <Fragment>
                    <Link href="/profile">
                      <a
                        onClick={() => setOpen(false)}
                        className="text-xl font-medium text-teal-50"
                      >
                        Profile
                      </a>
                    </Link>
                    <Link href="/settings">
                      <a
                        onClick={() => setOpen(false)}
                        className="text-xl font-medium text-teal-50"
                      >
                        Settings
                      </a>
                    </Link>
                    <Link href="/api/auth/logout">
                      <a
                        onClick={() => setOpen(false)}
                        className="text-xl font-medium text-teal-50"
                      >
                        Logout
                      </a>
                    </Link>
                  </Fragment>
                ) : (
                  <Fragment>
                    <Link href="/sign-in">
                      <a
                        onClick={() => setOpen(false)}
                        className="text-xl font-medium text-teal-50"
                      >
                        Sign In
                      </a>
                    </Link>
                    <Link href="/register">
                      <a
                        onClick={() => setOpen(false)}
                        className="text-xl font-medium text-teal-50"
                      >
                        Register
                      </a>
                    </Link>
                  </Fragment>
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
export default Navigation;



