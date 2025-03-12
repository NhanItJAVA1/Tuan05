import React, { useEffect, useState } from 'react'

const MyBody2 = () => {
    const category = ['Saved Recipes', 'Folders', 'Recipes by Genevive']
    const [data, setData] = useState([])
    useEffect(() => fetchData() 
          ,[])   

          // Hàm để lấy dữ liệu
  const fetchData = async () => {
    try {
      // Thực hiện yêu cầu GET bằng Fetch API
      const response = await fetch('https://67d0f74e825945773eb276c8.mockapi.io/Chefify');
      
      // Kiểm tra xem phản hồi có thành công không (mã trạng thái 200-299)
      if (!response.ok) {
        throw new Error('Phản hồi mạng không hợp lệ');
      }

      // Phân tích dữ liệu JSON từ phản hồi
      const result = await response.json();

      // Cập nhật trạng thái với dữ liệu đã lấy
      setData(result);
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu:', error.message);
    }
  };
  return (
    <div className='max-w-10/12 m-auto mt-12'>
        <h1 className='font-bold text-2xl'>Emma Gonzalez's Recipe Box</h1>
        <div className='grid grid-cols-5 mt-10'>
            <div className='col-span-1'>
            <img
          className="max-h-40 rounded-full object-cover "
          src="../src/assets/my_dog.jpg"
          alt=""
        />
            </div>
            <div className='col-span-4 flex flex-col justify-between'>
                <h3>Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights</h3>
                <div className='flex gap-5 items-center'>
                    <h3 className='text-[#d28da5] font-semibold'>6.5k Subscribers</h3>
                    <button className='px-3 py-2 bg-pink-400 hover:bg-pink-500 cursor-pointer text-white rounded-lg flex items-center gap-2 '>Share <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>
</button>
                </div>
            </div>
        
        </div>

        <div>
            <div className='flex mt-5 border-b-1 border-gray-500'>
                {category.map((item)=>{
                    return <button className='p-3 font-semibold rounded-t-lg text-gray-600 cursor-pointer focus:bg-[#fcf0f4] focus:text-[#e6749d]'>{item}</button>
                })}
            </div>
        </div>

        <div className='mt-4 flex flex-wrap gap-5 m-auto justify-center items-center'>
            {data.map((item) => {
                return <div className='border-1 border-gray-500/50 rounded-lg w-60'><img src={item.img} alt="" className='w-full h-40 object-cover rounded-t-lg'/>
                <div className='flex flex-col justify-between p-3 gap-3'>
                    <div className='flex items-center justify-between'><div className='font-semibold w-4/5'>{item.name}</div>
                    <button className='rounded-full border-1 p-1 border-[#e6749d]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-[#e6749d]">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                            </svg>
                        </button></div>
                
                <div className='bg-[#fcf0f4] text-[#e6749d] px-3 py-1 rounded-xl w-fit'>{item.time} minutes</div>
                </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default MyBody2