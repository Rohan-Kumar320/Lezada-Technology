import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger)

const ViewMoreProds = ({trigger}) => {
    const [imgLoaded, setImgLoaded] = useState(false);

    const handleImgLoad = () =>{
        setImgLoaded(true)
    }
    // useEffect(() => {

    //     if(trigger && imgLoaded){

    //         // const splitText = new SplitType('.paraani',{types :'words'})
    //         // const words = splitText.words
            
    //         const parentAni = gsap.from(['.parentani','.textani'],{
    //             xPercent: -500,
    //             duration: 1.5,
    //             scrollTrigger: {
    //                 trigger: '.parentani',
    //                 start: 'top 80%',
    //             }
    //         })

    //         const textAni = gsap.from('.textani',{
    //             xPercent: -1000,
    //             duration: 2,
    //             scrollTrigger: {
    //                 trigger: '.parentani',
    //                 start: 'top 80%',
    //             }
    //         })

    //         const imgAni = gsap.from('.imgani',{
    //             yPercent: 4,
    //             duration: 1.5,
    //             yoyoEase: true,
    //             repeat: -1,
    //         })
            

    //         const parentAni2 = gsap.from('.parentani2',{
    //             xPercent: -500,
    //             duration: 1.5,
    //             scrollTrigger: {
    //                 trigger: '.parentani2',
    //                 start: 'top 80%',
    //             }
    //         })

    //         const textAni2 = gsap.from('.textani2',{
    //             xPercent: -1000,
    //             duration: 2,
    //             scrollTrigger: {
    //                 trigger: '.parentani2',
    //                 start: 'top 80%',
    //             }
    //         })

    //         const imgAni2 = gsap.from('.imgani2',{
    //             yPercent: 4,
    //             duration: 1.5,
    //             yoyoEase: true,
    //             repeat: -1,
    //         })
            
    //         ScrollTrigger.refresh();
            
    //         return () => {
    //             parentAni.kill();
    //             imgAni.kill();
    //             textAni.kill();
    //             parentAni2.kill();
    //             imgAni2.kill();
    //             textAni2.kill();
    //             ScrollTrigger.refresh();
    //         }
    //     }
    // }, [trigger, imgLoaded])
    useEffect(() => {
        if (trigger && imgLoaded) {
          // Delay to ensure DOM is ready
          setTimeout(() => {
            // Select elements dynamically and animate them independently
            const parentElements = gsap.utils.toArray('.parentani, .parentani2');
            const textElements = gsap.utils.toArray('.textani, .textani2');
            const imgElements = gsap.utils.toArray('.imgani, .imgani2');
      
            // Parent animations
            const parentAnimations = parentElements.map((el) =>
              gsap.from(el, {
                xPercent: -500,
                duration: 1.5,
                scrollTrigger: {
                  trigger: el,
                  start: 'top 80%',
                },
              })
            );
      
            // Text animations
            const textAnimations = textElements.map((el) =>
              gsap.from(el, {
                xPercent: -1000,
                duration: 2,
                scrollTrigger: {
                  trigger: el.closest('.parentani, .parentani2'),
                  start: 'top 80%',
                },
              })
            );
      
            // Image animations
            const imgAnimations = imgElements.map((el) =>
              gsap.from(el, {
                yPercent: 4,
                duration: 1.5,
                yoyoEase: true,
                repeat: -1,
              })
            );
      
            ScrollTrigger.refresh();
          }, 100); // Adjust delay if necessary
      

        return () => {
       // Cleanup animations and refresh ScrollTrigger
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        ScrollTrigger.refresh();
        };
        }
    }, [trigger, imgLoaded]);




    return (
    <>
            <div id='viewMore' className='parentani max-w-full max-h-full bg-gray-300 mb-6 m-4'>
                <div className='flex flex-row justify-evenly items-center mt-0 md:mt-10'>
                    <div className='flex flex-col justify-center items-start overflow-hidden ml-2'>
                        <h1 className='textani text-lg sm:text-3xl md:text-4xl mt-4'><span className='font-bold'>07+</span> Shop</h1>
                        <h1 className='textani text-lg sm:text-3xl md:text-4xl'>laptop design's</h1>
                        <p className='textani pt-2 w-40 md:w-60 font-normal md:text-sm text-xs text-start '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laudantium assumenda molestiae quisquam doloremque architecto.</p>
                        <button className='textani mb-5 mt-3 border-b-2 border-black hover:animate-pulse active:text-blue-500'><Link to="/abc">View More</Link></button>
                    </div>
                    <div className='imgani max-w-[50%] md:max-w-[32%]'>
                            <img 
                            src="./vector.png" 
                            alt="" 
                            className='hover:-translate-x-2 hover:translate-y-2 duration-500' 
                            onLoad={handleImgLoad}/>
                    </div>
                </div>
            </div>


            <div className='parentani2 max-w-full max-h-full bg-gray-300 mt-6 m-4'>
                <div className='flex justify-evenly items-center'>
                    <div className='imgani2 max-w-[48%]'>
                            <img 
                            src="./vector2.png" 
                            alt="" 
                            className='hover:translate-x-2 hover:-translate-y-2 duration-500' 
                            onLoad={handleImgLoad}/>
                    </div>
                    <div className='flex flex-col justify-center items-start overflow-hidden'>
                        <h1 className='textani2 text-lg sm:text-3xl md:text-4xl mt-4'><span className='font-bold'>Best</span> Gaming</h1>
                        <h1 className='textani2 text-lg sm:text-3xl md:text-4xl'>laptop design's</h1>
                        <p className='textani2 pt-2 w-40 md:w-60 font-normal md:text-sm text-xs text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laudantium assumenda molestiae quisquam doloremque architecto.</p>
                        <button className='textani2 mb-5 mt-3 border-b-2 border-black hover:animate-pulse active:text-blue-500'>View More</button>
                    </div>
                </div>
            </div>
    </>
  )
}

export default ViewMoreProds