import { Bookmark, Clipboard, Eye, Flame, LogIn, MessagesSquareIcon, Quote, UserCheck, View } from "lucide-react";
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

interface QuickProjectProps {
    name: string;
    description?: string;
    imageURL?: string;
    isNew?: boolean | null;
    joined?: boolean | null;
    communityJoined?: boolean | null;
    communityID?: string;
    quickProjectID?: string;
    tags?: string[];
    dayCount?: number;
    membersCount?: number;
    organizationsCount?: number;
}

const QuickProjectCard: React.FC<QuickProjectProps> = ({ name, description, imageURL, isNew, joined, communityJoined, communityID, quickProjectID, tags, dayCount, membersCount, organizationsCount
}) => {

    return (
        <Card className="relative h-fit">

            <Badge className="absolute rounded-es-none -top-2 -left-0 bg-orange-100 text-orange-600 dark:bg-orange-600 dark:text-orange-200">
                <Flame className="mr-1 w-3 h-3 fill-orange-600 dark:fill-orange-100" /> quick project
            </Badge>

            <CardHeader className="relative">
                {isNew && (
                    <Badge className=" absolute top-2 right-2 bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-200">New</Badge>
                )}
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
                            <h3 className="text-lg font-semibold flex">{name}
                            </h3>
                        </div>
                        <span className="flex">
                            <p className="text-sm text-gray-500">{description}</p>
                        </span>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-2 items-center">
                    <div className="flex gap-2 py-2">
                        {dayCount ? (
                            <Badge variant="count">{dayCount > 1000 ? (dayCount / 1000).toFixed(1) + 'K' : dayCount}+ <span>day streak</span></Badge>
                        ) : null}
                        {membersCount ? (
                            <Badge variant="count">{membersCount > 1000 ? (membersCount / 1000).toFixed(1) + 'K' : membersCount}+ <span>members</span></Badge>
                        ) : null}
                        {organizationsCount ? (
                            <Badge variant="count">{organizationsCount > 1000 ? (organizationsCount / 1000).toFixed(1) + 'K' : organizationsCount}+ <span>organizations</span></Badge>
                        ) : null}
                    </div>
                </div>

                <div className={cn("flex justify-between pt-4 pb-1", communityJoined ? '' : 'hidden')}>
                    <Link href={"/community/" + communityID + "/quickproject/" + quickProjectID}>
                        {joined ? (
                            <span className="flex items-center gap-2"><Button size="sm" className="text-xs"><LogIn className="mr-1 w-4 h-4" /> Hop in</Button>
                                <UserCheck className="w-6 h-6 stroke-green-600 dark:stroke-green-300 rounded p-1" />
                            </span>) : (
                            <Button size="sm" className="text-xs" variant="secondary"><Eye className="mr-1 w-4 h-4" /> Take a quick peek</Button>
                        )}

                    </Link>
                    <div className={cn("flex gap-2", joined ? '' : 'hidden')}>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger><Link href={"/message/" + quickProjectID}>
                                    <Button variant="secondary" size="sm" className="text-xs"><MessagesSquareIcon className="w-4 h-4" /></Button>
                                </Link></TooltipTrigger>
                                <TooltipContent>
                                    <p>message</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger><Link href={"/activity/" + quickProjectID}>
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
                <div className="flex gap-2">
                    {tags?.map((tag, index) => (
                        <Badge key={index} variant="outline">{tag}</Badge>
                    ))}
                </div>
            </CardFooter>
        </Card>
    );
}

export default QuickProjectCard;