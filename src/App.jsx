import { useState } from "react";
import Friend from "./components/friend";
import FriendLists from "./components/friendList";
import Button from "./components/button";
import Form from "./components/formAddFriend";
import BillData from "./components/formSplitBill";
import initialFriends from "./Data";

export default function App() {
  const [isFormVisible, setFormVisible] = useState(false);
  // const [handleBillData, setBillData] = useState(false)
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const showForm = () => {
    setFormVisible((show) => !show);
  };

  //  const showData = () => {
  //    setBillData((show) => !show);
  //  };

  function handleAddFriends(friend) {
    setFriends((friends) => [...friends, friend]);
    setFormVisible(false);
  }

  function handleSelection(friend) {
    // setSelectedFriend(friend);
    setFormVisible(false)
    if (!friend) return

     setSelectedFriend((prev) => (prev?.id === friend.id ? null : friend));
  }

  // const isSelected = selectedFriend && selectedFriend.id === friends.id;

  // function handleSelection(friend) {
  //   setSelectedFriend((prevSelected) => 
  //     prevSelected === friend.id ? null : friend.id
  // )
  // // setSelectedFriend(friend);
  // }

  function handleSplitBill(value){
    setFriends((friends) => (
      friends.map((friend) => (friend.id === selectedFriend?.id ? {...friend, balance: friend.balance + value } : friend  ))
    ))
    // console.log(value)

    setSelectedFriend(null)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendLists
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
          // isSelected={isSelected}
        />
        {/* <FriendLists>
          {friends.map((friend) => (
            <Friend
              friend={friend}
              key={friend.id}
              // id={friend.id}
              isSelected={isSelected}
              onSelection={handleSelection}
              // onSelection={onSelection}
              // selectedFriend={selectedFriend}
            /> */}
        {/* ))}
        </FriendLists> */}

        {isFormVisible && <Form onAddFriends={handleAddFriends} />}

        <Button className="button select-btn" onClick={showForm}>
          {isFormVisible ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <BillData selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />
      )}
    </div>
  );
}
