import { Markdown } from "dejamu/plugins/md/Markdown.tsx";
import { LayoutComponent } from "dejamu/plugins/md/MarkdownPlugin.tsx";

export const PostsLayout: LayoutComponent = ({ children }) => {
  return (
    <div className="container mx-auto p-4">
      <div className={"prose prose-md"}>
        <Markdown>{children}</Markdown>
      </div>
    </div>
  );
};

export default PostsLayout;
