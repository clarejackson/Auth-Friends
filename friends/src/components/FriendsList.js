import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
  state = {
    friendsList: []
  };

  // componentDidMount() {
  //   this.getData();
  // };

  getData = () => {
    axiosWithAuth().get("/api/friends")
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
  };

  render() {
    return (
      <div>
        Hello
      </div>
    )
  }

}

export default FriendsList;