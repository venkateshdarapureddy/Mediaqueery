


function App() {


  return (
    <>    
      <div className="w-full h-full bg-[#fcf8f6] flex justify-center flex-col-reverse py-10 px-4 lg:flex-row lg:gap-[10px] ">
    
        <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5    text-white">

          <div className=" ">
            <img src="/assets/1.jpg " alt="" className='rounded-[20px]' />
            <p className='text-[#87635a] text-[14px] text-start pt-6'>Waffle</p>
            <p className='text-[#260f08]  text-[16px] text-start font-semibold'>Waffle with Berries</p>
            <p className=' text-[#c73b0f]  text-[16px] text-start pb-5 font-semibold'>$6.50</p>
          </div>
          <div className=" ">
            <img src="/assets/2.jpg" alt="" className='rounded-[20px]' />
            <p className='text-[#87635a] text-[14px] text-start pt-6'>Crime Brü</p>
            <h5 className='text-[#260f08] text-start font-semibold'>Vanilla Bean Crème Brûlée </h5>
            <p className=' text-[#c73b0f] text-start pb-5 font-semibold'>$7.00</p>
          </div>
          <div className=" ">
            <img src="/assets/3.jpg" alt="" className='rounded-[20px]' />
            <p className='text-[#87635a] text-[14px] text-start pt-6'>Macaron</p>
            <h5 className='text-[#260f08] text-start font-semibold'>Macaron Mix of Five </h5>
            <p className=' text-[#c73b0f] text-start pb-5 font-semibold'>$8.00</p>
          </div>
          <div className=" ">
            <img src="/assets/4.jpg" alt="" className='rounded-[20px]' />
            <p className='text-[#87635a] text-[14px] text-start pt-6' >Tiramisu
            </p>
            <h5 className='text-[#260f08] text-start font-semibold'>Classic Tiramisu</h5>
            <p className=' text-[#c73b0f] text-start pb-5 font-semibold '>$5.50</p>
          </div>
          <div className=" ">
            <img src="/assets/5.jpg" alt="" className='rounded-[20px]' />
            <p className='text-[#87635a] text-[14px] text-start pt-6'>Baklava</p>
            <h5 className='text-[#260f08] text-start font-semibold'>
              Pistachio Baklava</h5>
            <p className=' text-[#c73b0f] text-start pb-5 font-semibold'>$4.00</p>
          </div>
          <div className=" ">
            <img src="/assets/6.jpg" alt="" className='rounded-[20px]' />
            <p className='text-[#87635a] text-[14px] text-start pt-6'>Pie</p>
            <h5 className='text-[#260f08] text-start font-semibold'>Lemon Meringue Pie</h5>
            <p className=' text-[#c73b0f] text-start pb-5 font-semibold'>$5.00</p>
          </div>
          <div className=" ">
            <img src="/assets/7.jpg" alt="" className='rounded-[20px]' />
            <p className='text-[#87635a] text-[14px] text-start pt-6'>Cake</p>
            <h5 className='text-[#260f08] text-start font-semibold '>Red Velvet Cake</h5>
            <p className=' text-[#c73b0f] text-start pb-5 font-semibold'>$4.50</p>
          </div>
          <div className=" ">
            <img src="/assets/8.jpg" alt="" className='rounded-[20px]' />
            <p className='text-[#87635a] text-[14px] text-start pt-6'>Brownie</p>
            <h5 className='text-[#260f08] text-start font-semibold'>Salted Caramel Brownie</h5>
            <p className=' text-[#c73b0f] text-start pb-5 font-semibold'>$5.50</p>
          </div>
          <div className=" ">
            <img src="/assets/9.jpg" alt="" className='rounded-[20px]' />
            <p className='text-[#87635a] text-[14px] text-start pt-6'>Panna cotta</p>
            <h5 className='text-[#260f08] text-start font-semibold'>Vanilla Panna Cotta</h5>
            <p className=' text-[#c73b0f] text-start pb-5 font-semibold'>$6.50</p>
          </div>
        </div>
        <div className="  grid grid-cols-1 h-[300px] lg:h-[400px]  px-[10px] mb-[20px] gap-4 rounded-[20px] text-[#c73b0f] text-[24px] bg-white lg:w-[400px] ">Your Cart (0)

        </div>
      </div>
      
    </>
  )
}

export default App
