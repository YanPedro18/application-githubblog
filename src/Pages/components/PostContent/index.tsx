import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ContentCodeGithub, PostContentComponent, PostContentDynamic, PostContentIssue } from "./styles";

interface PostContentProps {
  body: string;
}

const PostContent: React.FunctionComponent<PostContentProps> = ({ body }) => {
  // Dividir o corpo do texto em diferentes seções
  const sections = body.split("```javascript");

  // Extrair apenas o primeiro trecho de código encontrado
  const codeSection = sections.length > 1 ? sections[1].split("```")[0] : '';

  return (
    <PostContentComponent>
      <PostContentIssue>
        <p>
          <strong>Programming languages all have built-in data structures, but these
            often differ from one language to another.</strong>
          This article attempts to list the built-in data structures available
          in JavaScript and what properties they have. These can be used to build
          other data structures. Wherever possible, comparisons with other
          languages are drawn.
        </p>
      </PostContentIssue>

      <PostContentDynamic>
        <h3>Dynamic typing</h3>
        <p>{body}</p>
      </PostContentDynamic>

    {codeSection ?
          <ContentCodeGithub>
          {/* Renderizar o trecho de código encontrado com highlight de sintaxe */}
          <SyntaxHighlighter language="javascript" style={dracula}>
            {codeSection}
          </SyntaxHighlighter>
        </ContentCodeGithub>  
        : ""}
    </PostContentComponent>
  );
}

export default PostContent;
