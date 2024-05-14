import Image, { StaticImageData } from 'next/image';

import style from './depositionItem.module.scss';

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
    <div className={style['deposition-item']}>
      <Image
        className={style['deposition-item__profile-image']}
        src={profileImage}
        alt={`Image de Perfil de ${name}`}
      />

      <div className={style['deposition-item__profile']}>
        <h4 className={style['deposition-item__name']}>{name}</h4>

        <h5 className={style['deposition-item__business-name']}>
          {businessName}
        </h5>
      </div>

      <div className={style['deposition-item__descriptions']}>
        {description.map((paragrath, index) => (
          <p key={index}>{paragrath}</p>
        ))}
      </div>
    </div>
  );
}
