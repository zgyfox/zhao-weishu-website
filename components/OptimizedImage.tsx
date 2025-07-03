'use client';

import Image from 'next/image';
import { useState } from 'react';
import { User, Camera } from 'lucide-react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  placeholder?: 'profile' | 'expedition' | 'research' | 'academic';
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder = 'research'
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const getPlaceholderIcon = () => {
    switch (placeholder) {
      case 'profile':
        return User;
      case 'expedition':
      case 'research':
      case 'academic':
      default:
        return Camera;
    }
  };

  const PlaceholderIcon = getPlaceholderIcon();

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  // 如果图片加载失败或者是占位符路径，显示占位符
  if (imageError || src.includes('placeholder') || !src || src.startsWith('/images/')) {
    return (
      <div 
        className={`bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded-lg ${className}`}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <div className="text-center text-gray-500">
          <PlaceholderIcon className="w-12 h-12 mx-auto mb-2" />
          <p className="text-sm">图片占位符</p>
          <p className="text-xs text-gray-400 mt-1">
            {placeholder === 'profile' ? '个人照片' : 
             placeholder === 'expedition' ? '科考照片' :
             placeholder === 'research' ? '研究照片' : '学术照片'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={{ width: `${width}px`, height: `${height}px` }}>
      {imageLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded-lg animate-pulse">
          <PlaceholderIcon className="w-8 h-8 text-gray-400" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={`rounded-lg object-cover ${imageLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
    </div>
  );
}
