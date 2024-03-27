import Image from "next/image";
import "./styles.scss";
import Me from "@public/images/me.png";

const About = () => {
    return (
        <div id="about">
            <Image src={Me} alt="me.png" />
            <div className="text-wrapper">
                <div className="link-key">About</div>
                <div className="text-area">
                    <p className="text">{"안녕하세요!\n저는 프론트엔드 개발자 김민우입니다."}</p>
                    <p className="text">{"긍정적 사고와 책임감을 바탕으로 즐기면서 개발하고 있습니다."}</p>
                    <p className="text">
                        {
                            "조금씩 기록을 남기며 아는 부분과 모르는 부분을 회고하는 시간을 가지고 있으며 내용 공유를 통해 함께 성장하자는 마인드를 가지고 있습니다."
                        }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
