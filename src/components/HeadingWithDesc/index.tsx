import clsx from "clsx";

export const HeadingWithDesc = ({
  heading,
  description,
  className,
}: {
  heading: string;
  description: string;
  className?: string;
}) => {
  const classes = clsx("max-w-lg m-auto text-center", className);
  return (
    <div className={classes}>
      <h2 className="text-3xl font-bold">{heading}</h2>
      <p className="my-6 text-md text-slate-500">{description}</p>
    </div>
  );
};

export default HeadingWithDesc;
