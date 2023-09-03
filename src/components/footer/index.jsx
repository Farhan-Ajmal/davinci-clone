import CopyRight from '../copyRight';
import { AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="px-[9%] pt-20 pb-10">
      <div className="flex justify-between">
            <CopyRight />
            <a className="flex items-center space-x-2" href="https://www.instagram.com/" target="_blank">
                <p className="text-[#000000B3]">Follow us on</p>
                <AiOutlineInstagram className="w-4 h-4" />
            </a>
      </div>
    </div>
  )
}

export default Footer
