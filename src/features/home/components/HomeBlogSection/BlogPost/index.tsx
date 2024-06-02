import { Card, Link } from "components";
import Image from "next/image";
import { SlCalender, CommentsIcon } from "lib/@heroicons";
import { BlogPostData } from "types";

export const BlogPost = ({ postData }: { postData: BlogPostData }) => {
  const { commentsCount, dateOfPublish, id, image, postContent, title } =
    postData;

  return (
    <Card className="relative my-2 border border-[#ddd] !p-0 image-backdrop ">
      <div className="relative flex items-center justify-center w-full transition-all duration-150 ease-in-out md:p-2 hover:scale-90">
        <Image src={image} alt={title} width={350} height={300} />
      </div>
      <div className="p-6 product-details">
        <Link href={`/blog/${id}`}>
          <h3 className="my-2 text-lg font-bold truncate hover:text-red-light">
            {title}
          </h3>
        </Link>
        <div className="flex gap-4 my-2 font-medium">
          <p className="flex items-center gap-2">
            <SlCalender className="text-red-light" /> {dateOfPublish}
          </p>
          <p className="flex items-center gap-2">
            <CommentsIcon className="text-red-light" />
            {commentsCount} <span>comments</span>
          </p>
        </div>
        <p className="py-2">{postContent}</p>
      </div>
    </Card>
  );
};

export default BlogPost;
