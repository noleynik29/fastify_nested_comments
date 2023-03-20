import React, { useState, useRef } from "react";

export function ImageUpload({ Icon, isActive, color, children, ...props }){
    const [image, setImage] = useState("");
    const inputFile = useRef(null);
  
    const handleFileUpload = e => {
      const { files } = e.target;
      if (files && files.length) {
        const filename = files[0].name;
  
        var parts = filename.split(".");
        const fileType = parts[parts.length - 1];
        console.log("fileType", fileType); //ex: zip, rar, jpg, svg etc.
  
        setImage(files[0]);
      }
    };
  
    const onButtonClick = () => {
      inputFile.current.click();
    };
  
    console.log("imageimage", image);
    return (
      <div>
        <input
          style={{ display: "none"}}
          // accept=".zip,.rar"
          ref={inputFile}
          onChange={handleFileUpload}
          type="file"
        />
        <button onClick={onButtonClick} className={`btn icon-btn ${isActive ? "icon-btn-active" : ""} 
        ${color || ""}`}
        {...props}>
            <span className={`${children != null ? "mr-1" : ""}`}>
                <Icon/>
            </span>
            {children}
        </button>
      </div>
    )
}
