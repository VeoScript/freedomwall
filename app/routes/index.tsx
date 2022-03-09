import Welcome from '~/layouts/Welcome'
import { Link } from 'remix';

export default function Index() {
  return (
    <Welcome>
      <div className="flex flex-col w-full max-w-md space-y-5">
        <div className="flex flex-col">
          <h1 className="header font-unifrakturmaguntia">Freedom Wall</h1>
          <h5 className="title">Global access, free and anonymous</h5>
        </div>
        <Link to='/posts' className="button-primary w-[11rem]">
          Join Anonymously
        </Link>
      </div>
    </Welcome>
  );
}
