import Image from "next/image";
import "./styles.scss";
import Me from "@public/images/me.png";

const About = () => {
    return (
        <div id="about">
            <Image src={Me} alt="me.png" />
            <div className="text-wrapper">
                <div className="link-key">About</div>
                <p className="main-text">{"안녕하세요!\n저는 프론트엔드 개발자 김민우입니다."}</p>
                <p className="sub-text">
                    {
                        "항상 사용자 입장에 서서 UI/UX측면에서 더 좋은 성능을 내기위해 노력하고 있으며,\n디자이너 및 기획자와 끊임없이 소통을 하고 있습니다."
                    }
                </p>
            </div>
        </div>
    );
};

export default About;
