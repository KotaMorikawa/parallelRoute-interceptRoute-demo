import Image from "next/image";
import Link from "next/link";

type Props = {
  photoData: PhotoData;
};

const CatPhotoListItem = ({ photoData }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl text-center">{photoData.title}</h1>
      <Link href={`/photo/${photoData.id}`}>
        <div className="border-2 rounded-xl overflow-hidden aspect-square relative">
          <Image
            src={photoData.path}
            alt={photoData.title}
            sizes="256px"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </Link>
    </div>
  );
};

export default CatPhotoListItem;
