import review1 from "../images/reviewer/dpblue.jpg";
import review2 from "../images/reviewer/samperson.png";
import review3 from "../images/reviewer/samperson.png";
import review4 from "../images/reviewer/samperson.png";

// Interface for ReviewDataType
interface ReviewDataType {
  id: number;
  name: string;
  title: string;
  desc: string;
  img: string;
  rating: number;
}

const data: ReviewDataType[] = [
  {
    id: 1,
    name: "Sriram Suresh",
    title: "Very Delicious",
    desc: " I recently dined at BIT Cafeteria and was blown away by the quality of the food. Every dish was prepared with care and attention to detail, resulting in a truly memorable dining experience. I would highly recommend this restaurant to anyone looking for delicious cuisine in a welcoming atmosphere.",
    img: review1,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Customer sample",
    title: "Their lunch is amazing",
    desc: " I am a regular at BIT Cafeteria and have never been disappointed by the food or service. The menu is diverse, offering a range of dishes that cater to all dietary needs, and the staff are always friendly and attentive. If you're looking for a restaurant that consistently delivers great food and a great experience, this is the place to go.",
    img: review2,
    rating: 5,
  },
  {
    id: 3,
    name: "Sample reviewer",
    title: "BIT Cafeteria Is Amazing",
    desc: " BIT Cafeteria is hands down one of the best restaurants I've been to in a long time. The ingredients are always fresh and the dishes are expertly crafted, resulting in a unique and unforgettable dining experience. I would highly recommend this restaurant to anyone who appreciates the art of cooking.",
    img: review3,
    rating: 4.5,
  },
  {
    id: 4,
    name: "Sample reviewer",
    title: "Great Service",
    desc: " I had the pleasure of dining at BIT Cafeteria and can confidently say that it was one of the best meals I've ever had. The flavors were perfectly balanced and each dish was a work of art. The staff were knowledgeable and friendly, and the atmosphere was cozy and inviting.",
    img: review4,
    rating: 4.4,
  },
];

export default data;
