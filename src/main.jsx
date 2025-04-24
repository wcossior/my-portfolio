import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <div className="navbar bg-base-300 shadow-sm justify-center">
        <div className="mr-8">
          <span className='text-3xl pacifico-regular'>Wilder</span><span className='text-4xl font-bold text-emerald-400'> ;</span>
        </div>

        <ul className="menu menu-horizontal px-1">
          <li className='hover:text-emerald-400'><a className='font-semibold'>About</a></li>
          <li className='hover:text-emerald-400'><a className='font-semibold'>Experience</a></li>
          <li className='hover:text-emerald-400'><a className='font-semibold'>Technologies</a></li>
          <li className='hover:text-emerald-400'><a className='font-semibold'>Projects</a></li>
        </ul>

      </div>
      <div className='flex flex-row text-center mx-25 my-10'>
        <div className='flex-4 text-center my-6 pb-4'>
          <div className='flex flex-row items-center'>
            <div className='flex-1 h-[3px] w-full bg-emerald-400 rounded-sm'></div>
            <p className='flex-2 font-bold text-6xl mb-3'>Wilder Cossio</p>
            <div className='flex-1 h-[3px] w-full bg-emerald-400 rounded-sm'></div>
          </div>
          <p className='font-normal text-xl mb-4'>Frontend Developer</p>
          <p className='text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil est velit enim nam accusantium obcaecati et ad a nulla pariatur? Quia, asperiores odio? Beatae sapiente rem unde minus quas nobis placeat totam expedita libero debitis dolorum eligendi recusandae, repudiandae, nam enim in, vitae asperiores reprehenderit amet consectetur mollitia cupiditate hic distinctio iusto. Laboriosam aliquid pariatur voluptatibus sint nemo mollitia a, facilis explicabo aut delectus quia adipisci cum eligendi accusantium ipsam nihil dicta, impedit, iusto voluptate? Debitis ratione voluptate aperiam vero rem iusto eos voluptatibus culpa, praesentium vel illum pariatur nulla dicta quis odio quas, ipsa assumenda nostrum sit? Asperiores ad obcaecati cupiditate tempora illo earum laudantium saepe, reprehenderit hic deleniti dolorum in et tenetur maxime ea atque? Impedit cum voluptatum nemo. Enim, incidunt porro! Perferendis quaerat odit illo veniam et dolor, suscipit deleniti provident alias nostrum dolores. Alias dolorem molestiae deserunt ipsa id aperiam itaque illo ratione nulla quod dignissimos molestias nostrum quidem delectus nemo at nihil possimus reprehenderit nobis, officiis corrupti! Quia corrupti nisi earum? Et, mollitia, nam perferendis commodi doloremque quisquam inventore molestiae porro repellendus possimus reiciendis. Culpa exercitationem sequi esse tempora quo pariatur assumenda dolor nihil placeat error, in nobis asperiores laborum consectetur enim consequuntur repellendus velit?</p>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex flex-2 flex-col items-center justify-end gap-4'>
            <a href="https://wa.me/69549348" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className='text-[34px]' />
            </a>
            <a href="https://www.linkedin.com/in/wilder-cossio" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='text-[30px]' />
            </a>
            <a href="mailto:w.cossio.r@gmail.com" target="_blank" rel="noopener noreferrer">
              <SiGmail className='text-[30px]' />
            </a>
          </div>
          <div className='flex-1 flex justify-center my-6'>
            <div className='w-[3px] h-full bg-emerald-400 rounded-sm'></div>
          </div>
        </div>
      </div>
    </div>
  </StrictMode>,
)
