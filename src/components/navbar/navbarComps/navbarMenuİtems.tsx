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
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";
const NavbarMenuİtems = () => {
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
    },
    {
      title: "Home",
      insideTitle: "2 Home",
    },
    {
      title: "Home",
      insideTitle: "3 Home",
    },
    {
      title: "Home",
      insideTitle: "4 Home",
    },
    {
      title: "Dashboard",
      insideTitle: "1 Dashboard",
    },
    {
      title: "Dashboard",
      insideTitle: "2 Dashboard",
    },
    {
      title: "Dashboard",
      insideTitle: "3 Dashboard",
    },
    {
      title: "Dashboard",
      insideTitle: "4 Dashboard",
    },
    {
      title: "Projects",
      insideTitle: "1 Projects",
    },
    {
      title: "Projects",
      insideTitle: "2 Projects",
    },
    {
      title: "Projects",
      insideTitle: "3 Projects",
    },
    {
      title: "Projects",
      insideTitle: "4 Projects",
    },
    {
      title: "Task",
      insideTitle: "1 Task",
    },
    {
      title: "Task",
      insideTitle: "2 Task",
    },
    {
      title: "Task",
      insideTitle: "3 Task",
    },
    {
      title: "Task",
      insideTitle: "4 Task",
    },
    {
      title: "Audience",
      insideTitle: "1 Audience",
    },
    {
      title: "Audience",
      insideTitle: "2 Audience",
    },
    {
      title: "Audience",
      insideTitle: "3 Audience",
    },
    {
      title: "Audience",
      insideTitle: "4 Audience",
    },
    {
      title: "Settings",
      insideTitle: "1 Settings",
    },
    {
      title: "Settings",
      insideTitle: "2 Settings",
    },
    {
      title: "Settings",
      insideTitle: "3 Settings",
    },
    {
      title: "Settings",
      insideTitle: "4 Settings",
    },
  ];
  return (
    <Accordion
      className="flex flex-col w-full justify-start"
      type="single"
      collapsible
    >
      {menu.map((item, index) => (
        <AccordionItem key={index} className="w-full" value={`item-${index}`}>
          <AccordionTrigger>
            <div className="flex flex-row ">
              <div className="mr-2">{item.logo}</div>
              {item.title}
            </div>
          </AccordionTrigger>
          {manuInside.map(
            (itemInside, indexInside) =>
              itemInside.title === item.title && (
                <AccordionContent
                  key={indexInside}
                  className="border-l-2 ml-3 pl-2"
                >
                  <div className="hover:bg-gray-200 hover:cursor-pointer p-2 rounded-xl ">
                    {itemInside.insideTitle}
                  </div>
                </AccordionContent>
              )
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default NavbarMenuİtems;
