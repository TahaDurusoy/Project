import shape1 from "./img/bg_shape/shape_1.png";
import shape2 from "./img/bg_shape/shape_2.png";
import Hands from "./img/hero_images/Hands.png";
import Hands2 from "./img/hero_images/Hands2.png";
import mid from "./img/intro/mid.png";
import developer from "./img/cardimages/Developer.png";
import designer from "./img/cardimages/Designer.png";
import founder from "./img/cardimages/Founder.png";
import formimg from "./img/formimg/sideimg.png";

const images = {
  shape1,
  shape2,
  Hands,
  Hands2,
  mid,
  formimg,
};

const jobs = {
  developer: {
    src: developer,
    name: "Cody Fisher",
    job: "Developer",
  },
  designer: {
    src: designer,
    name: "Brooklyn Simmons",
    job: "Designer",
  },
  founder: {
    src: founder,
    name: "Esther Howard",
    job: "Founder",
  },
};

export default images;
export { jobs };
