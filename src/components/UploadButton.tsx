import { ChangeEvent } from 'react';

type Props = {
  onUpload: (image: string) => void;
};

const UploadButton = ({ onUpload }: Props) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) throw new Error('파일이 선택되지 않았습니다.');

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        onUpload(reader.result); // base64 URL 전달
      }
    };
    reader.readAsDataURL(file); // base64 변환
  };
  return (
    <label className='inline-block cursor-pointer my-[20px] px-[12px] py-[8px] bg-white/30 text-white font-medium text-xl rounded-md hover:bg-white/40 transition-all'>
      사진 업로드
      <input
        type='file'
        accept='image/*'
        onChange={handleFileChange}
        className='hidden'
      />
    </label>
  );
};

export default UploadButton;
