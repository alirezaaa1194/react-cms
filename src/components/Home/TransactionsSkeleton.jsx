import React from "react";
import { Skeleton } from "@nextui-org/skeleton";
import { Card } from "@nextui-org/react";

export default function TransactionsSkeleton() {
  return (
    <Card className="flex flex-row items-center shadow-none" style={{ boxShadow: "none" }}>
      <div className="flex items-center gap-3 w-2/5">
        <Skeleton className="w-12 h-12 rounded-full">
          <div className="w-12 h-12 rounded-full bg-default-300"></div>
        </Skeleton>
        <Skeleton className="w-20 h-5 rounded-lg">
          <div className="w-20 h-5 rounded-full bg-default-300"></div>
        </Skeleton>
      </div>
      <Skeleton className="w-1/5 h-5 rounded-lg mx-4">
        <div className="h-5 rounded-full bg-default-300"></div>
      </Skeleton>
      <Skeleton className="w-1/5 h-5 rounded-lg">
        <div className="h-5 rounded-full bg-default-300"></div>
      </Skeleton>
      <Skeleton className="w-1/5 h-5 rounded-lg mx-4">
        <div className="h-5 rounded-full bg-default-300"></div>
      </Skeleton>
    </Card>
  );
}
