import TermsContentTertiary from "../termsContentTertiary";

const TermsContentSecondary = (props) => {
  return (
    <div className="space-y-6 pt-6">
      {props.subHeadingTitle && (
        <h2 className="text-[#1D2026] text-lg font-bold">
          {props.subHeadingTitle}
        </h2>
      )}
      {props.subHeadingPara1 && (
        <p className="text-[1D2026] text-lg">{props.subHeadingPara1}</p>
      )}
      {props.subHeadingPara2 && (
        <p className="text-[1D2026] text-lg">{props.subHeadingPara2}</p>
      )}
      {props.subHeadingPara3 && (
        <p className="text-[1D2026] text-lg">{props.subHeadingPara3}</p>
      )}
      {props.subHeadingPara4 && (
        <p className="text-[1D2026] text-lg">{props.subHeadingPara4}</p>
      )}
      {props.subHeadingPara5 && (
        <p className="text-[1D2026] text-lg">{props.subHeadingPara5}</p>
      )}
      {props.subHeadingParaLink && (
        <div className=" text-[1D2026] text-lg space-x-2">
          <span>{props.subHeadingParaLink}</span>
          <a className="text-[#90B4F5]" href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage" target="_blank">
            {props.subHeadingLink}
          </a>
        </div>
      )}
      {props.subHeadingbulletPoints && (
        <ul className="list-disc pl-11">
          {props.subHeadingbulletPoints.map((bullet, i) => (
            <li className="text-[1D2026] text-lg" key={i}>
              {bullet.subHeadingPoint}
            </li>
          ))}
        </ul>
      )}
      {props.subHeadingSentence1 &&  <p className="text-[1D2026] text-lg">{props.subHeadingSentence1}</p>}
      {props.nestedHeading &&
        props.nestedHeading.map((nestedHeading, i) => (
          <TermsContentTertiary
            key={i}
            nestedHeadingTitle={nestedHeading.nestedHeadingTitle}
            nestedHeadingPara1={nestedHeading.nestedHeadingPara1}
            nestedHeadingPara2={nestedHeading.nestedHeadingPara2}
            emailAddress={nestedHeading.emailAddress}
            nestedHeadingPara3={nestedHeading.nestedHeadingPara3}
            services={nestedHeading.services}
            servicesBulletPoints={nestedHeading.servicesBulletPoints}
            nestedHeadingPara4={nestedHeading.nestedHeadingPara4}
            nestedHeadingPara5={nestedHeading.nestedHeadingPara5}
            nestedHeadingbulletPoints={nestedHeading.nestedHeadingbulletPoints}
          />
        ))}
    </div>
  );
};

export default TermsContentSecondary;
