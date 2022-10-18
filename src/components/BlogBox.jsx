import BlogCard from "./BlogCard";

import post1 from "../pics/dynamic/post1.png";
import post2 from "../pics/dynamic/post2.png";
import post3 from "../pics/dynamic/post3.png";
import MainBox from "./containers/MainBox";

const posts = [
  {
    id: 1,
    title: "آغاز ساخت اولین هتل فضایی جهان در سال 2025",
    text: "ناسا تصمیم دارد ماهواره هایی که هم اکنون در فضا قرار دارند را تغییر کاربری دهد ",
    photo: post1,
  },
  {
    id: 2,
    title: "آغاز ساخت اولین هتل فضایی جهان در سال 2025",
    text: "ناسا تصمیم دارد ماهواره هایی که هم اکنون در فضا قرار دارند را تغییر کاربری دهد ",
    photo: post2,
  },
  {
    id: 3,
    title: "آغاز ساخت اولین هتل فضایی جهان در سال 2025",
    text: "ناسا تصمیم دارد ماهواره هایی که هم اکنون در فضا قرار دارند را تغییر کاربری دهد ",
    photo: post3,
  },
];

const BlogBox = () => {
  return (
    <MainBox  bgColor={"bg-white"}>
      <div className="text-2xl lg:text-3xl font-bold flex justify-center mb-14">
        <p>اخبار روز علم نجوم در جهان</p>
      </div>
      <div className='flex flex-col lg:flex-row justify-around gap-2 lg:gap-5 mb-5 lg:mb-10'>
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            text={post.text}
            photo={post.photo}
          />
        ))}
      </div>
    </MainBox>
    
  );
};

export default BlogBox;
