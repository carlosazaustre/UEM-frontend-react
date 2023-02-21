import { useAuthContext } from "./AuthContext";

export function UserComponent() {
  const { auth, updateUsername } = useAuthContext();

  return (
    <>
      <p>Hey {auth.username}!</p>
      <input type="text" onChange={(e) => updateUsername(e.target.value)} />
    </>
  );
}
