'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
interface ImgContainerProps {
  photo: {
    src: string;
    alt?: string; // Make alt optional
    url?: string;
  };
}

const ImgContainer: React.FC<ImgContainerProps> = ({ photo }) => {
  const defaultAlt = "Default alt text"; // Define default alt text
  const [dimensions, setDimensions] = useState({ width: 250, height: 250 }); // Initial placeholder dimensions
  const imgRef = useRef<HTMLImageElement>(null);

  const handleLoad = () => {
    if (imgRef.current) {
      const { naturalWidth, naturalHeight } = imgRef.current;
      setDimensions({ width: naturalWidth, height: naturalHeight });
    }
  };

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      handleLoad();
    }
  }, []);

  const widthHeightRatio = dimensions.height / dimensions.width;
  const galleryHeight = Math.ceil(250 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;

  return (
    <div className="w-[250px] justify-self-center p-2" style={{ gridRow: `span ${photoSpans}` }}>
      <div className="rounded-xl relative overflow-hidden group">
        <Link href={photo.url || photo.src} target="_blank">
          <Image
            ref={imgRef}
            src={photo.src}
            alt={photo.alt || defaultAlt} // Use default alt text if not provided
            width={250}
            height={galleryHeight}
            sizes="250px"
            className="group-hover:opacity-75"
            onLoad={handleLoad}
          />
        </Link>
      </div>
    </div>
  );
};

export default ImgContainer;