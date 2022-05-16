import PressCard from "../presscard/PressCard";
import "./press.css";
import {
  pressContent1,
  pressContent2,
  pressContent3,
} from "../../PressContent";

function Press() {
  return (
    <div className="newsroom-page-press">
      <PressCard
        header={pressContent1.header}
        image={pressContent1.image}
        date={pressContent1.date}
        longText={pressContent1.longText}
        shortText={pressContent1.shortText}
      />
      <PressCard
        header={pressContent2.header}
        image={pressContent2.image}
        date={pressContent2.date}
        longText={pressContent2.longText}
        shortText={pressContent2.shortText}
      />
      <PressCard
        header={pressContent3.header}
        image={pressContent3.image}
        date={pressContent3.date}
        shortText={pressContent3.shortText}
        longText={pressContent3.longText}
      />
    </div>
  );
}

export default Press;
