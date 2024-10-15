import Friend from "./friend";

export default function FriendList({friends, onSelection,  selectedFriend}) {
    // const friends = initialFriends;
  return (
    <>
          {/* <ul>
      <Friends initialFriends={initialFriends}/>
          </ul> */}

          <ul>
              {friends.map((friend) => (
                <Friend
                  friend={friend}
                  key={friend.id}
                  // id={friend.id}
                  isSelected={selectedFriend?.id === friend.id}
                  onSelection={onSelection}
                  // selectedFriend={selectedFriend}
                />
              ))}
        {/* {children} */}
        {/* {isSelected} */}
          </ul>
    </>
  );
}
