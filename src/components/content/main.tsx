import React from "react";

import ContentCard from "./content-comps/content-card";
import DataTable from "./content-comps/dataTable";
import { ScrollArea } from "../ui/scroll-area";

const ContentMain = () => {
  return (
    <div className="flex flex-col ">
      <h1 className="text-5xl font-bold mb-4 mt-7">Custumers</h1>
      <ContentCard />
      <DataTable />
    </div>
  );
};

export default ContentMain;
