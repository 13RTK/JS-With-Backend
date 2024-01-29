import { useEffect, useState } from "react";

const ConditionFilter = ({ onSearch }) => {
  const [queryName, setQueryName] = useState("");

  useEffect(() => {
    onSearch(queryName);
  }, [queryName]);

  return (
    <div>
      <input
        type="text"
        placeholder="username"
        className="input input-bordered w-full max-w-xs"
        onChange={(event) => setQueryName(event.target.value)}
      />
    </div>
  );
};
export default ConditionFilter;
