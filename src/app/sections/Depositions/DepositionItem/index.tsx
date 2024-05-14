import Image, { StaticImageData } from 'next/image';

export type DepositionItemProps = {
  profileImage: StaticImageData;
  name: string;
  businessName: string;
  description: string[];
};

type Props = DepositionItemProps & {};

export default function DepositionItem({
  profileImage,
  name,
  businessName,
  description,
}: Props) {
  return (
    <div className='bg-vizi-laranja-30'>
      <Image src={profileImage} alt={`Image de Perfil de ${name}`} />

      <h4>{name}</h4>

      <h5>{businessName}</h5>

      <div>
        {description.map((paragrath, index) => (
          <p key={index}>{paragrath}</p>
        ))}
      </div>
    </div>
  );
}
