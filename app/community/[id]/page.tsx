"use client";

import React, { useEffect, useState } from 'react';

import { UserAuth } from "@/context/AuthContext";
import { Loader2, UserPlusIcon } from 'lucide-react';
import NavbarC from '@/components/community/navbarCommunitySpecific';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CommunityDescription from '@/components/community/communityDescriptionContent';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import CommunityProjects from '@/components/community/communityProjectsContent';

export default function CommunityPage({ params }: {
    params: {
        id: string;
    }
}) {
    const { user } = UserAuth();
    const [loading, setLoading] = useState(true);
    const [joined, setJoined] = useState(false);

    {/** call api to check if user is a member of the community */ }

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 50));
            setLoading(false);
        };
        checkAuthentication();
    }, [user]);

    return (
        <div className="flex min-h-screen flex-col gap-6 px-2">
            {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
            ) : user ? (
                <div className="flex min-h-screen flex-col gap-12 md:px-6 pt-8 pb-6">
                    <NavbarC communityName='Environmental conservation' communityID={params.id} selectedItem='Community' userName={user.displayName} userEmail={user.email} userProfile={user.photoURL} selectedIcon={1} />
                    
                    <div className="content flex relative h-auto flex-col w-full items-center">

                        <Button onClick={() => {setJoined(!joined)}} className={cn("absolute w-fit right-0 dark:bg-green-700 bg-green-200", joined ? 'hidden' : '')} variant="secondary">
                            <UserPlusIcon className='w-4 h-4 mr-2'/> Join
                        </Button>


                        <Tabs defaultValue="description" className="flex flex-col w-full items-center">
                            <TabsList className='bg-secondary mb-14' >
                                <TabsTrigger value="description">Description</TabsTrigger>
                                <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
                                <TabsTrigger value="members">Members</TabsTrigger>
                            </TabsList>
                            <TabsContent value="description" className='w-full'>
                                <CommunityDescription cid={params.id} />
                            </TabsContent>
                            <TabsContent value="opportunities">
                                <CommunityProjects cid={params.id} communityJoined={joined}/>
                            </TabsContent>
                            <TabsContent value="members">

                            </TabsContent>
                        </Tabs>
                    </div>



                </div>
            ) : (
                <p></p>
            )}

        </div>
    );
};