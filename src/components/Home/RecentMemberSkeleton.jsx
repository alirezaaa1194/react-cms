import React from "react";
import { Skeleton } from "@nextui-org/skeleton";
import { Card } from "@nextui-org/react";

export default function RecentMemberSkeleton() {
  return (
    <Card className="flex flex-row items-center justify-between" style={{ boxShadow: "none" }}>
      <div className="w-12 h-12">
        <Skeleton className="w-12 h-12 rounded-full">
          <div className="w-12 h-12 rounded-full bg-default-300"></div>
        </Skeleton>
      </div>
      <div className="flex flex-col items-start gap-1">
        <Skeleton className="w-14 rounded-lg">
          <div className="h-3 w-14 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-20 rounded-lg">
          <div className="h-3 w-24 rounded-lg bg-default-200"></div>
        </Skeleton>
      </div>
      <Skeleton className="w-20 rounded-md">
        <div className="h-6 w-20 rounded-lg bg-default-300"></div>
      </Skeleton>
    </Card>
  );
}
