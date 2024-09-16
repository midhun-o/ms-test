import React from 'react';
import BlogGridItem from './InsightGrid'; 

interface Blog {
  date: string;
  description: string;
  imageUrl: string;
}

const InsightGridContainer: React.FC = () => {
  const blogs: Blog[] = [
    {
      date: '21 March 2023',
      description: 'dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis',
      imageUrl: '/assets/images/blog-1.png'
    },
    {
      date: '21 March 2023',
      description: 'dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis',
      imageUrl: '/assets/images/blog-2.png'
    },
    {
      date: '21 March 2023',
      description: 'dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis',
      imageUrl: '/assets/images/blog-3.png'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10">
      {blogs.map((blog, index) => (
        <BlogGridItem
          key={index}
          date={blog.date}
          description={blog.description}
          imageUrl={blog.imageUrl}
        />
      ))}
    </div>
  );
};

export default InsightGridContainer;
