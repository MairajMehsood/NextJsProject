import Itemsmenu from "../menu/Itemsmenu"
import Sectionheader from "./Sectionheader"

const Homemenu = () => {
  return (
 <section>


{/* passing props */}
    <Sectionheader 
    subheader={'check out'} 
    mainheader={'Menu'}
    />


  {/* cards */}
    <div className='flex justify-center gap-4 flex-wrap mt-6'>
     <Itemsmenu/>
     <Itemsmenu/>
     <Itemsmenu/>
     <Itemsmenu/>
     <Itemsmenu/>
     <Itemsmenu/>
    </div>
 </section>
  )
}

export default Homemenu