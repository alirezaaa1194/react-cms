import { Card, Skeleton } from "@nextui-org/react";
import React from "react";

export default function NewUserSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      <div className="flex flex-col gap-5">
        <Card className="flex flex-col justify-between rounded-medium shadow-none" radius="lg">
          <Skeleton className="w-full rounded-medium">
            <div className="h-14 w-full rounded-medium bg-default-200"></div>
          </Skeleton>
        </Card>
        <Card className="flex flex-col justify-between rounded-medium shadow-none" radius="lg">
          <Skeleton className="w-full rounded-medium">
            <div className="h-14 w-full rounded-medium bg-default-200"></div>
          </Skeleton>
        </Card>
        <Card className="flex flex-col justify-between rounded-medium shadow-none" radius="lg">
          <Skeleton className="w-full rounded-medium">
            <div className="h-14 w-full rounded-medium bg-default-200"></div>
          </Skeleton>
        </Card>
        <div className="flex flex-col gap-4">
          <Card className="w-14 flex flex-col justify-between rounded-medium shadow-none" radius="lg">
            <Skeleton className="w-14 rounded-medium">
              <div className="h-4 w-14 rounded-medium bg-default-200"></div>
            </Skeleton>
          </Card>
          <div className="flex gap-7 justify-center">
            <div className="flex gap-2 items-center">
              <Card className="w-6 flex flex-col justify-between rounded-full shadow-none" radius="full">
                <Skeleton className="w-6 rounded-full">
                  <div className="h-6 w-6 rounded-full bg-default-200"></div>
                </Skeleton>
              </Card>

              <Card className="w-14 h-4 flex flex-col justify-between rounded-sm shadow-none" radius="sm">
                <Skeleton className="w-14 h-6 rounded-sm">
                  <div className="w-14 h-6 rounded-sm bg-default-200"></div>
                </Skeleton>
              </Card>
            </div>
            <div className="flex gap-2 items-center">
              <Card className="w-6 flex flex-col justify-between rounded-full shadow-none" radius="full">
                <Skeleton className="w-6 rounded-full">
                  <div className="h-6 w-6 rounded-full bg-default-200"></div>
                </Skeleton>
              </Card>

              <Card className="w-14 h-4 flex flex-col justify-between rounded-sm shadow-none" radius="sm">
                <Skeleton className="w-14 h-6 rounded-sm">
                  <div className="w-14 h-6 rounded-sm bg-default-200"></div>
                </Skeleton>
              </Card>
            </div>
            <div className="flex gap-2 items-center">
              <Card className="w-6 flex flex-col justify-between rounded-full shadow-none" radius="full">
                <Skeleton className="w-6 rounded-full">
                  <div className="h-6 w-6 rounded-full bg-default-200"></div>
                </Skeleton>
              </Card>

              <Card className="w-14 h-4 flex flex-col justify-between rounded-sm shadow-none" radius="sm">
                <Skeleton className="w-14 h-6 rounded-sm">
                  <div className="w-14 h-6 rounded-sm bg-default-200"></div>
                </Skeleton>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <Card className="flex flex-col justify-between rounded-medium shadow-none" radius="lg">
          <Skeleton className="w-full rounded-medium">
            <div className="h-14 w-full rounded-medium bg-default-200"></div>
          </Skeleton>
        </Card>
        <Card className="flex flex-col justify-between rounded-medium shadow-none" radius="lg">
          <Skeleton className="w-full rounded-medium">
            <div className="h-14 w-full rounded-medium bg-default-200"></div>
          </Skeleton>
        </Card>
        <Card className="flex flex-col justify-between rounded-medium shadow-none" radius="lg">
          <Skeleton className="w-full rounded-medium">
            <div className="h-14 w-full rounded-medium bg-default-200"></div>
          </Skeleton>
        </Card>
        <Card className="flex flex-col justify-between rounded-medium shadow-none" radius="lg">
          <Skeleton className="w-full rounded-medium">
            <div className="h-14 w-full rounded-medium bg-default-200"></div>
          </Skeleton>
        </Card>
      </div>
      <div className="flex flex-col justify-end">
        <Card className="flex w-[202px] flex-col justify-between rounded-medium shadow-none" radius="lg">
          <Skeleton className="w-[202px] rounded-medium">
            <div className="h-10 w-[202px] rounded-medium bg-default-200"></div>
          </Skeleton>
        </Card>
      </div>
    </div>
  );
}
