import React from "react";
// import { axiosWithAuth } from "../utils/axiosWithAuth"

export default function NewFriend () {


  return (
    <div>
      <form>
        <label>Name</label>
          <input 
          type="text"
          name="name"
          />
        <label>Age</label>
          <input 
          type="number"
          name="age"
          />
        <label>Email</label>
          <input 
          type="email"
          name="email"
          />

        
      </form>
    </div>
  )
}
