export const ContentMetaData = {
  title: String,
  description: String,
  date: Date,
  author: String,
  banner: String,
  tags: [String],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  projectName: "portfolio",
  contentPath: "./content",
  assetsPath: "./public/img",
  apiKey: {
    env: "true",
    variable: "NEXT_PUBLIC_CONTENTHOOK_API_KEY",
  },
  apiVersion: "v1",
};
