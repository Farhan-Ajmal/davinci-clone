import { AiFillLock } from "react-icons/ai";
import Intro from "../../components/intro";
import TermsContent from "../../components/termsContent";
import { personalData } from "../../data/personalData";
import AdOptOut from "../../components/adOptOut";
import DetailedPersonalData from "../../components/detailedPersonalData";
import { purposeServicesData } from "../../data/purposeServicesData";

const Privacy = () => {
  return (
    <>
      <Intro
        heading1="Privacy"
        heading2="Policy"
        information="More about privacy policy."
        icon={AiFillLock}
        iconColor="text-yellow-500"
      />
      <div className="px-[9%] pt-20">
        {purposeServicesData.map((purposeServices, index) => (
          <TermsContent
            key={index}
            heading={purposeServices.heading}
            bulletPoints={purposeServices.bulletPoints}
          />
        ))}
        <AdOptOut />
        {personalData.map((adOptOut, index) => (
          <TermsContent
            key={index}
            heading={adOptOut.heading}
            bulletPoints={adOptOut.bulletPoints}
          />
        ))}
        <DetailedPersonalData />
      </div>
    </>
  );
};

export default Privacy;
