<<<<<<< HEAD
import { useEffect, useRef, useState } from 'react';
import ImageAdd from '../../assets/images/ic_plus.png';
=======
import { useEffect, useRef, useState } from "react";
import ImageAdd from "../../assets/images/ic_plus.png";
>>>>>>> 80e16dd133dfcef5843560c738d0543da835110b

function FileInput({ name, value, onChange }) {
  const [preview, setPreview] = useState();
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

<<<<<<< HEAD
    inputNode.value = '';
=======
    inputNode.value = "";
>>>>>>> 80e16dd133dfcef5843560c738d0543da835110b
    onChange(name, null);
  };

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview();
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return (
    <div>
      <img src={preview} alt="이미지 미리보기" />
      <input
        type="file"
        id="imgFile"
        accept="image/png, image/jpeg"
        onChange={handleChange}
        ref={inputRef}
      />
      <label htmlFor="imgFile">
        <img src={ImageAdd} alt="이미지 등록" />
        이미지 등록
      </label>
      {value && <button onClick={handleClearClick}>X</button>}
    </div>
  );
}

export default FileInput;
