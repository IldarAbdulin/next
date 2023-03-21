import Link from 'next/link';
import { IUserData } from '@/interfaces/user.interfce';
import { Layout } from '@/components/layout/Layout';
import { UserIten } from '@/components/ui/user/UserIten';

const Home: React.FC<IUserData> = ({ users }) => {
  return (
    <Layout title="Home" desc="We love customer, we like to sale cars">
      <h1 style={{ color: '#fff' }}>Hello</h1>
      <hr />
      <br />
      <br />
      <br />
      <div style={{ padding: '0 100px' }}>
        {users ? (
          users.map((user) => (
            <>
              <UserIten key={user.id} user={user} />
              <Link
                href={`users/${user.id}`}
                style={{
                  border: '1px solid #fff',
                  color: '#fff',
                  padding: '5px',
                }}
              >
                Read More
              </Link>
            </>
          ))
        ) : (
          <h1>Users Not Found!</h1>
        )}
      </div>
    </Layout>
  );
};

export default Home;
