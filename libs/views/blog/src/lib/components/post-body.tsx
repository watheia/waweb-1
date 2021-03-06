import { Node } from 'datocms-structured-text-utils';
import {
  Image,
  StructuredText,
  StructuredTextDocument,
  StructuredTextGraphQlResponse,
} from 'react-datocms';

export interface PostBodyProps {
  content?:
    | StructuredTextDocument
    | Node
    | StructuredTextGraphQlResponse<any, any>
    | null;
}
export default function PostBody(props: PostBodyProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="prose prose-lg prose-blue prose-invert">
        <StructuredText
          data={props.content}
          renderBlock={({ record }: { record: any }) => {
            if (record.__typename === 'ImageBlockRecord') {
              return <Image data={record.image.responsiveImage} />;
            }

            console.error("Don't know how to render a block!", record);
            return <p>Don't know how to render a block!</p>;
          }}
        />
      </div>
    </div>
  );
}
