import { Container, HeadingWithDesc } from "components";
import React from "react";
import BlogPost from "./BlogPost";
import { BLOG_POST_ITEM, BLOG_POST_ITEMS } from "data";
import { BlogPostData } from "types";

export const HomeBlogSection = () => {
  return (
    <Container>
      <HeadingWithDesc
        heading="Latest News"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          blandit massa enim Nullam nunc varius."
      />
      <div className="grid grid-cols-1 gap-6 max-lg:grid-rows-3 lg:grid-cols-3 ">
        {BLOG_POST_ITEMS.map((item: BlogPostData) => (
          <BlogPost postData={item} key={item.id} />
        ))}
      </div>
    </Container>
  );
};

export default HomeBlogSection;
