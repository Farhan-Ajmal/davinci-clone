import { RiHammerFill } from "react-icons/ri";
import Intro from "../../components/intro";
import { termsIntroData } from "../../data/termsIntroData";
import TermsContent from "../../components/termsContent";
import { userKeyInfoData } from "../../data/userKeyInfoData";
import { termsOfUseData } from "../../data/termsOfUseData";

const Terms = () => {
  return (
    <>
      <Intro
        heading1="Terms of"
        heading2="Service"
        information="More about terms of service. "
        icon={RiHammerFill}
        iconColor="text-[#CCCCCC]"
      />
      <div className="px-[9%] pt-20">
        {termsIntroData.map((termsIntro, index) => (
          <TermsContent
            key={index}
            intro={termsIntro.intro}
            bulletPoints={termsIntro.bulletPoints}
            para1={termsIntro.para1}
            para2={termsIntro.para2}
            para3={termsIntro.para3}
            para4={termsIntro.para4}
            emailPara={termsIntro.emailPara}
            email={termsIntro.email}
          />
        ))}
        {userKeyInfoData.map((userKeyInfo, index) => (
          <TermsContent
            key={index}
            heading={userKeyInfo.heading}
            bulletPoints={userKeyInfo.bulletPoints}
          />
        ))}
        {termsOfUseData.map((termsOfUse, index) => (
          <TermsContent
            key={index}
            heading={termsOfUse.heading}
            intro={termsOfUse.intro}
            sentence1={termsOfUse.sentence1}
            sentence2={termsOfUse.sentence2}
            bulletPoints={termsOfUse.bulletPoints}
            subHeading={termsOfUse.subHeading}
          />
        ))}
      </div>
    </>
  );
};

export default Terms;
