import { ITag } from "./types";
import "./styles.scss";

const Tag = ({ tags }: ITag) => {
    return (
        <div id="tag">
            {tags.map(tag => (
                <div key={tag} className="tag-detail">
                    {tag}
                </div>
            ))}
        </div>
    );
};

export default Tag;
