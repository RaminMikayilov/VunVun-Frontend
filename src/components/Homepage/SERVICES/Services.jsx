import SThunder from '../../../assets/Homepage/SThunder.svg'
import STea from '../../../assets/Homepage/STea.svg'
import SStar from '../../../assets/Homepage/SStar.svg'
import SPerson from '../../../assets/Homepage/SPerson.svg'
import SGlobe from '../../../assets/Homepage/SGlobe.svg'
import SBulb from '../../../assets/Homepage/SBulb.svg'
function Services() {
    const servicesCards = [
        {
            header: 'Lorem',
            paragraph: 'Enim nec rhoncus volutpat nullam eros sapien pharetra.' ,
            img : STea
        } ,
        {
            header: 'Lorem',
            paragraph: 'Neque ut integer nulla tellus semper amet id scelerisque eros.' ,
            img : SThunder
        } ,
        {
            header: 'Lorem',
            paragraph: 'Aliquet et cras nam sed mauris laoreet bibendum et.' ,
            img : SPerson
        } ,
        {
            header: 'Lorem',
            paragraph: 'Lacus vulputate vel metus massa platea ut pellentesque turpis.' ,
            img : SBulb
        } ,
        {
            header: 'Lorem',
            paragraph: 'Mauris orci eget iaculis placerat euismod at urna posuere.' ,
            img : SStar
        } ,
        {
            header: 'Lorem',
            paragraph: 'Mauris orci eget iaculis placerat euismod at urna posuere.' ,
            img : SGlobe
        } ,
    ]
    const servicesCardsUI = servicesCards.map((ui,id) => {
        return (
            <div key={id} className='w-[30%] 768:w-[45%] 450:!w-[80%] flex flex-col gap-y-6 border-border-color border-[1px] rounded-[5px] py-6 px-8 hover:border-btn-orange'>
                <div>
                    <img src={ui.img} />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <h3 className='text-text-black font-inter text-[22px] leading-[30px] tracking-[-0.01em]'>{ui.header}</h3>
                    <p>{ui.paragraph}</p>
                </div>
            </div>
        )
    })
    return (
        <section className="mt-[70px] flex flex-col gap-y-10">
            <center className="flex flex-col gap-y-2">
                <h1 className="font-inter font-bold text-[32px] leading-[40px] text-text-black">
                    Xidmətlərimiz
                </h1>
                <p className="font-inter text-center tracking-[-0.1px] text-base ">
                    Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                </p>
            </center>
            <div className='flex flex-wrap gap-x-4 justify-center gap-y-4'>
                {servicesCardsUI}
            </div>
        </section>
    )
}

export default Services
