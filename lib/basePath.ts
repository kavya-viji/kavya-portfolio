const REPO_NAME = "kavya-portfolio";

const BASE_PATH = process.env.NODE_ENV === "production" ? `/${REPO_NAME}` : "";

export function withBasePath(path: string): string {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
