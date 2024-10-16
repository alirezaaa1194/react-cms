import { Button, Card, Skeleton } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { updateProduct } from "../../utils";
import { toast, ToastContainer } from "react-toastify";

export default function ProductNewInfo({ load, product }) {
  const [productNewName, setProductNewName] = useState("");
  const [inStock, setInStock] = useState("");
  const [isActive, setIsActive] = useState("");

  useEffect(() => {
    setProductNewName(product.name);
    setIsActive(product.status);
    setInStock(product.inStock);
  }, [product]);

  const updateProductInfo = (product) => {
    let datas = updateProduct(product.id, productNewName, isActive, inStock, product.price, product.profile).then((res) => {
      if (res.status === 500) {
        return "product updated successfully";
      }
    });

    toast.promise(datas, {
      pending: {
        render() {
          return "I'm loading";
        },
        icon: true,
      },
      success: {
        render({ data }) {
          return `${data}`;
        },
        icon: "🟢",
      },
      error: {
        render({ data }) {
          // When the promise reject, data will contains the error
          return <p>{data.message}</p>;
        },
      },
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="col-span-1 lg:col-span-2 rounded-lg p-4 shadow-primaryShadow flex items-center justify-between">
        {load ? (
          <>
            <div className="flex flex-col w-32">
              <span className="text-xs font-bold text-[#C7C2C4]">Product Name</span>
              <input type="text" id="name" onChange={(e) => setProductNewName(e.target.value)} value={productNewName || ""} className="text-[11px] mt-4 font-bold text-[#C7C2C4] pb-1 border-b border-b-[#C7C2C4] outline-none transition-all focus:text-black focus:border-b-black" />
              <span className="text-xs font-bold text-[#C7C2C4] mt-3">In Stock</span>
              <select id="" value={inStock} onChange={(e) => setInStock(e.target.value)} className="border-1 border-black/40 text-black/40 text-xs">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <span className="text-xs font-bold text-[#C7C2C4] mt-3">Active</span>
              <select name="" value={isActive} onChange={(e) => setIsActive(e.target.value)} id="" className="border-1 border-black/40 text-black/40 text-xs">
                <option value="active">active</option>
                <option value="paused">paused</option>
                <option value="vacation">vacation</option>
              </select>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <img src={product.profile} className="w-24 h-24 rounded-lg" alt="" />
                <label htmlFor="file-input" className="cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                  </svg>
                </label>
                <input type="file" className="hidden" id="file-input" />
              </div>
              <Button color="primary" className="h-6 rounded-md mt-8" onClick={() => updateProductInfo(product)}>
                Update
              </Button>
            </div>
          </>
        ) : (
          <>
            <Card className="flex flex-col justify-between w-32 rounded-none gap-y-3" style={{ boxShadow: "none" }} radius="lg">
              <Skeleton className="rounded-lg w-28">
                <div className="h-3 rounded-lg bg-default-300"></div>
              </Skeleton>
              <Skeleton className="rounded-lg w-16">
                <div className="h-3 rounded-lg bg-default-300"></div>
              </Skeleton>
              <Skeleton className="rounded-lg w-16">
                <div className="h-3 rounded-lg bg-default-300"></div>
              </Skeleton>

              <Skeleton className="w-32">
                <div className="h-5 w-4 bg-default-300"></div>
              </Skeleton>

              <Skeleton className="rounded-lg w-16">
                <div className="h-3 rounded-lg bg-default-300"></div>
              </Skeleton>

              <Skeleton className="w-32">
                <div className="h-5 w-4 bg-default-300"></div>
              </Skeleton>
            </Card>

            <Card className="flex flex-col rounded-none gap-8" style={{ boxShadow: "none" }} radius="lg">
              <div className="flex items-center gap-4">
                <Skeleton className="w-24 h-24 rounded-lg">
                  <div className="w-24 h-24 rounded-lg bg-default-300"></div>
                </Skeleton>
                <Skeleton className="rounded-full w-6 h-6">
                  <div className="w-6 h-6 rounded-full bg-default-300"></div>
                </Skeleton>
              </div>
              <Skeleton className="rounded-lg w-full">
                <div className="h-6 rounded-lg bg-default-300"></div>
              </Skeleton>
            </Card>
          </>
        )}
      </div>
    </>
  );
}
