import clsx from "clsx";

const StarRating = ({
  rate,
  count,
  className = "",
  starsNumber = 5,
  ...rest
}: {
  rate: number | string;
  count: number | string;
  starsNumber?: number;
  className?: string;
}) => {
  const classes = clsx("mt-2", className);
  const ratingWidth = +rate * 2 * 10;
  const starsArray = new Array<number>(5).fill(0);
  return (
    <div className={classes} {...rest}>
      <div className="flex justify-center gap-2">
        <span className="flex items-center">
          {starsArray?.map((star, index) => (
            <svg
              key={index}
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>{index + 1} stars</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
        </span>
        <span className="text-gray-400"> ({count})</span>
      </div>
    </div>
  );
};

export default StarRating;
