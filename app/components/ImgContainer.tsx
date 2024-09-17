import Image from "next/image";

interface ImgContainerProps {
  photo: {
    src: string;
    alt?: string; // Make alt optional
  };
}

const ImgContainer: React.FC<ImgContainerProps> = ({ photo }) => {
  const defaultAlt = "Default alt text"; // Define default alt text

  return (
    <div className="h-64 bg-gray-200 rounded-xl relative overflow-hidden group">
      <Image
        src={photo.src}
        alt={photo.alt || defaultAlt} // Use default alt text if not provided
        fill={true}
        sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
        className="object-cover group-hover:opacity-75"
      />
    </div>
  );
};

export default ImgContainer;