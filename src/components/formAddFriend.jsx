/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./button";
// import Friend from "./friend";
export default function Form({onAddFriends}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleName(e) {
    setName(e.target.value);
  }

  function handleImage(e) {
    setImage(e.target.value);
  }

    function handleSubmit(e) {
        e.preventDefault()
        
        if(!name || !image) return

        const id = crypto.randomUUID()

        const newFriend = {
            id,
            name,
            image: `${image}?=${id}`,
            balance: 0,
        }

        // console.log(newFriend)
        onAddFriends(newFriend)

        setName("")
        setImage("https://i.pravatar.cc/48?u=499476");

  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form-add-friend">
        <label>👫Friend name</label>
        <input type="text" value={name} onChange={handleName} />

        <label>🌄 Image URL</label>
        <input type="text" value={image} onChange={handleImage} />

        <Button>Add</Button>
      </form>
    </>
  );
}
