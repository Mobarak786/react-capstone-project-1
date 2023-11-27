import { useState } from "react";
import { useNavigate } from "react-router-dom";
import alrt from "../assets/icons/alrt.png";
import supericon from "../assets/icons/Superapp.png";
import { imageArray } from "../Functions";
import CategoryBox from "../components/category/CategoryBox";

const Category = () => {
  const [selected, setSelected] = useState([]);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const handleClick = (item) => {
    setSelected(selected.filter((e) => e != item));
  };
  const handleNext = () => {
    selected.length < 3 && setShowError(true);
    selected.length >= 3 &&
      localStorage.setItem("category", JSON.stringify(selected));
    selected.length >= 3 && navigate("/home");
  };
  return (
    <div className="category-page">
      <div className="cate-part-1">
        <img
          id="supericon"
          src={supericon}
          alt="supericon"
          width={200}
          height={50}
        />
        <h1>Choose your entertainment category</h1>
        <div className="selected-cat-div">
          {selected?.map((item) => (
            <div key={item} className="selected-category">
              <h2>{item}</h2>{" "}
              <button onClick={() => handleClick(item)}>X</button>
            </div>
          ))}
        </div>
        {showError && (
          <span className="error">
            <img src={alrt} alt="alrt" width={15} height={15} /> Minimum 3
            category required
          </span>
        )}
      </div>
      <div className="cate-part-2">
        {imageArray?.map((item) => (
          <CategoryBox
            key={item.title}
            item={item}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
        <div className="cat-page-next-btn">
          <button onClick={handleNext}>Next Page</button>
        </div>
      </div>
    </div>
  );
};

export default Category;
