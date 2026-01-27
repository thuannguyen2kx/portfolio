import CVMarkdown from "@/app/cv/_components/CVMardown";
import fs from "fs";
import path from "path";

export async function getCVMarkdown() {
  const filePath = path.join(process.cwd(), "/data/cv/cv.md");
  return fs.readFileSync(filePath, "utf8");
}

export default async function CVPage() {
  const content = await getCVMarkdown();

  return (
    <div className="min-h-screem bg-black text-white">
      <CVMarkdown content={content} />
    </div>
  );
}
