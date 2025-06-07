import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function useAnimation(targets, object) {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
      gsap.to(targets, object);
    }, []); 
}

export default useAnimation;