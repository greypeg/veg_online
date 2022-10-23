import React from "react";
import TechnologyCard from "../components/Card";
import { trpc } from "../utils/trpc";

const Pricing = () => {
  const { data, isLoading } = trpc.example.getAll.useQuery();

  if (isLoading) return "Loading...";
  
  return (
    <div>
      Pricing
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <TechnologyCard
              name="Farmer"
              description="20$"
              documentation="hi"
            />
          </div>
          <div>
            <TechnologyCard
              name="Customer"
              description="20$"
              documentation="hi"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
