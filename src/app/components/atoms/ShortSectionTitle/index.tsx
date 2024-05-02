import bindClass from '@helpers/bindClass';
import styles from './shortSectionTitle.module.scss';

type Props = {
  children: string;
  className?: string;
  decoratorColor?: 'blue' | 'yellow' | 'orange';
};

export default function ShortSectionTitle({
  children,
  className,
  decoratorColor = 'orange',
}: Props) {
  return (
    <h1
      className={bindClass(
        styles['short-section-title'],
        styles[`short-section-title--${decoratorColor}`],
        className
      )}
    >
      {children}
    </h1>
  );
}
