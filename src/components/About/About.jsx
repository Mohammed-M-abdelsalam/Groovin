import arr from './arr'
import aboutImg from '../../assets/images/about.jpg'
import './about.css'
import { useRef, useState } from 'react'
import useAnimation from '../../hooks/useAnimation'
function About(){
    const [index, setIndex] = useState(0)
    const refs = useRef([]);
    useAnimation(refs.current, {
        duration: 1, 
        y: 0, 
        opacity: 1, 
        stagger: 0.5,
        scrollTrigger: {
            trigger: refs.current,
            scrub: true
        }
    })
    return(
        <section id='about' className='container-style mx-auto text-center py-10'>
            <div ref={el => refs.current[0] = el} className='mb-15 opacity-0 translate-y-20'>
                <h1 className='text-2xl font-bold'>About</h1>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            <article ref={el => refs.current[1] = el} className='md:flex justify-between  opacity-0 translate-y-20'>
                <div className='with-before-bg relative min-h-100 p-10'>
                    <img width={'90%'} className='mx-auto' src={aboutImg} alt="picture of friends" />
                </div>
                <div className='text-start'>
                    <header>
                        <h2 className='text-3xl font-semibold'>Neque officiis dolore maiores et exercitationem quae est seda lidera pat claero</h2>
                    </header>
                    <ul className='flex gap-5 border-b-1 mb-3'>
                        <li onClick={()=>setIndex(0)} className={`text-xl cursor-pointer py-3 ${index === 0 && 'text-main border-b-2 border-main'}`}>Saepe fuga</li>
                        <li onClick={()=>setIndex(1)} className={`text-xl cursor-pointer py-3 ${index === 1 && 'text-main border-b-2 border-main'}`}>Voluptates</li>
                        <li onClick={()=>setIndex(2)} className={`text-xl cursor-pointer py-3 ${index === 2 && 'text-main border-b-2 border-main'}`}>Corrupti</li>
                    </ul>
                    <div>
                        <h3 className='my-3 italic'>{arr[index].title}</h3>
                        <ul>
                            {
                                arr[index].list.map((el, index) =>{
                                    return(
                                    <li key={index} className='my-3'>
                                        <h4 className='text-xl font-semibold'>{el.title}</h4>
                                        <p>{el.body}</p>
                                    </li>
                                    )
                                })
                            }
                        </ul>     
                    </div>
                </div>
            </article>
        </section>
    )
}

export default About