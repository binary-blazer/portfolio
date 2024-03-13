import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "content/*.mdx",
  bodyType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    date: {
      type: "string",
      required: true,
    },
    slug: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: {
        type: "string",
      },
    },
    summary: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    readingTime: {
      type: "string",
      resolve: (doc) => {
        const wordsPerMinute = 200;
        const wordCount = doc.body.split(/\s/g).length;
        const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
        return `${readingTimeMinutes} min read`;
      },
    },
  },
}));
const source = makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
});
export default source;
