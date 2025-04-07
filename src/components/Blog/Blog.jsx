// import { faBookmark as fasBookmark } from '@fortawesome/free-solid-svg-icons';
// import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HiOutlineBookmark } from "react-icons/hi2";
import React from "react";

const Blog = ({ blog, handleBookmark, handleMarkAsRead }) => {
  
  return (
    <div className="card bg-base-100 shadow-sm p-3">
      <figure>
        <img src={blog.cover} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex gap-2 items-center">
          <img
            className="w-10 rounded-full"
            src={blog.author_img}
            alt="photo"
          />
          <div className="flex-1">
            <p className="font-bold">{blog.author}</p>
            <p className="text-[#11111199]/60 font-semibold">
              {blog.posted_date}
            </p>
          </div>
          <div className="flex gap-2 items-center font-medium">
            <p className="text-xl text-[#11111199]/60">
              {blog.reading_time} min read
            </p>
            <button className="text-[#11111199]/60 cursor-pointer" onClick={() => handleBookmark(blog)}>
              {/* <FontAwesomeIcon icon={farBookmark} /> */}
              <HiOutlineBookmark size={30} />
            </button>
          </div>
        </div>
        <h2 className="card-title">{blog.title}</h2>
        <div className="flex gap-2">
          {blog.hashtags.map((hashtag) => (
            <span className="bg-gray-200 p-2 rounded-sm" key={hashtag}>
              #{hashtag}
            </span>
          ))}
        </div>
        <div className="card-actions items-center justify-between">
          <button className="underline underline-offset-4 cursor-pointer hover:text-[#6047EC]" onClick={() => handleMarkAsRead(blog.reading_time)}>
            Mark as read
          </button>
          <button className="btn btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
