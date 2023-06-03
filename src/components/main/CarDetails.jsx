import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { cars } from '../../datas/cars'
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Carousel from '../Homepage/Carousel/Carousel';
import CarCard from '../Homepage/Cars/CarCard';
var settings = {
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1
};

function CarDetails() {



    const { carId } = useParams();
    const [carData, setCarData] = useState(null);

    useEffect(() => {
        const filteredCar = cars.find((car) => car.id == carId);
        setCarData(filteredCar);
    }, [carId]);


    if (!carData) {
        return <div>Loading...</div>;
    }

    const InfoCardArray = [
        ["Sürət qutusu", carData.add.type],
        ["Modelin ili", carData.add.year],
        ["Yanacaq tipi", carData.add.oil],
        ["Oturacaq sayı", carData.add.seat],
        ["Gündəlik icarə qiyməti", carData.price]
    ]

    const InfoCardUI = InfoCardArray.map((ui, id) => {
        return (
            <div key={id} className='flex justify-between'>
                <p className='text-gray25 text-[18px] leading-[20px] font-[500] font-inter'>{ui[0]}</p>
                <p className='text-btn-orange text-[18px] leading-[20px] font-[400] font-inter'>{ui[1]}</p>
            </div>
        )
    })


    return (

        <div className='w-[94%] flex flex-col gap-y-6 mx-auto mt-[70px]'>
            <div className=' flex justify-between  items-center 768:flex-col 768:gap-y-8'>


                <div className='w-[50%] 768:w-[70%]'>
                    <Slider {...settings}>
                        <div className='!flex justify-center items-center'>
                            <img src={carData.img} />
                        </div>
                        <div className='!flex justify-center items-center'>
                            <img src={carData.img} />

                        </div>
                        <div className='!flex justify-center items-center'>
                            <img src={carData.img} />

                        </div>
                    </Slider>
                </div>
                <div className=' min-w-[25%] flex flex-col gap-y-3'>
                    <div className=' flex flex-col gap-y-5 border-[1px] border-btn-orange rounded-[4px] px-[10px] py-[15px]'>
                        <h1 className='font-[800] text-btn-orange text-[32px] leading-[41px]'>{carData.name}</h1>
                        <div className='flex flex-col gap-y-2'>
                            {InfoCardUI}

                        </div>
                    </div>
                    <div className='flex justify-between gap-x-2  400:gap-x-1'>
                        <Link>
                            <button className='text-btn-orange p-[10px] font-inter font-[600] text-[15px] leading-[22px] border-[1px] border-btn-orange hover:bg-btn-orange hover:text-white duration-300'>Digər maşınlara bax</button>
                        </Link>
                        <Link>
                            <button className='text-white bg-btn-orange px-[25px] py-[10px] font-inter font-[600] text-[15px] leading-[22px] border-[1px] border-btn-orange'>İcarəyə götür</button>
                        </Link>
                    </div>
                </div>


            </div>

            <div className='flex flex-col gap-y-3 font-inter font-[600] text-black max-w-[70ch]'>
                <h1 className='text-3xl'>
                    Əlavə məlumat
                </h1>

                <p className='text-[15px]'>
                    The weather started getting rough the tiny ship was lost the min ting a maximum security road and back stock a against ade lost the minnow weather started getting rough the tiny ship was lost the min ting a maximum security road and back stock a against ade lost the minnow the min ting a maximum security road and back stock a against ade lost the minnow weather started getting rough the tiny ship was lost the min ting a maximum was lost the min ting a maximum security road and back stock a against ade lost the now weather started getting rough the tiny ship was lost the min ting a maximum security road and back stock a against ade lost the minnow the min ting a maximum security road and back stock a against ade lost the minnow weather started getting rough the tiny ship was lost the min ting a maximum.
                </p>
            </div>


            <div className='flex flex-col gap-y-4 '>
                <center>
                    <h1 className='font-[600] text-[32px] leading-[45px]'>Oxşar avtomobillər</h1>
                </center>
                <div className="py-6 ">
                    <Carousel>
                        {cars.map((car, index) => (
                            <CarCard {...car} key={index} />
                        ))}
                    </Carousel>
                </div>
            </div>

        </div>
    );
}
export default CarDetails;