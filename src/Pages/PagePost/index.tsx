

import { useParams } from "react-router-dom";
import Header from "../../components/Header"
import CardPagePost from "../components/CardPagePost"
import PostContent from "../components/PostContent"
import { PagePostComponent } from "./styles"
import { useContext } from "react";
import { contextBlog } from "../../context/ContextBlogGit";
import React from "react";


function PagePost() {

  const params = useParams();
  const { apiUsersGit } = useContext(contextBlog)


  const issue = params.id ? apiUsersGit.find(item => {
    const itemId = parseInt(item.id);
    const paramsId = parseInt(params.id ?? "");
    // console.log('Item ID:', itemId);
    // console.log('Params ID:', paramsId);
    return itemId === paramsId;
  }) : null;


  return (
    <PagePostComponent>
      <Header />
      {issue &&
        <CardPagePost
        title={issue.title}
        github={issue.user.login}
        date={issue.updated_at}
        comment={issue.comments}
        giturl={issue.html_url}
        />}

      <PostContent body={issue?.body ?? ""} />
    </PagePostComponent>
  )
}

export default PagePost;