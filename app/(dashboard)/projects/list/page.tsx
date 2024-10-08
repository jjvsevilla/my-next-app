import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="h1-bold">projects/list</h1>
      <ul>
        <li>
          <Link href="/projects/jobit">JobIt</Link>
        </li>
        <li>
          <Link href="/projects/carrent">Car Rent</Link>
        </li>
        <li>
          <Link href="/projects/hipnode">hipnode</Link>
        </li>
      </ul>
    </div>
  );
}
