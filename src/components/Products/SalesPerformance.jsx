import React from "react";
import SalePerformanceChart from "./SalePerformanceChart";
import { Card, Skeleton } from "@nextui-org/react";

export default function SalesPerformance({load}) {
  return (
    <div className="col-span-1 rounded-lg p-4 shadow-primaryShadow flex flex-col">
      <span className="font-bold text-black/70 mb-3">Sales Performance</span>
      {load ? (
        <SalePerformanceChart />
      ) : (
        <Card className="flex flex-col h-[120px] justify-between rounded-lg" radius="lg" style={{ boxShadow: "none" }}>
          <Skeleton className="rounded-lg w-full h-full">
            <div className="h-full rounded-lg bg-default-300"></div>
          </Skeleton>
        </Card>
      )}
    </div>
  );
}
