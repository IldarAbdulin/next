import Home from '@/components/screens/home/Home';
import UserDetail from '@/components/screens/user/UserDetail';
import { IUserData, IUserDataSingle } from '@/interfaces/user.interfce';
import { UserService } from '@/services/users.service';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

const UserPage: NextPage<IUserDataSingle> = ({ user }) => {
  return (
    <>
      <UserDetail user={user} />
    </>
  );
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const users = await UserService.getAll();
  return {
    paths: users.map((user) => ({
      params: {
        id: user.id.toString(),
      },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<IUserDataSingle> = async ({
  params,
}) => {
  const user = await UserService.getById(String(params?.id));
  return {
    props: { user },
    revalidate: 60,
  };
};

export default UserPage;
