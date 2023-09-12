import { useState, useEffect } from "react";
import { auth } from "../../firebaseConfig";
import Image from "next/image";
export const DisplayName = () => {
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    // add firebase authentication to get  the user display name
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // user is signed in
        setDisplayName(user.displayName || "No Display Name");
      } else {
        // user is signout
        setDisplayName("");
      }
    });
    return () => unsubscribe(); // when listenser is unmount
  }, []);
  return (
    <div>
      <p>{displayName}</p>
    </div>
  );
};

export const ProfilePhoto = () => {
  const [photoURL, setPhotoURL] = useState("");
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setPhotoURL(user.photoURL || "");
      } else {
        setPhotoURL("");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div>
      <Image src={photoURL} alt="Profile Photo" width={30} height={30} />
    </div>
  );
};
