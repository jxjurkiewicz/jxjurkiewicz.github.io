import Header from "@/components/Header/Header";
import Link from "next/link";
import "../globals.css";

export default function NotFound() {
  return (
    <>
      <main className="page404">
        <Header />
        <div className="h-[60vh] flex flex-col items-start justify-center">
          <h1 className="font-audiowide text-5xl font-extrabold text-center mx-auto text-green-100 mb-5">
            There was a problem.
          </h1>
          <div className="mx-auto text-dark text-center text-xl">
            <p>We could not find the page you were looking for.</p>
            <p>
              Go back to the <Link href="/">Dashboard.</Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
