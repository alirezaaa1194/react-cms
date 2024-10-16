import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/react";
import { RadioGroup, Radio, Input } from "@nextui-org/react";
import { createUser } from "../utils";
import { PlusIcon } from "../components/icons/icons";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewUserSkeleton from "../components/Products/NewUserSkeleton";

export default function NewUser() {
  const [load, setLoad] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState(["yes", "no"]);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 500);
  }, []);

  const createUserHandler = () => {
    if (username !== "" && email !== "" && phone !== "" && gender !== "" && fullName !== "" && password !== "" && address !== "" && Array.from(status).join(", ") != "") {
      const datas = createUser(username, email, phone, gender, fullName, password, address, Array.from(status).join(", ")).then((res) => {
        if (res.status === 500) {
          setUsername("");
          setEmail("");
          setPhone("");
          setFullName("");
          setPassword("");
          setAddress("");
          setGender("");
          setStatus("");

          return "user added successfully";
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
    } else {
      const resolveWithSomeData = new Promise((resolve, reject) => reject("please fill fields"), 3000);
      toast.promise(resolveWithSomeData, {
        error: {
          render({ data }) {
            return <p>{data}</p>;
          },
        },
      });
    }
  };
  return (
    <div>
      <ToastContainer />

      <div className="flex w-full max-w-xs flex-col gap-2"></div>
      <h2 className="text-2xl font-bold">New User</h2>

      {load ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col mt-2">
              <Input type="text" value={username} onChange={(e) => setUsername(e.target.value.trim())} label="Username" />
            </div>
            <div className="flex flex-col mt-2">
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value.trim())} label="Email" />
            </div>
            <div className="flex flex-col mt-2">
              <Input type="phone" value={phone} onChange={(e) => setPhone(e.target.value.trim())} label="Phone" />
            </div>

            <div className="flex flex-col mt-2">
              <RadioGroup className="text-sm text-[#C7C2C4] mb-2" label="Gender" value={gender} onValueChange={setGender}>
                <div className="flex gap-x-1 flex-wrap justify-evenly">
                  <Radio value="Male" className="text-sm text-red-400">
                    Male
                  </Radio>
                  <Radio value="Female" className="text-sm text-red-400">
                    Female
                  </Radio>
                  <Radio value="Other" className="text-sm text-red-400">
                    Other
                  </Radio>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col mt-2">
              <Input type="text" value={fullName} onChange={(e) => setFullName(e.target.value.trim())} label="FullName" />
            </div>
            <div className="flex flex-col mt-2">
              <Input type="text" value={password} onChange={(e) => setPassword(e.target.value.trim())} label="Password" />
            </div>
            <div className="flex flex-col mt-2">
              <Input type="text" value={address} onChange={(e) => setAddress(e.target.value.trim())} label="Address" />
            </div>

            <div className="flex flex-col mt-2">
              <Select label="Select an status active" selectedKeys={status} onSelectionChange={setStatus}>
                <SelectItem key="active">active</SelectItem>
                <SelectItem key="paused">paused</SelectItem>
                <SelectItem key="vacation">vacation</SelectItem>
              </Select>
            </div>
          </div>
          <div className="flex items-end">
            <Button className="bg-primary text-background px-10" endContent={<PlusIcon />} size="md" onClick={createUserHandler}>
              Add New User
            </Button>
          </div>
        </div>
      ) : (
        <NewUserSkeleton />
      )}
    </div>
  );
}
