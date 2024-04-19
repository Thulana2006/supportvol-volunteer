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
import InitiativeCard from "./initiativeCard";
import QuickProjectCard from "./quickProjectCard";

interface CommunityProjectsProps {
    cid: string;
    communityJoined: boolean;
}

const CommunityProjects: React.FC<CommunityProjectsProps> = ({ cid, communityJoined }) => {
    {/** call api to fetch project data for community
        including intiatives and quick projects.


*/}

    const projectDetails = [
        {
            name: "Ocean Conservation Alliance",
            type: "initiative",
            image: "https://source.unsplash.com/random/64x64",
            description: "Working to protect and restore ocean ecosystems worldwide.",
            tags: ["ocean conservation", "marine life", "sustainability"],
            stats: [
                {
                    name: "projects",
                    count: 20
                },
                {
                    name: "members",
                    count: 2000
                },
                {
                    name: "organizations",
                    count: 4
                }
            ],
            isNew: false,
            joined: true,
            status: "active"
        },
        {
            name: "Renewable Energy Initiative",
            type: "initiative",
            image: "https://source.unsplash.com/random/70x70",
            description: "Promoting the adoption of renewable energy sources for a greener future.",
            tags: ["renewable energy", "clean energy", "sustainability"],
            stats: [
                {
                    name: "projects",
                    count: 30
                },
                {
                    name: "members",
                    count: 1200
                },
                {
                    name: "organizations",
                    count: 6
                }
            ],
            isNew: true,
            joined: false,
            status: "active"
        },
        {
            name: "Wildlife Conservation Society",
            type: "initiative",
            image: "https://source.unsplash.com/random/62x62",
            description: "Protecting endangered species and their habitats around the globe.",
            tags: ["wildlife conservation", "biodiversity", "sustainability"],
            stats: [
                {
                    name: "projects",
                    count: 35
                },
                {
                    name: "members",
                    count: 2500
                },
                {
                    name: "organizations",
                    count: 3
                }
            ],
            isNew: false,
            joined: true,
            status: "active"
        },
        {
            name: "BeachSave",
            type: "quick project",
            image: "https://source.unsplash.com/random/80x80",
            description: "saving beaches from pollution and plastic waste",
            tags: ["ocean conservation", "sustainability"],
            stats: [
                {
                    name: "day streak",
                    count: 10
                },
                {
                    name: "members",
                    count: 5000
                },
                {
                    name: "organizations",
                    count: 2
                }
            ],
            isNew: false,
            joined: false,
            status: "active"
        },
        {
            name: "RailwayClean",
            type: "quick project",
            image: "https://source.unsplash.com/random/83x83",
            description: "cleaning the railway tracks and stations",
            tags: ["road clean", "#noPlastic"],
            stats: [
                {
                    name: "day streak",
                    count: 10
                },
                {
                    name: "members",
                    count: 5000
                },
                {
                    name: "organizations",
                    count: 2
                }
            ],
            isNew: false,
            joined: true,
            status: "active"
        }
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {projectDetails.map((project, index) => {
                if (project.type === "initiative")
                    return (
                        <InitiativeCard key={index} name={project.name} aim={project.description} 
                            imageURL={project.image}
                            isNew={project.isNew}
                            joined={project.joined}
                            communityJoined={communityJoined}
                            tags={project.tags}
                            projectCount={project.stats[0].count} 
                            membersCount={project.stats[1].count} 
                            organizationsCount={project.stats[2].count} />
                    );
                else
                    return (
                        <QuickProjectCard key={index} name={project.name} description={project.description}
                            imageURL={project.image}
                            isNew={project.isNew}
                            joined={project.joined}
                            communityJoined={communityJoined}
                            tags={project.tags}
                            dayCount={project.stats[0].count}
                            membersCount={project.stats[1].count}
                            organizationsCount={project.stats[2].count} /> 
                    );
            }
            )}
        </div>
    );
}

export default CommunityProjects;
