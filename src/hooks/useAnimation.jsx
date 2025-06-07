import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function useAnimation(targets, animationObject, individual = false) {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    if (Array.isArray(targets) && individual) {
      targets.forEach((el, index) => {
        if (!el) return;
        gsap.to(el, {
          ...animationObject,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: el,
            ...(animationObject.scrollTrigger || {}),
          },
        });
      });
    } else {
      gsap.to(targets, animationObject);
    }
  }, [targets, animationObject, individual]);
}

export default useAnimation;


// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// function useAnimation(targets, options={}) {
//     gsap.registerPlugin(ScrollTrigger);
//     useGSAP(() => {
//       gsap.to(targets, options);
//     }, []); 
// }

// export default useAnimation;