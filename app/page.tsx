import Link from "next/link";

export default function Home() {
  return (
    <div className="p-5">
      <h1 className="text-center">To do List</h1>
      <Link
        href={"/task"}
        className="px-4 py-2 bg-sky-700 rounded hover:bg-sky-600"
      >
        Create new Task
      </Link>
    </div>
  );
}
