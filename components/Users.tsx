"use client"
import axios from "axios";
import React from "react";

export default async function Users() {
    const response = await axios.get("https://assessment-api-biay.onrender.com/users");
    const users = response.data

  return (
    <div className="flex">
      {users.map((user:any) => (
        <div key={user.id} className="user-card">
          <div>
            <img src="pp.png" alt="" />
          </div>
          <div>
            <h1>{user.username}</h1>
            <h1>{user.email}</h1>
          </div>
          <div>{user.email}</div>
          <div>{user.role}</div>
          <div>edit</div>
          <div>delete</div>
        </div>
      ))}
    </div>
  );
}