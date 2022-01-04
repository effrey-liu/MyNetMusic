import './backTop.css'
import { useEffect, useState } from 'react';
export default function BackTop() {
    const [visibleBackTopButton, setVisibleBackTopButton] = useState(false)
    
    useEffect(() => {
      document.addEventListener('scroll', handleScroll, true);
      return () => document.removeEventListener('scroll', handleScroll)
    }, [visibleBackTopButton])
  
    const handleScroll = () => {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop  || 0
      if (scrollTop > 0) {
        setVisibleBackTopButton(true)
      } else {
        setVisibleBackTopButton(false)
      }
    }
   
    const backToTopHandle = () => window.scrollTo(0,0)
    
    return (
      <>
        {
          visibleBackTopButton && <button className='backTop' onClick={backToTopHandle}>▲TOP</button>
        }
      </>
    )
  };
  