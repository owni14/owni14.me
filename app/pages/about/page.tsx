import Image from "next/image";
import Me from "@public/images/me.png";
import Category from "@app/_components/_category";
import "./styles.scss";

const About = () => {
    return (
        <section id="about">
            <div className="image-wrapper">
                <Image src={Me} alt="me.png" />
            </div>
            <div className="text-wrapper">
                <Category category="About" />
                <div className="text-area">
                    <p className="greet">{"안녕하세요!"}</p>
                    <p className="introduce">{"프론트엔드 개발자 김민우입니다."}</p>
                    <p className="desc">{"긍정적 사고와 책임감을 바탕으로 즐기면서 개발하고 있습니다."}</p>
                </div>
            </div>
        </section>
    );
};

export default About;
