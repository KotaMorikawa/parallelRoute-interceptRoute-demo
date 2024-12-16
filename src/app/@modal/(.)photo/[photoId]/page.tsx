import CatPhotoListItem from "@/app/_components/CatPhotoListItem";
import Modal from "@/app/_components/Modal";
import { imagePhotos } from "@/app/_data/catPhote";

type Props = {
  params: Promise<{ photoId: string }>;
};

const Photo = async ({ params }: Props) => {
  const photoId = (await params).photoId;

  const photoData = imagePhotos.find((photo) => photo.id === Number(photoId));

  if (!photoData?.id) {
    return <h1 className="text-center">No Photo Found for that ID.</h1>;
  }

  return (
    <Modal>
      <CatPhotoListItem photoData={photoData} />
    </Modal>
  );
};

export default Photo;
