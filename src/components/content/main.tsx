import React from "react";

import ContentCard from "./content-comps/content-card";
import DataTable from "./content-comps/dataTable";
import { ScrollArea } from "../ui/scroll-area";

const Content = () => {
  return (
    <div className="h-screen w-full mx-4 ">
      <ScrollArea className="h-full">
        <h1 className="text-5xl font-bold mb-4 mt-7">Custumers</h1>
        <ContentCard />
        <DataTable />
      </ScrollArea>
    </div>
  );
};

export default Content;
