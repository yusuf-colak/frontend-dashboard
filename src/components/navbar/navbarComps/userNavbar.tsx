import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserNavbar = ({ navbarToggle }) => {
  return (
    <>
      {navbarToggle ? (
        <Card className=" w-[210px] mb-3 m-3">
          <CardHeader className="flex flex-row items-center p-2">
            <CardTitle>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </CardTitle>
            <div>
              <CardDescription className="ml-3 text-lg text-black">
                Yusuf Çolak
              </CardDescription>
              <CardDescription className="ml-3">@trkGates</CardDescription>
            </div>
          </CardHeader>
        </Card>
      ) : (
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      )}
    </>
  );
};

export default UserNavbar;
