type Props = {
  isOpen: boolean;
  onClick: () => void;
};

export default function NavbarButton({ isOpen, onClick }: Props) {
  return <button onClick={onClick}>{!isOpen ? '===' : 'X'}</button>;
}
