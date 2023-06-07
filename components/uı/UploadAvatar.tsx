import React, { useState } from 'react';
import Image from 'next/image';
import { useFileStore } from '../../stores/SelectFile';
import supabase from '@/lib/supabase-client';
import { useUser } from '../../stores/User';

interface ProfilePictureProps {}

const ProfilePicture: React.FC<ProfilePictureProps> = () => {
  const {
    selectedFile,
    previewImage,
    isHovered,
    setSelectedFile,
    setPreviewImage,
    setIsHovered,
    currentUser,
  } = useFileStore();

  const handleFileInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const renderPreviewImage = () => {
    if (previewImage) {
      return (
        <Image
          src={previewImage}
          alt="Preview"
          style={{ borderRadius: '50%', width: '70px', height: '70px' }}
          width={150}
          height={150}
        />
      );
    }
    return <div className="w-[70px] h-[70px] bg-[#393E46] rounded-[50%]"></div>;
  };

  const handleHover = (hovered: boolean) => {
    setIsHovered(hovered);
  };

  return (
    <div
      className="relative w-[70px] h-[70px] rounded-[50%]"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <div
        className={`absolute flex items-center justify-center h-[70px] w-[70px] ${
          isHovered ? ' opacity-100' : 'bg-transparent opacity-100'
        }`}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleFileInputChange}
          className={`absolute bg-[#393E46] h-[70px] w-[70px] rounded-[50%] appearance-none opacity-0`}
        />

        <p
          className={`text-[10px] text-white font-bold h-[70px] w-[70px] rounded-[50%] flex items-center justify-center 
          ${isHovered ? 'bg-[#393E46]' : 'opacity-0'}`}
        >
          DOSYA SEÇ
        </p>
      </div>

      {renderPreviewImage()}
    </div>
  );
};

export default ProfilePicture;
