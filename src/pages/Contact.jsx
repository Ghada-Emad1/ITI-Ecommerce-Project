import Img from '../../public/images/contactUs.jpg'
import { Footer } from '../components/Footer'
function Contact() {
  return (
    <div>
      <div>
        <img src={Img} className='p-4'/>
      </div>
      <div className='text-center font-bold text-4xl text-darkGray mb-4'>
        <h1>Contact Us</h1>
      </div>
      <form className='flex items-center justify-center mb-6'>
        <div className='bg-orange w-1/2 p-6 flex text-black font-semibold text-lg  flex-col rounded-lg gap-2'>
          First Name: <input type='text'/>
          Last Name: <input type='text'/>
          Email :<input type='email'/>
          <button className='text-white bg-darkGray w-1/2 sm:w-1/3 px-5 text-center py-2 font-semibold rounded-lg mt-2'>Submit</button>
        </div>
      </form>
      <Footer/>
    </div>
  )
}

export default Contact
