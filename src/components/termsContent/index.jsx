import NestedBulletPoints from "../nestedBulletPoints";
import TermsContentSecondary from "../termsContentSecondary";

const TermsContent = (props) => {
  return (
    <div className="space-y-6" key={props.key}>
      {props.heading && (
        <h2 className="text-[#1D2026] text-xl font-bold pt-6">
          {props.heading}
        </h2>
      )}
      {props.intro && <p className="text-[1D2026] text-lg">{props.intro}</p>}
      {props.sentence1 && (
        <p className="text-[1D2026] text-lg">{props.sentence1}</p>
      )}
      {props.sentence2 && (
        <p className="text-[1D2026] text-lg">{props.sentence2}</p>
      )}
      {props.bulletPoints && (
        <ul className="list-disc pl-11 space-y-6">
          {props.bulletPoints.map((bullet, i) => (
            <div key={i}>
              <li className="text-[1D2026] text-lg">{bullet.point}</li>
              {bullet.description && (
                <p className="text-[1D2026] text-lg">{bullet.description}</p>
              )}

              {bullet.nestedBulletPoints && (
                <ul className="list-disc pl-11 pt-6">
                  {bullet.nestedBulletPoints.map((nestedBullet, i) => (
                    <NestedBulletPoints
                      key={i}
                      nestedPoint={nestedBullet.nestedPoint}
                      description={nestedBullet.description}
                    />
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      )}
      {props.para1 && <p className="text-[1D2026] text-lg">{props.para1}</p>}
      {props.para2 && <p className="text-[1D2026] text-lg">{props.para2}</p>}
      {props.para3 && <p className="text-[1D2026] text-lg">{props.para3}</p>}
      {props.para4 && <p className="text-[1D2026] text-lg">{props.para4}</p>}
      {props.para5 && <p className="text-[1D2026] text-lg">{props.para5}</p>}
      {props.emailPara && (
        <div className=" text-[1D2026] space-x-2">
          <span>{props.emailPara}</span>
          <a className="text-[#90B4F5]" href={`mailto:${props.email}`}>
            {props.email}
          </a>
        </div>
      )}
      {props.subHeading &&
        props.subHeading.map((subHeading, i) => (
          <TermsContentSecondary
            key={i}
            subHeadingTitle={subHeading.subHeadingTitle}
            subHeadingPara1={subHeading.subHeadingPara1}
            subHeadingPara2={subHeading.subHeadingPara2}
            subHeadingPara3={subHeading.subHeadingPara3}
            subHeadingPara4={subHeading.subHeadingPara4}
            subHeadingParaLink={subHeading.subHeadingParaLink}
            subHeadingLink={subHeading.subHeadingLink}
            subHeadingbulletPoints={subHeading.subHeadingbulletPoints}
            subHeadingSentence1={subHeading.subHeadingSentence1}
            nestedHeading={subHeading.nestedHeading}
          />
        ))}
    </div>
  );
};

export default TermsContent;
