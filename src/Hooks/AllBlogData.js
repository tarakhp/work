import { useState } from "react";
import img1 from "../assets/img/blog/blog-post-1.jpg";
import img2 from "../assets/img/blog/blog-post-2.jpg";
import img3 from "../assets/img/blog/blog-post-3.jpg";

const AllBlogData = () => {
  const blogsData = [
    {
      id: 1,
      img: img1,
      title: "How to Succes in your work and acheive your dream step by step ",
      commentor: "by me  ",
      date: "21 April 2020",
      tag: `work, business, economy`,
      description1:
        "Define what you want to achieve with your blog and make sure your goals are specific, measurable, attainable, relevant, and time-bound. ",
    },
    {
      id: 2,
      img: img2,
      title: "How important is  Deep Learning in 2022?",
      commentor: "NullByt ",
      date: "14 January 2022",
      tag: `Dev, business, Ai , design`,
      description1:
        "Deep learning is a rapidly growing field that has seen a surge in popularity in recent years. As the technology continues to evolve, it has become essential for data scientists, researchers, and engineers to have access to the latest and most advanced tools to effectively analyze and interpret large amounts of data.",
    },
    {
      id: 3,
      img: img3,
      title: "Everything You Need to Know About Web Accessibility",
      commentor: "Moheb_Kamitchi",
      date: "9 January 2020",
      tag: `wordpress, Dev , Web dev `,
      description1:
        "Web accessibility is the practice of making website content and functionality available to users with disabilities. This includes individuals with visual, auditory, motor, and cognitive impairments. Ensuring web accessibility is not only a legal requirement in many countries, but it is also an ethical and moral responsibility.",
    },
    
   
  ];

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  return {
    singleData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
  };
};

export default AllBlogData;
