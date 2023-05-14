import ReactSelect from "../components/other/ReactSelect"
import markas from '../datas/markas.json'
import years from '../datas/years.json'
import yanacaq from '../datas/yanacaq.json'
import seats from '../datas/seats.json'
import models from '../datas/models.json'
import { useState } from "react"
import MyDropzone from "../components/other/MyDropzone"
import { Link } from "react-router-dom"
function BeOwner() {

    const [model, setModel] = useState()
    function getMarkaName(selectedOption) {
        let modelArr = []
        models.filter(a => {
            if (a.marka == selectedOption.value) {
                modelArr.push(...a.models)
            }
        })
        if (modelArr.length > 0) {
            setModel(modelArr)
        } else {
            setModel([])
        }
    }
    return (
        <div className="mt-[70px]  flex flex-col items-center  gap-y-8">
            <center>
                <h1 className="text-center text-4xl font-[800]">
                    Avtomobilin icarəyə <br /> verilməsi elanı
                </h1>
            </center>

            <form className="flex flex-col gap-y-4 min-w-[40%] 450:px-[10px]">

                <div className="flex gap-x-10 400:flex-col 400:gap-y-4 400:items-center">
                    <div className="flex flex-col gap-y-4 w-[50%] 400:w-[70%]">
                        <label className="text-text-black text-[18px] font-[500] whitespace-nowrap " htmlFor="marka" >Avtomobilin markası *</label>
                        <ReactSelect changeFunc={getMarkaName} id={"marka"} type={"normal"} options={markas} />
                    </div>
                    <div className="flex flex-col gap-y-4 w-[50%] 400:w-[70%]">
                        <label className="text-text-black text-[18px] font-[500] whitespace-nowrap   " htmlFor="model">Avtomobilin modeli *</label>
                        <ReactSelect id={"model"} type={"normal"} options={model} />
                    </div>
                </div>

                <div className="flex  items-center gap-x-10 400:flex-col 400:gap-y-4 400:items-center ">
                    <div className="flex flex-col gap-y-4 w-[50%] 400:w-[70%]">
                        <label className="text-text-black text-[18px] font-[500] whitespace-nowrap  " htmlFor="year">Avtomobilin ili *</label>
                        <ReactSelect id={"year"} type={"normal"} options={years} />
                    </div>
                    <div className="flex flex-col gap-y-4 w-[50%] 400:w-[70%]">
                        <label className="text-text-black text-[18px] font-[500] whitespace-nowrap " htmlFor="machine" >Avtomobilin sürət qutusu *</label>
                        <div id="machine" className="flex gap-x-2">
                            <div className="flex gap-x-2">
                                <input value={"mexanik"} name="radio" id="mexanik" type="radio" className=" checked:bg-btn-orange accent-btn-orange outline-0 w-[20px] h-[20px] bg-transparent border-none" />
                                <label className="text-gray25 text-[15px]" htmlFor="mexanik">Mexanik</label>
                            </div>
                            <div className="flex gap-x-2">
                                <input value={"avtomat"} name="radio" id="avtomat" type="radio" className=" checked:bg-btn-orange accent-btn-orange outline-0 w-[20px] h-[20px] bg-transparent border-none" />
                                <label className="text-gray25 text-[15px]" htmlFor="avtomat">Avtomat</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-x-10 400:flex-col 400:gap-y-4 400:items-center">
                    <div className="flex flex-col gap-y-4 w-[50%] 400:w-[70%]">
                        <label className="text-text-black text-[18px] font-[500] whitespace-nowrap  " htmlFor="oil">Yanacaq tipi *</label>
                        <ReactSelect id={"oil"} type={"normal"} options={yanacaq} />
                    </div>
                    <div className="flex flex-col gap-y-4 w-[50%] 400:w-[70%]">
                        <label className="text-text-black text-[18px] font-[500] whitespace-nowrap  " htmlFor="seats">Oturacaq sayı *</label>
                        <ReactSelect id={"seats"} type={"normal"} options={seats} />
                    </div>
                </div>

                <div className="flex flex-col gap-y-4 400:flex-col 400:gap-y-4 400:items-center">
                    <label className="text-text-black text-[18px] font-[500] whitespace-nowrap  " htmlFor="price">Gündəlik qiyməti *</label>
                    <div id="price" className="flex gap-x-2 items-center">
                        <input className="border-p-gray border-[1px] rounded-[4px] text-[#919BA7] text-[15px] pl-[10px] py-[7px] focus:outline-btn-orange" />
                        AZN
                    </div>
                </div>

                <div className="flex flex-col gap-y-4">
                    <label className="400:text-center">Əlavə məlumat (3000 simvol)</label>
                    <textarea rows={5} className="border-p-gray border-[1px] rounded-[4px] text-[#919BA7] text-[15px] pl-[10px] py-[7px] focus:outline-btn-orange">
                    </textarea>
                </div>


                <div className="flex flex-col gap-y-4 400:flex-col 400:gap-y-4 400:items-center">
                    <h4 className="text-[18px] font-[500] text-text-black">Avtomobilin 4 şəklini əlavə edin *</h4>
                    <p className="text-gray25 font-bold text-[12px] leading-5">
                        Minimum şəkil sayı 4- ədəd <br />
                        Şəkillərin optimal ölçüləri - 800 x 600 piksel
                    </p>
                    <MyDropzone />
                </div>

                <div className="flex items-center justify-between 400:flex-col 400:gap-y-4 400:items-center">
                    <p className="text-[14px] text-gray-25 leading-[17px]">
                        Siz <Link className="text-p-blue">Vun-Vun.az-ın istifadəçi razılaşması</Link> <br />
                        ilə razı olduğunuzu təsdiq edirsiniz.
                    </p>
                    <button type="submit" className="bg-btn-orange text-white rounded-[4px] py-[12px] px-[30px]">
                        Davam et
                    </button>
                </div>
            </form>
        </div>
    )
}

export default BeOwner
