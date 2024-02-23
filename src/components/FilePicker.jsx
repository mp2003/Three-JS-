import React from "react";
import CustomButton from "./CustomButton";
const FilePicker = ({ file, setFile, raedFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />

        <label htmlFor="file-upload" className="filepicker-label  ">
          {" "}
          Upload File
        </label>

        <p className="mt-2 text-gray-900 text-xm truncate">
          {file === "" ? "No File Selected" : file.name}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton
          type="outline"
          title="logo"
          handleClick={() => raedFile("logo")}
          customStyles="text-xs"
        />

        <CustomButton
          type="filled"
          title="Full"
          handleClick={() => raedFile("full")}
          customStyles="text-xs"
        />
      </div>
    </div>
  );
};

export default FilePicker;
