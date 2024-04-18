import React, { ReactNode } from 'react';
import Link from "next/link";

import {
    Bookmark,
    ChevronDown,
    Flame,
    GraduationCap,
    MessagesSquare,
    Search,
    Settings,
    Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from '@/components/ui/input'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import AuthenticationForm from '../landing/authenticationForm';
import { ModeToggle } from '../modeToggle';

interface NavbarProps {
    selectedItem: string;
    selectedIcon: number;
    userName: string;
    userEmail: string | null;
    userProfile: string;
}

const Navbar: React.FC<NavbarProps> = ({ selectedItem, userName, userProfile, userEmail, selectedIcon
 }) => {

    let Icons = {
        itemIcon: Users,
    };

    Icons.itemIcon = selectedIcon == 1 ? Users : (
        selectedIcon == 2 ? Bookmark : (
            selectedIcon == 3 ? Flame : (
                selectedIcon == 4 ? MessagesSquare : GraduationCap
            )   
        )
    ); 

    return (
        <div className="navbar flex justify-between items-center">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="default">
                        <Icons.itemIcon className="mr-2 w-4 h-4" />{selectedItem}<ChevronDown className='ml-2 h-4 w-4' />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <Link href="/community" className='flex w-full items-center'>
                                <Users className="mr-2 h-4 w-4" />
                                <span>Community</span>
                                <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="/activity" className='flex w-full items-center'>
                                <Bookmark className="mr-2 h-4 w-4" />
                                <span>My activity</span>
                                <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="/feed" className='flex w-full items-center'>
                                <Flame className="mr-2 h-4 w-4" />
                                <span>Feed</span>
                                <DropdownMenuShortcut>⌘F</DropdownMenuShortcut>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="/message" className='flex w-full items-center'>
                                <MessagesSquare className="mr-2 h-4 w-4" />
                                <span>Message</span>
                                <DropdownMenuShortcut>⌘M</DropdownMenuShortcut>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="/learning" className='flex w-full items-center'>
                                <GraduationCap className="mr-2 h-4 w-4" />
                                <span>Learning</span>
                                <DropdownMenuShortcut>⌘L</DropdownMenuShortcut>
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input placeholder="search or browse communities" className='hidden sm:block w-80 focus-visible:ring-0 focus-visible:ring-offset-0' />
                <Button variant="secondary" size="icon"><Search className='w-4 h-4' /></Button>
            </div>
            <div className='flex gap-4 items-center '>
                <ModeToggle />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar className='hover:cursor-pointer'>
                            <AvatarImage src={userProfile} alt="@shadcn" />
                            <AvatarFallback>{userName.charAt(0)}{userName.charAt(1)}</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>
                            <div className="flex flex-col">
                                <p>{userName}</p>
                                <p>{userEmail}</p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <Link href="/settings" className='flex w-full items-center'>
                                    <Settings className="mr-2 h-4 w-4" />
                                    <span>Settings</span>
                                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                </Link>
                            </DropdownMenuItem>
                            <AuthenticationForm isSignIn={false} isDropdown={true} />
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

export default Navbar;