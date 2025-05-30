import React, { MouseEvent, ChangeEvent, JSX, useState } from "react";

type Props = {};

const Search: React.FC<Props> = (props: Props): JSX.Element => {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };

  return (
    <div>
      <input value={search} onChange={(e) => handleChange(e)} />
      <button onClick={onClick}>Save</button>
    </div>
  );
};

export default Search;
