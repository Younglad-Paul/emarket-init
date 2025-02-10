import { useState } from "react";
import holder from '../../public/coat_of_arm.webp'

const newsData = [
  { id: 1, category: "Politics", title: "New Policies Introduced", content: "The government has introduced new policies...", image: holder },
  { id: 2, category: "Sports", title: "Football League Update", content: "The latest football league updates...", image: holder },
  { id: 3, category: "Technology", title: "New AI Model Released", content: "A breakthrough in AI technology...", image: holder },
  { id: 4, category: "Entertainment", title: "Top Movies of the Year", content: "The best movies released this year...", image: holder },
  { id: 5, category: "Health", title: "Tips for Healthy Living", content: "Doctors recommend new health tips...", image: holder },
  { id: 6, category: "Business", title: "Stock Market Trends", content: "The latest updates in the stock market...", image: holder },
];

const categories = ["All", "Politics", "Sports", "Technology", "Entertainment", "Health", "Business"];

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNews = selectedCategory === "All"
    ? newsData
    : newsData.filter(news => news.category === selectedCategory);

  return (
    <div className="mx-auto p-6 space-y-6">
      <header className="w-full bg-[#13802AFF] text-white py-16 text-center rounded-2xl shadow-lg mb-10">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Latest News</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Find answers to common questions about Enugu eMarket and how it works.
          </p>
        </div>
      </header>
      <div className="container flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md border ${selectedCategory === category ? "bg-[#13802AFF] text-white" : "bg-gray-200"}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map(({ id, title, content, category, image }) => (
          <div key={id} className="p-4 border rounded-md shadow-md bg-white">
            <img src={image} alt={title} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-xl font-semibold text-[#13802AFF] mt-4">{title}</h2>
            <p className="text-gray-600 mt-2">{content}</p>
            <span className="block mt-3 text-sm font-semibold text-gray-500">Category: {category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
