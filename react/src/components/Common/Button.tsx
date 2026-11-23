export interface IButton {
  name: string;
  className?: string;
  link?: string;
}

export const Button = ({ name, className, link }: Readonly<IButton>) => {
  const iconUrl =
    link ||
    `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name.toLowerCase()}/${name.toLowerCase()}-original.svg`;
  return (
    <div
      className={`w-30 h-10 border border-[#8FAAC5] text-[#8FAAC5] flex items-center  justify-center  cursor-pointer rounded-md mx-auto gap-2 ${className}`}
    >
      <img src={iconUrl} className="w-6 h-6" alt={name} />
      <span className="text-sm">{name}</span>
    </div>
  );
};

export const Line = () => {
  return <div className="h-20 w-0.5 bg-[#344C64] mx-auto mt-20"></div>;
};
