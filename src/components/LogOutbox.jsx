import React from "react";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const LogOutbox = () => {
  const router = useRouter();
  // Function to sign out the current user
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        // Sign-out successful
        router.push("/");
        console.log("User signed out");
        // You can also redirect the user to a different page if needed.
        // For example, if using React Router:
        // history.push('/login');
      })
      .catch((error) => {
        // An error occurred while signing out
        console.error("Sign-out error:", error);
      });
  };
  return (
    <div className="absolute bottom-[5rem] left-6 sm:left-auto sm:right-6 p-6 font-extrabold bg-[#cecee0] rounded-2xl shadow-md">
      <div className="text-lg mb-2">Add an existing account</div>
      <div className="text-lg cursor-pointer" onClick={handleSignOut}>
        Logout @HassanHussain
      </div>
    </div>
  );
};

export default LogOutbox;
