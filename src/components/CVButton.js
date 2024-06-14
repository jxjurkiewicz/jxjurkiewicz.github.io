import Link from "next/link";

export default function CVButton() {
  return (
    <div className="flex justify-center">
      <Link href="/CV_Jakub_Jurkiewicz_ENG.pdf" target="_blank">
        <button className="button-hover button font-audiowide">Curriculum Vitae</button>
      </Link>
    </div>
  );
}
