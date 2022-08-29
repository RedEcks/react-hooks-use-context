import React, { useContext } from "react";

function ThemedButton({ theme }) {
  const user = useContext(useContext);

  return <button className={theme} {...user} />;
}

export default ThemedButton;
