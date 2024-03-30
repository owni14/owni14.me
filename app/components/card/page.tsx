import { ICard } from "./types";
import Image from "next/image";
import { TbEyeSearch } from "react-icons/tb";
import { FaCode } from "react-icons/fa";
import "./styles.scss";

const Card = ({ src, alt, desc, link, code }: ICard) => {
    return (
        <div id="card">
            <div className="card-wrapper">
                <Image src={src} alt={alt} />
                <div className="back-of-card">
                    <p>{desc}</p>
                    <div>
                        <a target="_blank" href={link}>
                            <TbEyeSearch />
                        </a>
                        <a target="_blank" href={code}>
                            <FaCode />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
