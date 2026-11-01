export type Release = {
  name: string | null;
  tag_name: string;
  published_at: string | null;
  html_url: string;
  body: string | null;
  assets: { name: string; browser_download_url: string; size: number }[];
};

export type ReleaseResult =
  | { status: "available"; release: Release }
  | { status: "unavailable"; message: string };

export async function getLatestRelease(): Promise<ReleaseResult> {
  let response: Response;
  try {
    response = await fetch("https://api.github.com/repos/K3NYEL/Slim-Executor-Releases/releases/latest", {
      next: { revalidate: 3600 },
      headers: { Accept: "application/vnd.github+json" },
    });
  } catch (error) {
    console.error("Could not reach GitHub Releases API:", error);
    return { status: "unavailable", message: "The release service is currently unreachable." };
  }

  if (!response.ok) {
    return { status: "unavailable", message: `Release service returned HTTP ${response.status}.` };
  }

  const release = (await response.json()) as Release;
  return { status: "available", release };
}
