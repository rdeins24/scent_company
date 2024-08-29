import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AnimatedComponent() {
  useEffect(() => {
    // Register the ScrollTrigger plugin after gsap is loaded
    gsap.registerPlugin(ScrollTrigger);

    // Your GSAP animations using ScrollTrigger here
    gsap.to(".element", {
      scrollTrigger: {
        trigger: ".element",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
      x: 100,
    });
  }, []);

  return <div className="element">Animated Content</div>;
}
