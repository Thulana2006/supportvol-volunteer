"use client";

import React, { useState, useEffect } from "react";
import { UserAuth } from "@/context/AuthContext";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { Loader2, LogIn, LogOut, Rocket } from "lucide-react";
import Link from "next/link";
import { DropdownMenuItem } from "../ui/dropdown-menu";

interface AuthenticationFormProps {
  isSignIn: boolean;
  isDropdown?: boolean;
}

const AuthenticationForm: React.FC<AuthenticationFormProps> = ({ isSignIn, isDropdown }) => {

  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
      window.location.href = "/community";
    } catch (error) {
      console.log(error);
    }

  };

  const handleSignOut = async () => {
    try {
      await logOut();
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  console.log(user);

  return (
    <div>
      {isSignIn ? (
        user ? (

          <Link href="/community" className="">
            <Button>
              <Rocket className="mr-2 fill-primary-foreground w-4 h-4" />
              Dive right in !
            </Button>
          </Link>
        ) : (
          <Button onClick={handleSignIn} disabled={loading}>
            {loading ? (<span className="flex"><Loader2 className="mr-2 animate-spin w-4 h-4" />Loading...</span>) : (<span className="flex"><FcGoogle className="mr-2 w-4 h-4" />Sign In with Google</span>)}
          </Button>)
      ) : (isDropdown ? (
        <DropdownMenuItem className="hover:cursor-pointer" onClick={handleSignOut} disabled={loading}><LogOut className="mr-2 h-4 w-4" />{loading ? "Loading..." : "Sign out"}</DropdownMenuItem>
      ) : (
        <Button onClick={handleSignOut} disabled={loading}>
          <LogOut className="mr-2 h-4 w-4" />{loading ? "Loading..." : "Sign out"}
        </Button>
      )
      )
      }

    </div>
  );
}

export default AuthenticationForm;