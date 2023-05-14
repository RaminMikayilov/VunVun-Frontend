import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import FileSvg from '../../assets/SahibkarOl/btnicon.svg'
const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};


function MyDropzone(props) {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);
  
  return (
    <section className="container cursor-pointer">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <button type='button' className='flex gap-x-2 rounded-[4px] p-[10px] items-center border-[1px] text-base border-btn-orange text-btn-orange'>
          <img src={FileSvg} />
          Şəkli yükləyin
        </button>
      </div>
      <aside style={thumbsContainer} className='450:!justify-center'>
        {thumbs}
      </aside>
    </section>
  );
}
export default MyDropzone