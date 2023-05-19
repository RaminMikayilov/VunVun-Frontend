import mazda from '../../../assets/Homepage/mazda.png'
import check from '../../../assets/Homepage/check.svg'
function HBeOwner() {
    return (
        <section className='bg-dark-blue mt-[70px]'>
            <div>
                <img src={mazda} />
            </div>
            <div className='flex flex-col gap-y-2'>
                <h1 className='font-inter font-semibold text-3xl'>SAHİBKAR OL</h1>
                <h4>Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt. Aenean malesuada tellus tellus faucibus mauris quisque mauris in.</h4>
                <div>
                    <div className='flex items-center gap-x-1'>
                        <div className='flex justify-center items-center'>
                            <img src={check} />
                        </div>
                        <h4 className='font-inter text-base text-white'>
                            Enterprise-grade security
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HBeOwner
