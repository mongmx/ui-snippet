import {
  UserCircleIcon
} from "@heroicons/react/outline";

const description = `
- ใช้ flex เพื่อจัดตำแหน่ง div ใน div
  - flex-row จัดให้อยู่ในแถว
  - flex-col จัดให้อยู่ในคอลัมน์
  - flex-none จัดขนาดให้ fix ตามที่กำหนด หรือ ตามขนาดเนื้อหา
  - flex-auto จัดขนาดให้ยืดหดอัตโนมัติตามพื้นที่ที่เหลือ
- ใช้ justify เพื่อจัดตำแหน่ง text ใน div
  - justify-start จัดให้อยู่ซ้าย
  - justify-end จัดให้อยู่ขวา
  - justify-center จัดให้อยู่กึ่งกลาง
`

export default {
  title: 'Chat Item',
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
};

export const Default = () => {
  return (
    <>
      <div className="flex flex-row shadow-md rounded-lg mt-4 pt-4 pr-4 pl-2 w-80 h-24 hover:bg-slate-100 bg-white border hover:scale-105">
        <UserCircleIcon className="flex-none w-12 h-12 mr-2" />
        <div className="flex-auto flex-col">
          <div>Name</div>
          <div>Message</div>
        </div>
        <div className="flex-none flex-col">
          <div className="flex justify-end text-xs">12-06-2022</div>
          <div className="flex justify-end text-xs">10:11</div>
          <div className="flex justify-end">
            <p className='bg-red-500 w-6 h-6 p-1 rounded-full text-center text-white text-xs'>10</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row shadow-md rounded-lg mt-4 pt-4 pr-4 pl-2 w-80 h-24 hover:bg-slate-100 bg-white border hover:scale-105">
        <UserCircleIcon className="flex-none w-12 h-12 mr-2" />
        <div className="flex-auto flex-col">
          <div>Name</div>
          <div>Message</div>
        </div>
        <div className="flex-none flex-col">
          <div className="flex justify-end text-xs">12-06-2022</div>
          <div className="flex justify-end text-xs">10:11</div>
          <div className="flex justify-end">
            <p className='bg-red-500 w-6 h-6 p-1 rounded-full text-center text-white text-xs'>10</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row shadow-md rounded-lg mt-4 pt-4 pr-4 pl-2 w-80 h-24 hover:bg-slate-100 bg-white border hover:scale-105">
        <UserCircleIcon className="flex-none w-12 h-12 mr-2" />
        <div className="flex-auto flex-col">
          <div>Name</div>
          <div>Message</div>
        </div>
        <div className="flex-none flex-col">
          <div className="flex justify-end text-xs">12-06-2022</div>
          <div className="flex justify-end text-xs">10:11</div>
          <div className="flex justify-end">
            <p className='bg-red-500 w-6 h-6 p-1 rounded-full text-center text-white text-xs'>10</p>
          </div>
        </div>
      </div>
    </>

  );
}
