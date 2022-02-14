import Image from 'next/image';

const ProfileImage = () => {
  return (
    <div className="relative w-60 h-60">
      <Image 
       src="/profilepic.png"
       alt="Profile Image" 
       layout="fill" 
       objectFit="cover"
       priority
       placeholder="blur"
       blurDataURL="/profilepic.png"
       className="rounded-full" 
      />
    </div>
  );
};
  
export default ProfileImage;
