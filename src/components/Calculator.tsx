import { useState } from "react";

import TimeBlock from "./TimeBlock";
//import SlideBlock from "./SlideBlock";
import PaceSelector from "./PaceSelector";
import { DEFAULT_MINUTES_PACE } from "../utils/variables";

const Calculator = () => {
  const [pace, setPace] = useState(String(DEFAULT_MINUTES_PACE * 60));

  return (
    <div className="justify-center">
      <PaceSelector pace={pace} setPace={setPace} />

      <h2>Calcul des temps estimés :</h2>
      <section className="mt-3 grid grid-cols-3 gap-3 md:grid-cols-3 lg:grid-cols-3">
        <TimeBlock distance={5} pace={pace} />
        <TimeBlock distance={10} pace={pace} />
        <TimeBlock distance={15} pace={pace} />
      </section>
      <section className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-2">
        <TimeBlock distance={21.1} pace={pace} note="semi-marathon" />
        <TimeBlock distance={42.195} pace={pace} note="marathon" />
      </section>
      {/* <section className="mt-8">
        <SlideBlock pace={pace} />
      </section> */}
    </div>
  );
};

export default Calculator;
