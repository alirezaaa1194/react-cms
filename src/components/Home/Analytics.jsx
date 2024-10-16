import React from "react";
import AnalyticsChart from "./AnalyticsChart";
import AnalyticsSkeleton from "./AnalyticsSkeleton";

export default function Analytics({load}) {
  return (
    <div className="flex flex-col p-6 gap-y-6 rounded-lg shadow-primaryShadow">
      <h2 className="font-bold">User Anaics</h2>
      {load ? <AnalyticsChart /> : <AnalyticsSkeleton />}
    </div>
  );
}
