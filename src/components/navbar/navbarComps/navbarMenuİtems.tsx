"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BookOpen,
  GanttChart,
  Home,
  HomeIcon,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const NavbarMenuİtems = ({ navbarToggle }) => {
  const pathName = usePathname();
  const menu = [
    {
      title: "Home",
      logo: <Home />,
    },
    {
      title: "Dashboard",
      logo: <LayoutDashboard />,
    },
    {
      title: "Projects",
      logo: <GanttChart />,
    },
    {
      title: "Task",
      logo: <BookOpen />,
    },
    {
      title: "Audience",
      logo: <Users />,
    },
    {
      title: "Settings",
      logo: <Settings />,
    },
  ];
  const manuInside = [
    {
      title: "Home",
      insideTitle: "1 Home",
      logo: <HomeIcon />,
      link: "/home1",
    },
    {
      title: "Home",
      insideTitle: "2 Home",
      logo: <HomeIcon />,

      link: "/home2",
    },
    {
      title: "Home",
      insideTitle: "3 Home",
      logo: <HomeIcon />,
      link: "/home3",
    },
    {
      title: "Home",
      insideTitle: "4 Home",
      logo: <HomeIcon />,
      link: "/home4",
    },
    {
      title: "Dashboard",
      insideTitle: "1 Dashboard",
      logo: <LayoutDashboard />,
      link: "/dashboard1",
    },
    {
      title: "Dashboard",
      insideTitle: "2 Dashboard",
      logo: <LayoutDashboard />,
      link: "/dashboard2",
    },
    {
      title: "Dashboard",
      insideTitle: "3 Dashboard",
      logo: <LayoutDashboard />,
      link: "/dashboard3",
    },
    {
      title: "Dashboard",
      insideTitle: "4 Dashboard",
      logo: <LayoutDashboard />,
      link: "/dashboard4",
    },
    {
      title: "Projects",
      insideTitle: "1 Projects",
      logo: <GanttChart />,
      link: "/projects1",
    },
    {
      title: "Projects",
      insideTitle: "2 Projects",
      logo: <GanttChart />,
      link: "/projects2",
    },
    {
      title: "Projects",
      insideTitle: "3 Projects",
      logo: <GanttChart />,
      link: "/projects3",
    },
    {
      title: "Projects",
      insideTitle: "4 Projects",
      logo: <GanttChart />,
      link: "/projects4",
    },
    {
      title: "Task",
      insideTitle: "1 Task",
      logo: <BookOpen />,
      link: "/task1",
    },
    {
      title: "Task",
      insideTitle: "2 Task",
      logo: <BookOpen />,
      link: "/task2",
    },
    {
      title: "Task",
      insideTitle: "3 Task",
      logo: <BookOpen />,
      link: "/task3",
    },
    {
      title: "Task",
      insideTitle: "4 Task",
      logo: <BookOpen />,
      link: "/task4",
    },
    {
      title: "Audience",
      insideTitle: "1 Audience",
      logo: <Users />,
      link: "/audience1",
    },
    {
      title: "Audience",
      insideTitle: "2 Audience",
      logo: <Users />,
      link: "/audience2",
    },
    {
      title: "Audience",
      insideTitle: "3 Audience",
      logo: <Users />,
      link: "/audience3",
    },
    {
      title: "Audience",
      insideTitle: "4 Audience",
      logo: <Users />,
      link: "/audience4",
    },
    {
      title: "Settings",
      insideTitle: "1 Settings",
      logo: <Settings />,
      link: "/settings1",
    },
    {
      title: "Settings",
      insideTitle: "2 Settings",
      logo: <Settings />,
      link: "/settings2",
    },
    {
      title: "Settings",
      insideTitle: "3 Settings",
      logo: <Settings />,
      link: "/settings3",
    },
    {
      title: "Settings",
      insideTitle: "4 Settings",
      logo: <Settings />,
      link: "/settings4",
    },
  ];
  return (
    <div className="w-full">
      <Accordion
        className={navbarToggle ? " block " : " flex flex-col justify-center"}
        type="single"
        collapsible
      >
        {menu.map((item, index) => (
          <AccordionItem key={index} className="w-full" value={`item-${index}`}>
            <AccordionTrigger navbarToggle={navbarToggle}>
              <div className="flex flex-row items-center ">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger
                      asChild
                      className={cn(
                        navbarToggle ? "mr-1 p-1" : "ml-2 p-1",
                        !navbarToggle &&
                          manuInside.map((itemInside, indexInside) => {
                            if (
                              itemInside.title === item.title &&
                              itemInside.link === pathName
                            ) {
                              return "bg-yellow-200 rounded-full  ";
                            }
                          })
                      )}
                    >
                      <div className="">{item.logo}</div>
                    </TooltipTrigger>

                    {manuInside.map((itemInside, indexInside) => {
                      if (
                        itemInside.title === item.title &&
                        itemInside.link === pathName
                      ) {
                        return (
                          <TooltipContent key={indexInside}>
                            {itemInside.insideTitle}
                          </TooltipContent>
                        );
                      }
                    })}
                  </Tooltip>
                </TooltipProvider>

                {navbarToggle && item.title}
              </div>
            </AccordionTrigger>
            {manuInside.map(
              (itemInside, indexInside) =>
                itemInside.title === item.title &&
                navbarToggle && (
                  <AccordionContent
                    key={indexInside}
                    className="border-l-2 ml-3 pl-2"
                  >
                    <Link
                      className={`${
                        itemInside.link == pathName
                          ? "bg-yellow-200"
                          : "hover:bg-gray-200 "
                      } flex hover:cursor-pointer p-2 rounded-xl items-center `}
                      href={itemInside.link}
                    >
                      {itemInside?.logo}
                      <p className="ml-1">
                        {navbarToggle && itemInside.insideTitle}
                      </p>
                    </Link>
                  </AccordionContent>
                )
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default NavbarMenuİtems;
