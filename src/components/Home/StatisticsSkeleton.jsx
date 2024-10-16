import React from "react";
import { Skeleton } from "@nextui-org/skeleton";
import { Card } from "@nextui-org/react";

export default function StatisticsSkeleton() {
  return (
    <Card className="flex flex-col justify-between p-6 rounded-lg shadow-primaryShadow" radius="lg">
      <Skeleton className="rounded-lg w-24 mb-3">
        <div className="h-4 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="flex items-center my-3">
        <Skeleton className="w-24 rounded-lg">
          <div className="h-6 w-24 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-1/5 rounded-lg ml-6 mr-2">
          <div className="h-4 w-1/5 rounded-lg bg-default-200"></div>
        </Skeleton>
      </div>
      <Skeleton className="w-4/5 rounded-lg mt-3">
        <div className="h-3 w-4/5 rounded-lg bg-default-300"></div>
      </Skeleton>
    </Card>
  );
}
