import { Container, HeadingWithDesc } from "components";
import React from "react";
import BlogPost from "./BlogPost";
import { BLOG_POST_ITEM } from "data";

export const HomeBlogSection = () => {
  return (
    <Container>
      <HeadingWithDesc
        heading="Latest News"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          blandit massa enim Nullam nunc varius."
      />
      <div className="grid grid-cols-1 gap-6 max-lg:grid-rows-3 lg:grid-cols-3 ">
        <BlogPost postData={BLOG_POST_ITEM} />
        <BlogPost postData={BLOG_POST_ITEM} />
        <BlogPost postData={BLOG_POST_ITEM} />
      </div>
    </Container>
  );
};

export default HomeBlogSection;
