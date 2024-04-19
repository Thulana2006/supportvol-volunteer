import { Bookmark, Clipboard, Eye, LogIn, MessagesSquareIcon, Quote, UserCheck, View } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils";

interface InitiativeProps {
    name: string;
    aim?: string;
    imageURL?: string;
    isNew?: boolean | null;
    joined?: boolean | null;
    communityJoined?: boolean | null;
    communityID?: string;
    initiativeID?: string;
    tags?: string[];
    projectCount?: number;
    membersCount?: number;
    organizationsCount?: number;
}

const InitiativeCard: React.FC<InitiativeProps> = ({ name, aim, imageURL, isNew, joined, communityJoined, communityID, initiativeID, tags, projectCount, membersCount, organizationsCount
}) => {

    return (
        <Card>
            <CardHeader className="relative h-fit">
                <div className="flex gap-3 w-full">
                    <div>
                        <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                            {imageURL ? (
                                <Image src={imageURL} alt={name} width={64} height={64} objectFit="cover" />
                            ) : null
                            }
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex justify-between items-center">
                            <div className="pr-2 relative">
                                <span className="text-lg pr-2 font-semibold text-wrap-pretty w-fit">{name}</span>
                            </div>
                            <div className="flex gap-2">
                                {isNew && (
                                    <Badge className="absolute top-2 right-2 bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-200">New</Badge>
                                )}
                            </div>
                        </div>
                        <span className="flex">
                            <p className="text-sm text-gray-500">{aim}</p>
                        </span>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-2 items-center ">
                    <div className="flex gap-2 py-2">
                        {projectCount ? (
                            <Badge variant="count">{projectCount > 1000 ? (projectCount / 1000).toFixed(1) + 'K' : projectCount}+ <span>projects</span></Badge>
                        ) : null}
                        {membersCount ? (
                            <Badge variant="count">{membersCount > 1000 ? (membersCount / 1000).toFixed(1) + 'K' : membersCount}+ <span>members</span></Badge>
                        ) : null}
                        {organizationsCount ? (
                            <Badge variant="count">{organizationsCount > 1000 ? (organizationsCount / 1000).toFixed(1) + 'K' : organizationsCount}+ <span>organizations</span></Badge>
                        ) : null}
                    </div>
                </div>

                <div className={cn("flex justify-between pt-4 pb-1", communityJoined? '': 'hidden')}>
                    <Link href={"/community/" + communityID + "/initiative/" + initiativeID}>
                        {joined? (
                            <span className="flex items-center gap-2"><Button size="sm" className="text-xs"><LogIn className="mr-1 w-4 h-4" /> Hop in</Button>
                                <UserCheck className="w-6 h-6 stroke-green-600 dark:stroke-green-300 rounded p-1"/>
                            </span>
                        ) : (
                            <Button size="sm" className="text-xs" variant="secondary"><Eye className="mr-1 w-4 h-4" /> Take a quick peek</Button>
                        )}
                        
                    </Link>
                    <div className={cn("flex gap-2", joined ? '' : 'hidden')}>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger><Link href={"/message/" + initiativeID}>
                                    <Button variant="secondary" size="sm" className="text-xs"><MessagesSquareIcon className="w-4 h-4" /></Button>
                                </Link></TooltipTrigger>
                                <TooltipContent>
                                    <p>message</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger><Link href={"/activity/" + initiativeID}>
                                    <Button variant="secondary" size="sm" className="text-xs"><Bookmark className="w-4 h-4" /></Button>
                                </Link></TooltipTrigger>
                                <TooltipContent>
                                    <p>check your tasks</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <div className="flex gap-2 flex-wrap">
                    {tags?.map((tag, index) => (
                        <Badge key={index} variant="outline">{tag}</Badge>
                    ))}
                </div>
            </CardFooter>
        </Card>
    );
}

export default InitiativeCard;