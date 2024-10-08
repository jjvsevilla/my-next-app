import Link from "next/link";

export default function Page({ params }) {
  return (
    <div>
      <h1 className="h1-bold">project {params.name}</h1>
      <Link href="/projects/list">Back</Link>
    </div>
  );
}
