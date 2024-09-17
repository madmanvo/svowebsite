
import Image from "next/image"

interface ImgContainerProps {
    photo: {
      src: string;
    };
  }

  const ImgContainer: React.FC<ImgContainerProps> = ({ photo }) => {
    return (
        <div className="h-64 bg-gray-200 rounded-xl relative overflow-hidden group">
            <Image
                src={photo.src.large}
                alt={photo.alt}
                fill={true}
                sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
                className="object-cover group-hover:opacity-75"
            />
        </div>
    );
};
export default ImgContainer;