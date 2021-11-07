import { useEffect, useState } from "react";

function Content() {
  const [avata, setAvata] = useState();

  useEffect(() => {
    return () => {
      avata && URL.revokeObjectURL(avata.preview);
    };
  }, [avata]);

  const chooseFile = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvata(file);
  };

  return (
    <>
      <input type="file" onChange={chooseFile} />
      {avata && <img src={avata.preview} alt="" width="80%"></img>}
    </>
  );
}
export default Content;
