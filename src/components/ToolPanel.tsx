type Props = {
  currentColor: string;
  onColorChange: (color: string) => void;
};

const COLORS = [
  '#000000',
  '#FF4C4C',
  '#4CFF4C',
  '#4C4CFF',
  '#FFD700',
  '#FF69B4',
  '#00CED1',
];

const ToolPanel = ({ currentColor, onColorChange }: Props) => {
  return (
    <div className='flex flex-wrap gap-[8px]'>
      {COLORS.map((color) => (
        <button
          key={color}
          onClick={() => onColorChange(color)}
          className={`w-[32px] h-[32px] rounded-full border-2 ${
            currentColor === color ? 'border-white' : 'border-transparent'
          }`}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
};

export default ToolPanel;
