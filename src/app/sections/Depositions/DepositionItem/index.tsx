import Image, { StaticImageData } from 'next/image';

type Props = {
  profileImage: StaticImageData;
  name: string;
  businessName: string;
  description: string[];
};

export default function DepositionItem({
  profileImage,
  name,
  businessName,
  description,
}: Props) {
  return (
    <article>
      <Image src={profileImage} alt={`Image de Perfil de ${name}`} />

      <h4>{name}</h4>

      <h5>{businessName}</h5>

      <div>
        {description.map((paragrath, index) => (
          <p key={index}>{paragrath}</p>
        ))}
      </div>
    </article>
  );
}
