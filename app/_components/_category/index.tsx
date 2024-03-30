import { ICategory } from "./types";
import "./styles.scss";

const Category = ({ category }: ICategory) => {
    return <div id="category">{category}</div>;
};

export default Category;
