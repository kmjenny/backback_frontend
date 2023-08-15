import { useState } from "react";
import styled from "styled-components";
import Post, { PostProps } from "../common/post/Post";
import { ScrollContent } from "../common/post/PostDetail";
import ImageSwiper from "../core/ImageSwiper";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export interface HomeProps {
  posts: PostProps[];
  images: string[];
}

// const ImageSwiperStyle = styled(ImageSwiper)`
//   .carousel .control-dots {
//     position: relative !important;
//     margin-top: 50px !important;
//   }
// `;

const Homepage: React.FC<HomeProps> = ({ ...prop }) => {
  const listItems = prop.posts.map((item, index) => (
    <Post
      id={item.id}
      key={index.toString()}
      nickname={item.nickname}
      type={item.type}
      profileimage={item.profileimage}
      content={item.content}
      comments_count={item.comments_count}
      like_count={item.like_count}
      createdAt={item.createdAt}
      title={item.title}
      category={item.category}
    />
  ));

  return (
    <ScrollContent>
      <div
        style={{
          width: "100%",
          display: "block",
          flexDirection: "column",
          alignItems: "center",
          padding: "0px 15px 0px 15px",
          flex: "1",
          overflow: "auto",
          scrollBehavior: "smooth",
        }}
      >
        <ImageSwiper images={prop.images} />
        <div
          style={{
            display: "flex",
            padding: "15px 0px 10px 13px",
            width: "100%",
            fontSize: "14px",
            borderBottom: "1px solid #B7BBC8",
          }}
        >
          내 팔로워 게시물
        </div>
        {listItems}
      </div>
    </ScrollContent>
  );
};

export default Homepage;