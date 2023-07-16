import React from 'react'
import { useDropzone } from 'react-dropzone'

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
    <div className="px-6 pt-5 pb-6 border-3 border-border border-dashed bg-main rounded-md cursor-pointer">

    </div>
    </div>
  )
}

export default Uploder;