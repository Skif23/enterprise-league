import NewsCard from "../newscard/NewsCard";
import "./news.css";
import {
  newsContent1,
  newsContent2,
  newsContent3,
  newsContent4,
  newsContent5,
  newsContent6,
  newsContent7,
  newsContent8,
  newsContent9,
  newsContent10,
  newsContent11,
  newsContent12,
  newsContent13,
  newsContent14,
  newsContent15,
  newsContent16,
  newsContent17,
  newsContent18,
  newsContent19,
  newsContent20,
} from "../../NewsContent";

function News() {
  return (
    <div className="newsroom-page-news">
      <NewsCard
        image={newsContent1.image}
        title={newsContent1.title}
        text={newsContent1.text}
      />
      <NewsCard
        image={newsContent2.image}
        title={newsContent2.title}
        text={newsContent2.text}
      />
      <NewsCard
        image={newsContent3.image}
        title={newsContent3.title}
        text={newsContent3.text}
      />
      <NewsCard
        image={newsContent4.image}
        title={newsContent4.title}
        text={newsContent4.text}
      />
      <NewsCard
        image={newsContent5.image}
        title={newsContent5.title}
        text={newsContent5.text}
      />
      <NewsCard
        image={newsContent6.image}
        title={newsContent6.title}
        text={newsContent6.text}
      />
      <NewsCard
        image={newsContent7.image}
        title={newsContent7.title}
        text={newsContent7.text}
      />
      <NewsCard
        image={newsContent8.image}
        title={newsContent8.title}
        text={newsContent8.text}
      />
      <NewsCard
        image={newsContent9.image}
        title={newsContent9.title}
        text={newsContent9.text}
      />
      <NewsCard
        image={newsContent10.image}
        title={newsContent10.title}
        text={newsContent10.text}
      />
      <NewsCard
        image={newsContent11.image}
        title={newsContent11.title}
        text={newsContent11.text}
      />
      <NewsCard
        image={newsContent12.image}
        title={newsContent12.title}
        text={newsContent12.text}
      />
      <NewsCard
        image={newsContent13.image}
        title={newsContent13.title}
        text={newsContent13.text}
      />
      <NewsCard
        image={newsContent14.image}
        title={newsContent14.title}
        text={newsContent14.text}
      />
      <NewsCard
        image={newsContent15.image}
        title={newsContent15.title}
        text={newsContent15.text}
      />
      <NewsCard
        image={newsContent16.image}
        title={newsContent16.title}
        text={newsContent16.text}
      />
      <NewsCard
        image={newsContent17.image}
        title={newsContent17.title}
        text={newsContent17.text}
      />
      <NewsCard
        image={newsContent18.image}
        title={newsContent18.title}
        text={newsContent18.text}
      />
      <NewsCard
        image={newsContent19.image}
        title={newsContent19.title}
        text={newsContent19.text}
      />
      <NewsCard
        image={newsContent20.image}
        title={newsContent20.title}
        text={newsContent20.text}
      />
    </div>
  );
}

export default News;
