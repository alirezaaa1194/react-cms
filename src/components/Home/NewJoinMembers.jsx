import React, { useEffect, useState } from "react";
import RecentMember from "./RecentMember.jsx";
import RecentMemberSkeleton from "./RecentMemberSkeleton";
import { getAllUsers } from "../../utils";

export default function NewJoinMembers({ load }) {
  const [users, setUser] = useState([]);
  useEffect(() => {
    getAllUsers().then((res) => {
      setUser(res);
    });
  }, []);
  return (
    <div className="col-span-1 lg:col-span-1 flex flex-col p-6 gap-y-6 rounded-lg shadow-primaryShadow">
      <h2 className="text-xl font-bold">New Join Members</h2>
      <ul className="flex flex-col gap-5">
        {users.length ? (
          users.map((user) => <RecentMember key={user.id} img={user.profile} username={user.username} fullname={user.fullname} />)
        ) : (
          <>
            <RecentMemberSkeleton />
            <RecentMemberSkeleton />
            <RecentMemberSkeleton />
            <RecentMemberSkeleton />
          </>
        )}
      </ul>
    </div>
  );
}
