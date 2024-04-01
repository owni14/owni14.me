import { ICategory } from "./types";
import "./styles.scss";

const Category = ({ category, title }: ICategory) => {
    return (
        <div id="category">
            <div className="category-card">{category}</div>
            {title && <p className="title">{title}</p>}
        </div>
    );
};

export default Category;
