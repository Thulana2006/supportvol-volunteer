"use client";

import React, { useEffect, useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

import { UserAuth } from "../../context/AuthContext";
import {Loader2} from 'lucide-react';
import { Button } from '@/components/ui/button';
import AuthenticationForm from '@/components/landing/authenticationForm';
import Navbar from '@/components/community/navbar';
import CommunityCarousel from '@/components/community/communitiesCarousel';

export const Icons = {
  spinner: Loader2,
};

const Page: React.FC = () => {
    const { user } = UserAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuthentication = async () => {
          await new Promise((resolve) => setTimeout(resolve, 50));
          setLoading(false);
        };
        checkAuthentication();
    }, [user]);

    console.log(user);

    return (
        <div className="flex min-h-screen flex-col gap-6 lg:px-24">
            {loading ? (
        <Icons.spinner className="h-4 w-4 animate-spin" />
      ) : user ? (
        <div className="flex min-h-screen flex-col gap-6 md:px-24 pt-8 ">
          <Navbar selectedItem='Community' userName={user.displayName} userEmail={user.email} userProfile={user.photoURL} selectedIcon={1}/>
          <div className='p-8'>
            <CommunityCarousel/>
          </div>
          <div className=''>
              <span className="p-1 px-2 rounded text-xs bg-accent text-accent-foreground ">recent activities</span>
          </div>
        </div>
      ) : (
        <p></p>
      )}
            
        </div>
    );
};

export default Page;