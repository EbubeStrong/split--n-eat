/* eslint-disable react/prop-types */

// export default function Friends({ initialFriends }) {
//   return (
//       <div>
//           <li>
//       {initialFriends.map((friend, index) => (
//           <div key={friend.id}>
//           <img src={friend.image} alt={friend.name} />
//           <h3>{friend.name}</h3>
//         </div>
//       ))}
//           </li>

//     </div>
//   );
// }
// import { useState } from "react";
import Button from "./button";
export default function Friend({  friend, onSelection, isSelected }) {

  const onSelected = () => {
      // if (isSelected) {
      //   // Deselect the friend if they are already selected
      //   onSelection(null); // Or pass an empty object if needed
      // } else {
      //   // Select the friend
      //   onSelection(friend);
    // }
    onSelection( friend)
  };


  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt="{friend.name}" />
      <h3>{friend.name}</h3>
      {/* {`${friend.balance}` < 0 ? `You owe ${friend.name}` : `${friend.balance}` > 0 ? `${friend.name} owes you ${friend.balance}` : `You and ${friend.name} are even`} */}

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}€
        </p>
      )}

      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button onClick={onSelected}>
        {isSelected ? "Close" : "Select"}
        {/* close */}
      </Button>
    </li>
  );
}
