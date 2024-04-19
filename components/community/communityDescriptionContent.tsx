import * as React from "react"
import CommCard from './comCard';

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { json } from "stream/consumers";
import { count } from "console";

interface CommunityDescriptionProps {
    cid: string;
}

const CommunityDescription: React.FC<CommunityDescriptionProps> = ({ cid }) => {
    {/** call api to fetch description data for community
        including initiated_date, long_description, tags
                  project_count, initiative_count, member_count
                  organization_count
*/}

const badgeDetails = [
    {
        name: "Advocacy",
        color: "bg-purple-100",
        description: "Join advocacy campaigns to influence policy decisions and raise awareness about environmental issues. Through letter-writing campaigns, petitions"
    },
    {
        name: "Educational ",
        color: "bg-pink-100",
        description: "Participate in educational workshops and seminars to deepen your understanding of environmental conservation topics. Learn about biodiversity"
    },
    {
        name: "Citizen Science",
        color: "bg-rose-100",
        description: "Engage in citizen science projects to contribute data and research to environmental conservation efforts. From monitoring wildlife populations to tracking climate patterns"
    },
    {
        name: "Fundraising ",
        color: "bg-green-100",
        description: "Support environmental conservation through fundraising events and initiatives. Whether it&apos;s organizing a charity run, hosting a benefit concert"
    },
    {
        name: "Eco-Tourism",
        color: "bg-orange-100",
        description: "Embark on eco-tourism trips to explore pristine natural habitats and support conservation efforts around the world. Join guided tours led by conservationists and local experts to learn about unique ecosystems"
    }
]
const statDetails = [
    {
        name: "initiatives",
        count: 10,    
        new: false
    },    
    {
        name: "projects",
        count: 233,
        new: false    
    },
    {
        name: "projects per week",
        count: 12,
        new: true    
    },
    {
        name: "organizations",
        count: 13,    
        new: false
    },
    {
        name: "members",
        count: 2387,    
        new: false
    },
    {
        name: "members per week",
        count: 23, 
        new: true   
    }
]

    return (
        <div className="flex flex-col items-center justify-center">
            <Carousel className="w-full max-w-sm sm:max-w-lg lg:max-w-xl">
                <CarouselContent>
                    <CarouselItem key={1}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex flex-col p-6">
                                    <span className="text-xs font-semibold">since 20 June 2024</span>
                                    <span className="text-md pr-2 text-justify pt-6 ">
                                    Welcome to our Environmental Conservation Community! 🌿

Our community is dedicated to protecting and preserving the natural world for future generations. We believe that every individual has a role to play in safeguarding our planet, and together, we can make a meaningful impact.

Join us in our mission to promote environmental awareness, advocate for sustainable practices, and take action to address pressing environmental issues. Whether you&apos;re passionate about protecting endangered species, reducing plastic pollution, or combating climate change, there&apos;s a place for you in our community.

Through collaboration, education, and activism, we strive to create a greener, cleaner, and more sustainable world. Together, we can make a difference and ensure a brighter future for all living beings.

Join us today and be part of the solution! 🌍💚                             
                                    </span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem key={2} className="flex items-center">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex flex-wrap p-4">
                                    {
                                        badgeDetails.map((badge, index) => {
                                            return (
                                            <div key={index} className="md:basis-1/2 flex flex-col w-full max-w-xs text-sm">
                                                <span>
                                                    <Badge className={badge.color} variant="secondary">{badge.name}</Badge>
                                                </span>
                                                <span className="text-xs mt-3 px-1 mb-3">
                                                    {badge.description}
                                                </span>
                                            </div>
                                            )
                                        })
                                    }
                                    
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem key={3} className="flex items-center">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex flex-wrap p-6 items-center justify-center">
                                {
                                        statDetails.map((stat, index) => {
                                            return (
                                                <div key={index} className="md:basis-1/3 flex flex-col py-6 items-center w-full max-w-xs  text-sm">
                                                <span className="flex items-center font-semibold text-xl">
                                                    {stat.count > 1000 ? (stat.count / 1000 ).toFixed(1) + 'K': stat.count}+
                                                    <span className="text-xs">{stat.new ? <Badge variant="secondary" className="ml-2">new</Badge> : ""}</span>
                                                </span>
                                                <span className="text-sm mt-1 px-1">
                                                    {stat.name}
                                                </span>
                                            </div>
                                            )
                                        })
                                    }
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

export default CommunityDescription;
