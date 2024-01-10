import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Image from "next/image";

const Profile = async () => {
    const session = await getServerSession(options);
    if(session?.user?.email === undefined){
        return null
    }
    const { user } = session;
    const { name, email, image, avatar, picture } = user;
    const theImage = image ?? avatar ?? picture ?? "https://avatar.iran.liara.run/public/10";
    return <div className="flex items-center w-full self-end">
        <Image width={30} height={10} src={theImage} alt={`Foto ou avatar do usuário ${name}`} />
        <small>{name} : {email}</small>
    </div>
}

export default Profile