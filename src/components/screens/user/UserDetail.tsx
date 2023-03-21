import { Layout } from '@/components/layout/Layout';
import { UserIten } from '@/components/ui/user/UserIten';
import { IUserDataSingle } from '@/interfaces/user.interfce';
import React from 'react';

const UserDetail: React.FC<IUserDataSingle> = ({ user }) => {
  return (
    <Layout title={user.name} desc="User">
      <UserIten user={user} />
    </Layout>
  );
};
export default UserDetail;
