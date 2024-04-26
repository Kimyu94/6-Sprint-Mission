import { useState } from "react";
import FileInput from "./FileInput";
import Inner from "../../components/Inner";
import Label from "../../components/Label";

function AddItem() {
  const [values, setValues] = useState({
    imgFile: null,
  });

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <Inner>
      <form>
        <h2>상품 등록하기</h2>
        <button type="submit">등록</button>

        <Label>상품 이미지</Label>
        <FileInput
          name="imgFile"
          value={values.imgFile}
          onChange={handleChange}
        />
        <Label>상품명</Label>
        <input
          type="text"
          name="item_name"
          placeholder="상품명을 입력해주세요"
        />
        <Label>상품 소개</Label>
        <textarea name="item_content"></textarea>

        <Label>판매가격</Label>
        <input
          type="number"
          name="item_price"
          placeholder="판매 가격을 입력해주세요"
        />

        <Label>태그</Label>
        <input type="text" name="item_tag" placeholder="태그를 입력해주세요" />
      </form>
    </Inner>
  );
}

export default AddItem;
