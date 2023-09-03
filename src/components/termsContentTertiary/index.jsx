const TermsContentTertiary = (props) => {
  return (
    <div className="space-y-6" key={props.key}>
      {props.nestedHeadingTitle && (
        <h2 className="text-[#1D2026] text-base font-bold">
          {props.nestedHeadingTitle}
        </h2>
      )}
      {props.nestedHeadingPara1 && (
        <p className="text-[1D2026] text-lg">{props.nestedHeadingPara1}</p>
      )}
      {props.nestedHeadingPara2 && (
        <p className="text-[1D2026] text-lg">{props.nestedHeadingPara2}</p>
      )}
      {props.emailAddress && (
          <a className="text-[#90B4F5]" href={`mailto:${props.emailAddress}`}>
            {props.emailAddress}
          </a>
      )}
      {props.nestedHeadingPara3 && (
        <p className="text-[1D2026] text-lg">{props.nestedHeadingPara3}</p>
      )}
      {props.services && (
        <p className="text-[1D2026] text-lg">{props.services}</p>
      )}
      {props.servicesBulletPoints && (
        <ul class="list-disc pl-11">
          {props.servicesBulletPoints.map((bullet, i) => (
            <li className="text-[1D2026] text-lg" key={i}>
              {bullet.servicesPoint}
            </li>
          ))}
        </ul>
      )}
      {props.nestedHeadingPara4 && (
        <p className="text-[1D2026] text-lg">{props.nestedHeadingPara4}</p>
      )}
      {props.nestedHeadingPara5 && (
        <p className="text-[1D2026] text-lg">{props.nestedHeadingPara5}</p>
      )}
      {props.nestedHeadingbulletPoints && (
        <ul class="list-disc pl-11">
          {props.nestedHeadingbulletPoints.map((bullet, i) => (
            <li className="text-[1D2026] text-lg" key={i}>
              {bullet.nestedHeadingPoint}
            </li>
          ))}
        </ul>
      )}
     
    </div>
  )
}

export default TermsContentTertiary
