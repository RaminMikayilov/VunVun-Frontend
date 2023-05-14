import Logo from '../../assets/Navbar/Logo.png'

function Footer() {
  return (
    <footer className='flex mt-[70px] flex-col gap-y-2 justify-center items-center relative left-0 right-0 bottom-0 px-2'>
      <div>
        <img src={Logo} />
      </div>
      <p className='font-inter text-center text-p-gray text-base'>© 2023 Vun-Vun. Bütün hüquqlar qorunur.</p>
    </footer>
  )
}

export default Footer
