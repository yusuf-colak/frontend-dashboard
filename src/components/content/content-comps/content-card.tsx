import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GanttChartSquare, Minus, Plus, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const ContentCard = () => {
  const cardArray = [
    {
      cardLogo: <Users />,
      cardTitle: "Total customers",
      cardCount: "2420",
      cardPercentage: "20",
      bgColor: "bg-red-200",
    },
    {
      cardLogo: <GanttChartSquare />,
      cardTitle: "Members",
      cardCount: "1210",
      cardPercentage: "15",
      bgColor: "bg-blue-200",
    },
    {
      cardLogo: <Users />,
      cardTitle: "Total customers",
      cardCount: "2420",
      cardPercentage: "20",
      bgColor: "bg-green-200",
    },
    {
      cardLogo: <GanttChartSquare />,
      cardTitle: "Members",
      cardCount: "1210",
      cardPercentage: "15",
      bgColor: "bg-yellow-200",
    },
  ];
  return (
    <div className="flex flex-row flex-wrap justify-center ">
      {cardArray.map((card, index) => (
        <Card
          key={index}
          className={cn(
            `${card.bgColor}`,
            "mr-3 w-1/4 min-w-[270px] max-w-[350px]"
          )}
        >
          <CardHeader>
            <CardTitle>{card.cardLogo}</CardTitle>
            <CardDescription className="text-black">
              {card.cardTitle}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-between">
            <p className="text-4xl">{card.cardCount}</p>
            <p className="flex items-center">
              {Number(card.cardPercentage) > 0 ? <Plus /> : <Minus />}
              <span className="text-lg">{card.cardPercentage}%</span>
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ContentCard;
