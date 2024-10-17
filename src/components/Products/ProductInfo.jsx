import { Card, Skeleton } from "@nextui-org/react";
import React from "react";

export default function ProductInfo({ load, product }) {
  return (
    <div className="col-span-1 rounded-lg p-4 shadow-primaryShadow flex flex-col">
      {load ? (
        <>
          <div className="flex items-center gap-4">
            <img src={product.profile} className="w-12 h-12 rounded-full" alt="" />
            <span className="text-xs font-bold">{product.name}</span>
          </div>
          <ul className="my-4">
            <li className="flex items-center gap-14">
              <span className="text-sm w-14">id: </span>
              <span className="text-sm text-[#C7C2C4]">{product.id}</span>
            </li>
            <li className="flex items-center gap-14">
              <span className="text-sm w-14">price: </span>
              <span className="text-sm text-[#C7C2C4]">{product.price}</span>
            </li>
            <li className="flex items-center gap-14">
              <span className="text-sm w-14">active: </span>
              <span className="text-sm text-[#C7C2C4]">{product.status}</span>
            </li>
            <li className="flex items-center gap-14">
              <span className="text-sm w-14">is stock: </span>
              <span className="text-sm text-[#C7C2C4]">{product.isStock}</span>
            </li>
          </ul>
        </>
      ) : (
        <Card className="flex flex-col justify-between rounded-lg" style={{ boxShadow: "none" }} radius="lg">
          <div className="flex items-center gap-4">
            <Skeleton className="w-12 h-12 rounded-full">
              <div className="h-4 rounded-lg bg-default-300"></div>
            </Skeleton>
            <Skeleton className="rounded-lg w-24 mb-3">
              <div className="h-3 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
          <div className="flex items-center my-3">
            <ul className="my-4 flex flex-col gap-y-4">
              <li className="flex items-center gap-14">
                <Skeleton className="w-14 rounded-lg">
                  <div className="h-2 w-14 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-14 rounded-lg">
                  <div className="h-2 w-14 rounded-lg bg-default-200"></div>
                </Skeleton>
              </li>
              <li className="flex items-center gap-14">
                <Skeleton className="w-14 rounded-lg">
                  <div className="h-2 w-14 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-14 rounded-lg">
                  <div className="h-2 w-14 rounded-lg bg-default-200"></div>
                </Skeleton>
              </li>
              <li className="flex items-center gap-14">
                <Skeleton className="w-14 rounded-lg">
                  <div className="h-2 w-14 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-14 rounded-lg">
                  <div className="h-2 w-14 rounded-lg bg-default-200"></div>
                </Skeleton>
              </li>
            </ul>
          </div>
        </Card>
      )}
    </div>
  );
}
