import Image from "next/image";

interface ProfileProps {
    name: string;
    email: string;
    image?: string;
    avatar?: string;
    picture?: string; 
}
const Profile = (props:ProfileProps) => {
    const { name, email, image, avatar, picture } = props;
    const theImage = image ?? avatar ?? picture ?? "https://avatar.iran.liara.run/public/10";
    return <div className="flex items-center shrink">
        <Image width={30} height={10} src={theImage} alt={`Foto ou avatar do usuário ${name}`} />
        <small>{name} : {email}</small>
    </div>
}

export default Profile