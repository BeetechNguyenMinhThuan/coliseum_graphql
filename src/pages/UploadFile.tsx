import { useState } from "react";
import { useMutation } from "@apollo/client";
import { SINGLE_UPLOAD } from "@/graphql-client/user/mutations";



const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [uploadFile] = useMutation(SINGLE_UPLOAD);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await uploadFile({ variables: { file } });
      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
console.log(file);

  return (
    <div>
      <h2>Upload File</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadFile;
