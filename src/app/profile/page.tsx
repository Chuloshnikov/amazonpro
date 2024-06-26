import Container from '@/components/Container';
import ProfileInfo from '@/components/ProfileInfo';
import ProfileOrders from '@/components/ProfileOrders';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';


const ProfilePage = async () => {
    const session = await getServerSession();
    
    if (!session || !session.user) {
        redirect("/");
    } 

  return (
    <Container>
        <p className='text-xl font-semibold pb-10 underline underline-offset-4 decoration-[1px]'>
          Profile Information
        </p>
        <ProfileInfo/>
        <ProfileOrders/>
    </Container>
  )
}

export default ProfilePage;