import mazda from '../../../assets/Homepage/mazda.png'
import check from '../../../assets/Homepage/check.svg'
import Arrowright from '../../../assets/Homepage/Arrowright.svg'
import { Link } from 'react-router-dom'
function HBeOwner() {
    return (
        <section className='bg-dark-blue mt-[70px] flex items-center justify-between py-5 768:flex-col 768:items-start 768:gap-y-6'>
            <div>
                <img src={mazda} />
            </div>
            <div className='flex flex-col gap-y-6 768:px-4'>
                <h1 className='font-inter font-semibold text-3xl text-white'>SAHİBKAR OL</h1>
                <h4 className='max-w-[55ch] font-inter text-base tracking-[-0.1px] text-white'>Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt. Aenean malesuada tellus tellus faucibus mauris quisque mauris in.</h4>
                <div className='flex flex-col gap-y-2'>
                    <div className='flex items-center gap-x-1'>
                        <div className='flex justify-center items-center'>
                            <img src={check} />
                        </div>
                        <h4 className='font-inter text-base text-white'>
                            Enterprise-grade security
                        </h4>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <div className='flex justify-center items-center'>
                            <img src={check} />
                        </div>
                        <h4 className='font-inter text-base text-white'>
                            99.9% guaranteed uptime SLA
                        </h4>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <div className='flex justify-center items-center'>
                            <img src={check} />
                        </div>
                        <h4 className='font-inter text-base text-white'>
                            Designated customer success team
                        </h4>
                    </div>
                </div>
                <div>
                    <Link to="/elanver">
                        <button className='flex items-center bg-btn-orange rounded-md font-inter font-semibold text-[15px] text-white leading-[22px] py-3 px-[18px]'>
                            Sahibkar ol
                            <img src={Arrowright} alt="Arrow right" />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HBeOwner
