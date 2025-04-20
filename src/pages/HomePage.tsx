import CanvasEditor from '../components/CanvasEditor';
import StickerPanel from '../components/StickerPanel';
import ToolPanel from '../components/ToolPanel';

const HomePage = () => {
  return (
    <>
      <main className='relative'>
        <div className='absolute inset-0 -z-10'>
          <video autoPlay muted loop className='w-full h-full object-cover'>
            <source src='/video/background.mp4' type='video/mp4' />
          </video>
        </div>

        <div className='relative flex flex-col md:flex-row h-screen px-[16px] py-[16px] gap-[16px]'>
          {/* 왼쪽 - 캔버스 */}
          <div className='w-full md:flex-1 flex items-center justify-center'>
            <div className='w-full max-w-[500px] aspect-square rounded-[16px] bg-white/20 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20 flex items-center justify-center text-[30px] font-bold text-white'>
              <CanvasEditor />
            </div>
          </div>

          {/* 오른쪽 - 툴/스티커 */}
          <div className='w-full md:w-1/3 flex flex-col gap-[16px]'>
            <div className='flex-1 p-[16px] rounded-[16px] bg-white/20 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] text-white text-[20px] font-semibold'>
              <ToolPanel />
            </div>
            <div className='flex-1 p-[16px] rounded-[16px] bg-white/20 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] text-white text-[20px] font-semibold'>
              <StickerPanel />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
