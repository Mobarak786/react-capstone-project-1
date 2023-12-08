import React, { useEffect, useState } from "react";
import styles from "./categorybox.module.css";
const CategoryBox = ({ item, selected, setSelected }) => {
  const [isclicked, setIsclicked] = useState(false);
  useEffect(() => {
    if (isclicked) {
      setSelected([...selected, item.title]);
    } else {
      const newArray = selected.filter((val) => val !== item.title);
      setSelected(newArray);
    }
  }, [isclicked]);

  return (
    <div
      className={styles.category_box}
      style={
        selected[selected.indexOf(item.title)]
          ? { background: item.color, border: "4px solid green" }
          : { border: "none", background: item.color }
      }
      onClick={() => setIsclicked(!isclicked)}
    >
      <h3>{item.title}</h3>
      <img src={item.img} alt="photo" width={140} height={80} />
    </div>
  );
};

export default CategoryBox;
