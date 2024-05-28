import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="text-4xl font-bold flex h-screen justify-center items-center">
      <h2>
        {' '}
        Ooops ... <br /> Page Not Found
      </h2>
      <Link to={'/'}>
        {' '}
        <button className="btn bg-red-300">Go back</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
