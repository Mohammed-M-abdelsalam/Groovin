const arr = [
    {icon: TbActivityHeartbeat, title: 'consectetur velit Nesciunt Mete', body: 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.'},   
    {icon: FaChalkboard, title: 'consectetur velit Nesciunt Mete', body: 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.'},
    {icon: SlCalender, title: 'consectetur velit Nesciunt Mete', body: 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.'},
    {icon: TbActivityHeartbeat, title: 'consectetur velit Nesciunt Mete', body: 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.'},
    {icon: FaChalkboard, title: 'consectetur velit Nesciunt Mete', body: 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.'},
    {icon: SlCalender, title: 'consectetur velit Nesciunt Mete', body: 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.'},
]
import { TbActivityHeartbeat } from "react-icons/tb";
import { FaChalkboard } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import useAnimation from "../../hooks/useAnimation";
import { useRef } from "react";
function Services(){
    const animationRefs =useRef([]);
    useAnimation(animationRefs.current, {
        opacity: 1,
        y: 0,
        duration: 1,
    }, true);
    return(
        <section id="services" className="container-style text-center py-10">
            <h2 className="text-4xl font-bold">Services</h2>
            <p className="text-gray-500">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            <article className="flex flex-wrap">
                {
                    arr.map((item, index) => (
                        <a href="#" key={index} ref={el => animationRefs.current[index] = el} className="group w-1/1 sm:w-1/2 md:w-1/3 p-10 translate-y-50 opacity-0">
                            <item.icon  className="text-main w-20 h-20 shadow-md rounded-[40%] p-5 mx-auto"/>
                            <h3 className="font-bold text-2xl my-3 py-5 group-hover:text-main duration-500 relative after:content-[''] after:w-30 after:h-[2px] after:bg-main after:absolute after:bottom-0 after:left-[50%] after:translate-x-[-50%]">{item.title}</h3>
                            <p>{item.body}</p>
                        </a>
                    ))
                }
            </article>
        </section>
    )
}

export default Services