import { getImage } from "~/server/queries";

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

  const image = await getImage(photoId);

  return (
    <div>
      <img src={image.url} alt={image.name} className="w-96" />
    </div>
  )
}
