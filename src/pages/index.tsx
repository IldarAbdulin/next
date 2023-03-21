import Home from '@/components/screens/home/Home';
import { IUserData } from '@/interfaces/user.interfce';
import { UserService } from '@/services/users.service';
import { GetStaticProps, NextPage } from 'next';

const HomePage: NextPage<IUserData> = ({ users }) => {
  return (
    <>
      <Home users={users} />
    </>
  );
};

export const getServerSideProps: GetStaticProps<IUserData> = async () => {
  const users = await UserService.getAll();
  return {
    props: { users },
  };
};

export default HomePage;
