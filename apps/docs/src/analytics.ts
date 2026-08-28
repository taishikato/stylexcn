import { initDataFast } from "datafast";

const WEBSITE_ID = "dfid_0KzOoU6kfWJvIhEshzqoJ";

let datafast: Awaited<ReturnType<typeof initDataFast>> | null = null;

export async function getAnalytics() {
  if (!datafast) {
    datafast = await initDataFast({
      websiteId: WEBSITE_ID,
      autoCapturePageviews: true,
    });
  }
  return datafast;
}
