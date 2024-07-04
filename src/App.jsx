import { useEffect, useRef } from "react"
import Text from "./components/Text"
import Scroller from "./components/Scroller"


function App() {

  const words = ['writers', 'tweeters', 'podcasters', 'discordists', 'streamers', 'communitieres', 'nfteers']




  return (
    <div className="bg-[rgb(21,15,4)] overflow-hidden relative px-[5%]">
      <div className="text-[.7vw] pt-[6.4em] pb-[1.6em] w-full max-w-[128rem] btL:pb-[6.4em] btL:text-[10px] btL:max-w-[64rem]  mx-auto">
        <div className="mb-[6.4rem] btL:mb-[2.8em] btL:text-left  text-[#fff] text-center mtLl:text-[0.7vw] ">
          <div className="ut:text-[1.6rem] btL:text-[1.6rem] leading-[1.4] font-medium tracking-[0.14rem] uppercase">Communities come in all shapes and sizes</div>
        </div>
        <div className="btL:block hidden ">
          <div className="ut:text-[8rem] btL:mb-[.8rem] btL:text-[#ddb15c] font-bold">Built for</div>
          <Scroller />
          <div className="btL:mt-[3.6rem] flex flex-col gap-[2.4rem] text-[#fff] text-[2.4rem] leading-[1.7] font-normal items-start">
            <div className="text-[2.4rem] leading-[1.7] break-words"></div>
            You’ve already done the work building a thriving community. Pallet helps you connect people who have the skills and passion with companies that are ready to hire them.
            <a href="" className="btL:ml-[-.8rem] ut:text-[1.8rem] flex p-[.8rem]  items-center leading-[1.5] font-medium max-w-full ">
              <div>Request Access</div>
            </a>
          </div>
        </div>
        <div className="btL:hidden">
          <div className="grid auto-cols-[1fr] gap-x-[4.8em] grid-cols-[auto_1fr] text-[rgb(222,181,102)] mtLl:text-[.7vw] leading-[1.1] font-bold">
            <div className="flex flex-col justify-start max-w-[42em] gap-[2.4em] text-right items-end">
              <div className="text-[10.4em] break-words ">
                Built for
              </div>
              <div className="flex flex-col items-end gap-[2.4rem] text-[#fff] text-[2.4rem]  leading-[1.7] font-normal text-right ">
                <div className="text-[2.4rem] leading-[1.7] ">You’ve built a thriving community. Pallet helps you support their careers, land great new roles, and get paid, all in one product.</div>
              </div>
              <a href="" className="mr-[-.8rem] ml-[0rem] relative flex p-[.8rem] items-center text-[2rem] leading-[1.5] font-medium max-w-full bg-transparent">
                <div>Request Access</div>
              </a>
            </div>
            <div className="overflow-visible text-[10px]">
              <div className="relative h-[79.2em]" >
                {words.map((word, index) => <Text key={index} indexed={index} text={word} totalWords={words.length} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
