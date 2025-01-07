import { Modal } from "~/app/@modal/(.)img/[id]/modal";
import FullPageImageView from "~/components/full-image-page";

export default async function PhotoModal({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const photoId = Number(id);
  if (Number.isNaN(photoId)) {
    throw new Error("Invalid photo ID");
  }

  return (
    <Modal>
      <FullPageImageView id={photoId} />
    </Modal>
  )
}
