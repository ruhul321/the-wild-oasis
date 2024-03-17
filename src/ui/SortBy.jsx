import { useSearchParams } from "react-router-dom";
import Select from "./Select";

export default function SortBy({ options }) {
  const [searchparams, setSearchParams] = useSearchParams();

  const currSortBy = searchparams.get("sortBy") || "";

  function handleChange(e) {
    //console.log(e.target.value);
    searchparams.set("sortBy", e.target.value);
    setSearchParams(searchparams);
  }

  return (
    <Select
      options={options}
      type="white"
      onchange={handleChange}
      value={currSortBy}
    />
  );
}
