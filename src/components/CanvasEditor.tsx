import { useEffect, useRef, useState } from 'react';
import UploadButton from './UploadButton';

const CanvasEditor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!imageUrl || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. 이미지 및 캔버스 비율 계산
      const imgAspect = img.width / img.height;
      const canvasAspect = canvas.width / canvas.height;

      let drawWidth, drawHeight;

      // 2. 더 긴 쪽에 맞춰서 축소 (비율 유지)
      if (imgAspect > canvasAspect) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgAspect;
      } else {
        drawHeight = canvas.height;
        drawWidth = canvas.height * imgAspect;
      }

      // 3. 중앙 정렬을 위한 오프셋
      const offsetX = (canvas.width - drawWidth) / 2;
      const offsetY = (canvas.height - drawHeight) / 2;

      // 4. 이미지 캔버스에 그리기
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };
    img.src = imageUrl;
  }, [imageUrl]);

  return (
    <div className='flex flex-col items-center'>
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        className='border border-white/50 bg-white/10'
      />
      <UploadButton onUpload={setImageUrl} />
    </div>
  );
};

export default CanvasEditor;
