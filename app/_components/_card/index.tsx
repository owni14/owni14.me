import { ICard } from "./types";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";
import Tag from "../_tag";
import "./styles.scss";

const Card = ({ src, alt, title, desc, tags, link, code }: ICard) => {
    return (
        <div id="card">
            <div className="card-detail">
                <Image src={src} alt={alt} />
                <div className="info">
                    <p className="project-title">{title}</p>
                    <div className="text-area">
                        <p>{desc}</p>
                        <Tag tags={tags} />
                    </div>
                    <div className="link-area">
                        <div className="link-detail">
                            <FaLink />
                            <a target="_blank" href={link}>
                                Live Preview
                            </a>
                        </div>
                        <div className="link-detail">
                            <FaGithub />
                            <a target="_blank" href={code}>
                                View Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
