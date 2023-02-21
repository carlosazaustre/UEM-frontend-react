import { useConfigContext } from "./ConfigContext";

export function ConfigForm() {
  const { config, updateSession, updatePrivacy } = useConfigContext();

  return (
    <>
      <p>Session time: {config.sessionTime}</p>
      <input
        type="number"
        onChange={(e) => updateSession(e.target.value)}
      ></input>
      <p>Privacy: {config.privacy}</p>
      <select onChange={(e) => updatePrivacy(e.target.value)}>
        <option value="public">Public</option>
        <option value="private">Private</option>
      </select>
    </>
  );
}
