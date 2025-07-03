import { LucideIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  width?: number;
  height?: number;
  icon?: LucideIcon;
  text?: string;
  className?: string;
}

export default function ImagePlaceholder({ 
  width = 400, 
  height = 300, 
  icon: Icon, 
  text = "图片占位符",
  className = ""
}: ImagePlaceholderProps) {
  return (
    <div 
      className={`bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded-lg ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className="text-center text-gray-500">
        {Icon && <Icon className="w-12 h-12 mx-auto mb-2" />}
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
}
