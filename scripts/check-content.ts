import fs from "fs";
import path from "path";
import matter from "gray-matter";

const isProduction = process.env.NODE_ENV === "production";
const contentDir = path.join(process.cwd(), "content");

let errors: string[] = [];
let warnings: string[] = [];

function checkFileContent(filePath: string, fileContent: string) {
  const relPath = path.relative(process.cwd(), filePath);
  
  if (fileContent.includes("NEEDS_CONFIRMATION")) {
    const msg = `[${relPath}] Contains unresolved token 'NEEDS_CONFIRMATION'`;
    isProduction ? errors.push(msg) : warnings.push(msg);
  }

  if (fileContent.includes("TODO")) {
    const msg = `[${relPath}] Contains 'TODO' item`;
    isProduction ? errors.push(msg) : warnings.push(msg);
  }

  // Check for non-https links (http:// instead of https://)
  const httpRegex = /http:\/\/(?!localhost|127\.0\.0\.1)/g;
  if (httpRegex.test(fileContent)) {
    const msg = `[${relPath}] Contains insecure http:// URL`;
    isProduction ? errors.push(msg) : warnings.push(msg);
  }
}

function checkProjectsDir() {
  const projectsDir = path.join(contentDir, "projects");
  if (!fs.existsSync(projectsDir)) return;

  const files = fs.readdirSync(projectsDir).filter(f => f.endsWith(".mdx") || f.endsWith(".md"));

  for (const file of files) {
    const filePath = path.join(projectsDir, file);
    const rawContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(rawContent);

    // Only check published projects strictly in production
    if (data.publish === true) {
      checkFileContent(filePath, rawContent);

      if (data.verification) {
        for (const [key, val] of Object.entries(data.verification)) {
          if (val !== true) {
            const msg = `[${file}] Published project has verification.${key} = false`;
            isProduction ? errors.push(msg) : warnings.push(msg);
          }
        }
      }

      if (!data.screenshots || data.screenshots.length === 0) {
        const msg = `[${file}] Published project has no screenshots`;
        isProduction ? errors.push(msg) : warnings.push(msg);
      }
    }
  }
}

function main() {
  console.log("🔍 Running content publication guard check...");
  
  // Recursively inspect /content directory files
  function walkDir(dir: string) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walkDir(fullPath);
      } else if (entry.isFile() && (entry.name.endsWith(".ts") || entry.name.endsWith(".mdx") || entry.name.endsWith(".md"))) {
        const content = fs.readFileSync(fullPath, "utf-8");
        checkFileContent(fullPath, content);
      }
    }
  }

  walkDir(contentDir);
  checkProjectsDir();

  if (warnings.length > 0) {
    console.warn("\n⚠️ Content Warnings (Non-blocking in dev mode):");
    warnings.forEach(w => console.warn(`  - ${w}`));
  }

  if (errors.length > 0) {
    console.error("\n❌ Production Content Guard Failures:");
    errors.forEach(e => console.error(`  - ${e}`));
    console.error("\nProduction build aborted due to unverified content.");
    process.exit(1);
  } else {
    console.log("✅ Content guard check passed successfully.\n");
  }
}

main();
