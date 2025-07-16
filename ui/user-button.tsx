// src/components/user-button.tsx

"use client";

import { Button } from "@/components/ui/button";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // Make sure the path is correct
import {auth }from "@/auth"; // Correct path to auth module
import { signOutUser } from "../../lib/actions/user.actions"; // Ensure path is correct

const UserButton = () => {
    const [session, setSession] = useState<any>(null); // Hold session state

    useEffect(() => {
        const fetchSession = async () => {
            const userSession = await auth(); // Get user session data
            setSession(userSession);
        };

        fetchSession();
    }, []); // This runs once when the component mounts

    if (session === null) {
        return (
            <Button asChild>
                <Link href="/sign-in">
                    <UserIcon /> Sign In
                </Link>
            </Button>
        );
    }

    const initialName = session.user?.name?.charAt(0).toUpperCase() ?? "U";
    const profileImage = session.user?.image;

    // Handle sign-out
    const handleSignOut = async () => {
        try {
            await signOutUser(); // Call the sign-out function
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <div className="flex gap-2 items-center">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="flex items-center">
                        <Button variant="ghost" className="relative border w-8 h-8 rounded-full ml-2 flex items-center justify-center bg-gray-300">
                            {profileImage ? (
                                <div className="absolute inset-0">
                                    <Image src={profileImage} alt="profile" fill className="rounded-full object-cover" />
                                </div>
                            ) : (
                                <span className="text-md font-medium">{initialName}</span>
                            )}
                        </Button>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 md:mr-4">
                    <DropdownMenuLabel className="w-56">
                        <div className="flex flex-col space-y-1">
                            <div className="text-sm font-bold leading-none">
                                {session.user?.name}
                            </div>
                            <div className="text-sm font-normal leading-none text-gray-600">
                                {session.user?.email}
                            </div>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="p-0 mb-1">
                        <Button variant="ghost" className="w-full py-4 px-2 h-4 justify-start" onClick={handleSignOut}>
                            Sign Out
                        </Button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default UserButton;
