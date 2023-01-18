import BlogCard from "./BlogCard";

import post1 from "assets/images/dynamic/post1.webp";
import post2 from "assets/images/dynamic/post2.webp";
import post3 from "assets/images/dynamic/post3.webp";
import MainFrame from "components/containers/MainFrame";

const posts = [
  {
    id: 1,
    title: " ساخت اولین هتل فضایی جهان",
    text: "ناسا تصمیم دارد ماهواره هایی که هم اکنون در فضا قرار دارند را تغییر کاربری دهد ",
    photo: post1,
  },
  {
    id: 2,
    title: "آغاز ساخت  هتل فضایی  در سال 2025",
    text: "ناسا تصمیم دارد ماهواره هایی که هم اکنون در فضا قرار دارند را تغییر کاربری دهد ",
    photo: post2,
  },
  {
    id: 3,
    title: "آغاز ساخت فضایی جهان در سال 2025",
    text: "ناسا تصمیم دارد ماهواره هایی که هم اکنون در فضا قرار دارند را تغییر کاربری دهد ناسا تصمیم دارد ماهواره هایی که هم اکنون در فضا قرار دارند را تغییر کاربری دهد ",
    photo: post3,
  },
];

const BlogBox = () => {
  return (
    <MainFrame bgColor={"bg-white"}>
      <div className="text-3xl lg:text-4xl font-bold font-anjoman flex justify-center mb-14">
        <p>اخبار روز علم نجوم در جهان</p>
      </div>
      <div className="flex flex-col lg:flex-row justify-around gap-2 lg:gap-5 mb-5 lg:mb-10 lg:flex-wrap">
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            text={post.text}
            photo={post.photo}
          />
        ))}
      </div>
    </MainFrame>
  );
};

export default BlogBox;
