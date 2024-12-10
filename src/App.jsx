import { useEffect, useRef, createRef } from "react";

function App() {

  const links = [
    {id: 1, text: "GitHub"},
    {id: 2, text: "Frontend Mentor"},
    {id: 3, text: "LinkedIn"},
    {id: 4, text: "Twitter"},
    {id: 5, text: "Instagram"}
  ];

  const firstLinkRef = useRef(null);
  const lastLinkRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Tab') {
        if (document.activeElement === lastLinkRef.current && !event.shiftKey) {
          event.preventDefault();
          firstLinkRef.current.focus();
        } else if (document.activeElement === firstLinkRef.current && event.shiftKey) {
          event.preventDefault();
          lastLinkRef.current.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
 
  {/* 
  
   */}

  <main className="bg-n-2 p-7 rounded-[0.625rem] flex flex-col items-center">
    <img src="/assets/images/avatar-jessica.jpeg" alt="Avatar" className="max-h-[5.25rem] max-w-[5.25rem] rounded-full"/>
    <div className="presonal-info text-center my-5">
      <h1 className="name text-[1.75rem] font-semibold mb-2">Jessica Randall</h1>
      <p className="location text-[0.875rem] font-semibold text-color-2 mb-3">London, United Kingdom</p>
      <p className="desc text-[0.75rem] font-extralight">"Front-end developer and avid reader."</p>
    </div>
    {links.map((link, index) => {
      const isLastLink = index === links.length - 1;
      const refToUse = index === 0 ? firstLinkRef : (isLastLink ? lastLinkRef : createRef());
      return(<li key={link.id}
      
      className="bg-n-3 p-3 rounded-[0.625rem] min-w-[15rem] mb-3 last:mb-0 hover:text-color-3 hover:bg-color-2 text-center transition-colors ease-in-out duration-200 cursor-pointer focus-within:bg-color-2 focus-within:text-color-3 outline-none">
        <a ref={refToUse} href="#" className="text-[0.875rem] font-bold tracking-wider outline-none">{link.text}</a>
      </li>)
    })}
  </main>
  
  <div class="attribution hidden">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>
    </>
  )
}

export default App
