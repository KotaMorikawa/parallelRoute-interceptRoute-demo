import CatPhotoListItem from "@/app/_components/CatPhotoListItem";
import { imagePhotos } from "@/app/_data/catPhote";

type Props = {
  params: Promise<{ photoId: string }>;
};

const PhotoPage = async ({ params }: Props) => {
  const photoId = (await params).photoId;

  const photoData = imagePhotos.find((photo) => photo.id === Number(photoId));

  if (!photoData) {
    return <div>Not Found</div>;
  }

  return (
    <div className="mt-2 grid place-content-center">
      <CatPhotoListItem photoData={photoData} />
    </div>
  );
};

export default PhotoPage;
