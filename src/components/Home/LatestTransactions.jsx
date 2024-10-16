import React, { useEffect, useState } from "react";
import Transactions from "./Transactions";
import TransactionsSkeleton from "./TransactionsSkeleton";
import { getAllUsers } from "../../utils";

export default function LatestTransactions() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    getAllUsers().then((res) => {
      setUser(res);
    });
  }, []);

  return (
    <div className="col-span-1 lg:col-span-2 flex flex-col p-6 gap-y-6 rounded-lg shadow-primaryShadow">
      <h2 className="text-xl font-bold">Latest transactions</h2>
      <div className="flex items-center">
        <span className="text-sm font-bold w-2/5">Customers</span>
        <span className="text-sm font-bold w-1/5">Date</span>
        <span className="text-sm font-bold w-1/5">Amount</span>
        <span className="text-sm font-bold w-1/5">Status</span>
      </div>
      <ul className="flex flex-col gap-5">
        {users.length ? (
          users.map((user) => <Transactions key={user.id} img={user.profile} name={user.username} date="2 june 2024" price="$2.56" status={user.status} />)
        ) : (
          <>
            <TransactionsSkeleton />
            <TransactionsSkeleton />
            <TransactionsSkeleton />
          </>
        )}
      </ul>
    </div>
  );
}
