const STICKERS = [
  '/image/sticker1.jpg',
  '/image/sticker2.png',
  '/image/sticker3.png',
  '/image/sticker4.jpg',
  '/image/sticker5.png',
];

const StickerPanel = () => {
  return (
    <div className='flex flex-wrap gap-[12px]'>
      {STICKERS.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`sticker-${i}`}
          draggable
          onDragStart={(e) => {
            e.dataTransfer.setData('sticker', src);
          }}
          className='w-[60px] h-[60px] object-contain cursor-grab hover:scale-110 transition-transform'
        />
      ))}
    </div>
  );
};

export default StickerPanel;
