import AllImages from "../../allImages";
import { reviewsData } from "../../data/reviewsData";
import { AiFillStar } from "react-icons/ai";

const Reviews = () => {
  const generateRatingIcons = (rating) => {
    const icons = [];
    for (let i = 0; i < rating; i++) {
      icons.push(
        <AiFillStar key={i} className="inline h-6 w-6 text-yellow-500" />
      );
    }
    return icons;
  };
  return (
    <div className="space-y-24">
      <div className="px-[9%] text-center ">
        <span className="text-[32px] font-bold inline-block">
          What our users are saying?&nbsp;
          <span className="inline-block">
            <img
              className="w-8 h-8"
              src={AllImages.wavingHand}
              alt="waving hand"
            />
          </span>
        </span>
      </div>
      <div className="px-[9%] flex space-x-6 overflow-x-auto">
        {reviewsData.map((reviews, index) => (
          <div
            className="min-w-[18.75rem] p-6 text-center border border-[rgba(19,35,27,.08)] rounded space-y-4"
            key={index}
          >
            <div>{generateRatingIcons(reviews.rating)}</div>
            <div className="text-base">"{reviews.review}"</div>
            <div className="text-[rgba(19,35,27,.7)] text-base pt-4">
              {reviews.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
