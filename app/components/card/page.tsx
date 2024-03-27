import { ICard } from "./types";
import Image from "next/image";
import "./styles.scss";

const Card = ({ src, alt }: ICard) => {
    return (
        <div id="card">
            <div className="card-wrapper">
                <Image src={src} alt={alt} />
            </div>
        </div>
    );
};

export default Card;
