import HeroBg from '../../../assets/Homepage/HeroBg.png'
import ReactSelect from './../../other/ReactSelect';
import markas from '../../../datas/markas.json'
import locations from '../../../datas/locations.json'
import ReactDate from '../../other/ReactDate';
import { useState } from 'react';
function Hero() {
    const [bronDate,setBronDate] = useState(null);
    const [returnDate,setReturnDate] = useState(null)
    function takeBronDate(date){
        setBronDate(date)
    }
    function takeReturnDate(date){
        setReturnDate(date)
    }
    return (
        <section className="flex flex-col items-center">
        <img className="w-full" src={HeroBg} alt="Background" />
        <form className="flex flex-wrap gap-2 md:gap-0 min-w-full md:min-w-[80%] justify-between bg-white mt-[-20px] p-[10px] items-center">
          <div className="w-full md:w-1/5">
            <ReactSelect options={markas} />
          </div>
          <div className="w-full md:w-1/5 pl-2 flex justify-center items-center">
            <ReactDate placeholder="Bron tarixi" changeFunc={takeBronDate} selected={bronDate} />
          </div>
          <div className="w-full md:w-1/5 pl-2  flex justify-center items-center">
            <ReactDate placeholder="Qaytarilma tarixi" changeFunc={takeReturnDate} selected={returnDate} />
          </div>
          <div className="w-full md:w-1/5">
            <ReactSelect options={locations} />
          </div>
          <div className="w-full md:w-1/5 flex justify-center items-center md:justify-end">
            <button className="bg-btn-orange w-full md:w-[80%] text-white text-[20px] rounded-[8px] px-[30px] py-[10px]">
              Axtar
            </button>
          </div>
        </form>
      </section>
      
      


    )
}

export default Hero
