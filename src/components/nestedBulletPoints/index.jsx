import { BiRadioCircle } from "react-icons/bi";

const NestedBulletPoints = (props) => {
  return (
    <div key={props.key}>
      <li
        className="text-[1D2026] text-lg list-none flex items-center space-x-2"
        key={props.key}
      >
        <div>
          <BiRadioCircle className="w-3 h-3" />
        </div>
        <div>{props.nestedPoint}</div>
      </li>
      {props.description && (
        <p className="text-[1D2026] text-lg pl-5">{props.description}</p>
      )}
    </div>
  );
};

export default NestedBulletPoints;
