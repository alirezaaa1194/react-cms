import React from "react";
import { Skeleton } from "@nextui-org/skeleton";
import { Card } from "@nextui-org/react";

export default function AnalyticsSkeleton() {
  return (
    <Card className="flex flex-col justify-between rounded-lg shadow-none" radius="lg">
      <Skeleton className="w-full rounded-lg">
        <div className="h-52 w-full rounded-lg bg-default-200"></div>
      </Skeleton>
    </Card>
  );
}
