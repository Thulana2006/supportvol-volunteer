import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { UserCheck } from "lucide-react";
import { cn } from '@/lib/utils';

interface CommCardProps {
    imageURL: string;
    title: string;
    description: string;
    initiativeCount: number;
    projectCount: number;
    memberCount: number;
    communityID: string;
    joined: boolean;
}

const CommunityCard: React.FC<CommCardProps> = ({ imageURL, title, description, initiativeCount, projectCount, memberCount, communityID, joined }) => {
    return (
        <Link href={'community/' + communityID}>
        <Card className="max-w-xs">
            <CardHeader>
                <Image src={imageURL} width={600} height={400} alt="Image" className="rounded-md object-cover" />
                <CardTitle className="pt-4 flex items-center">{title} <UserCheck className={cn("ml-2 w-6 h-6 stroke-green-600 dark:stroke-green-300 rounded bg-green-50 dark:bg-green-800 p-1", joined? '' : 'hidden')}/> </CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex w-full justify-center items-center bg-card">
                    <div className="w-auto flex gap-4 items-center bg-card text-card-foreground">
                        <div className="flex flex-col items-center font-semibold text-xs">
                            <span>{initiativeCount > 1000 ? (initiativeCount / 1000 + 'K+'): initiativeCount + '+'}</span>
                            <span>initiatives</span>
                        </div>
                        <div className="flex flex-col items-center font-semibold text-xs">
                            <span>{projectCount > 1000 ? (projectCount / 1000 + 'K+'): projectCount + '+'}</span>
                            <span>projects</span>
                        </div>
                        <div className="flex flex-col items-center font-semibold text-xs">
                            <span>{memberCount > 1000 ? (memberCount / 1000 + 'K+'): memberCount + '+'}</span>
                            <span>members</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
        </Link>
    );
}

export default CommunityCard;