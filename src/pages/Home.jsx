import React, { useEffect, useState } from "react";
import StatisticsBox from "../components/Home/StatisticsBox";
import StatisticsSkeleton from "../components/Home/StatisticsSkeleton";
import Analytics from "../components/Home/Analytics";
import NewJoinMembers from "../components/Home/NewJoinMembers";
import LatestTransactions from "../components/Home/LatestTransactions";
export default function Home() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 500);
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-12">
        {load ? (
          <>
            <StatisticsBox title="Revanue" price="2,415" statistics="-11.4" profit={false} />
            <StatisticsBox title="Sales" price="4,415" statistics="-1.4" profit={false} />
            <StatisticsBox title="Revanue" price="2,225" statistics="+2.4" profit={true} />
          </>
        ) : (
          <>
            <StatisticsSkeleton />
            <StatisticsSkeleton />
            <StatisticsSkeleton />
          </>
        )}
      </div>
      <Analytics load={load} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <NewJoinMembers />
        <LatestTransactions />
      </div>
    </div>
  );
}
