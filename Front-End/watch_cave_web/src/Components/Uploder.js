import React from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUploadCloud } from 'react-icons/fi';

function Uploder() {
  const {getRootProps, getInprops} = useDropzone({
    multiple:false,
    maxSize:100000,
    onDrop:(acceptedFiles)=>{
      alert(acceptedFiles[0].name);
    },
  });
  return (
    <div className="w-full text-center">
      <div 
      {...getRootProps()}
      className="px-6 py-8 border-3 border-border border-dashed bg-main rounded-md cursor-pointer">

        <input {...getRootProps()}/>
        <span className="mx-auto flex-colo text-subMain text-3xl">
          <FiUploadCloud/>
        </span>

        <p className="text-sm mt-2">
        Drag Your image here
        </p>
        <em className="text-xs text-border">
            (only .jpg and .png files will be accepted)
        </em>

     </div>
    </div>
  )
}

export default Uploder;