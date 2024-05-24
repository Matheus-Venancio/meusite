import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";

export default function ImageKeen() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });

        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider" data-aos="fade-left">
        <div className="keen-slider__slide number-slide1">
          <img className="foto" src={require("../../img/imageabout/imagefirst.jpg")} alt="Slide 1" />
        </div>
        <div className="keen-slider__slide number-slide2">
          <img className="foto" src={require("../../img/imageabout/abitro2.png")} alt="Slide 2" />
        </div>
        <div className="keen-slider__slide number-slide3">
          <img className="foto" src={require("../../img/imageabout/evento.png")} alt="Slide 3" />
        </div>
        <div className="keen-slider__slide number-slide4">
          <img className="foto" src={require("../../img/imageabout/kaefi.png")} alt="Slide 4" />
        </div>
      </div>
    </>
  );
}
