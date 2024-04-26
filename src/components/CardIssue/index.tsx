import { useContext } from "react"
import { CardIssueComponent, IssueCardBox, IssueContent, IssueContentFlex } from "./styles"
import { contextBlog } from "../../context/ContextBlogGit";


function CardIssue() {

    const { apiUsersGit } = useContext(contextBlog);

    return (
        <CardIssueComponent>
            <IssueContentFlex>
                {/* <IssueContent>

                    <IssueCardBox>
                        <h1>JavaScript data types and data structures</h1>
                        <span>Há 1 dia</span>
                    </IssueCardBox>
                    <p>
                        Programming languages all have built-in data structures,
                        but these often differ from one language to another. This article attempts
                        to list the built-in data structures available in...
                    </p>
                </IssueContent> */}
                {/* <IssueContent>

                    <IssueCardBox>
                        <h1>JavaScript data types and data structures</h1>
                        <span>Há 1 dia</span>
                    </IssueCardBox>
                    <p>
                        Programming languages all have built-in data structures,
                        but these often differ from one language to another. This article attempts
                        to list the built-in data structures available in...
                    </p>
                </IssueContent> */}

                {apiUsersGit.map((items) => {
                    return (
                            //issueContent é tag Link router.
                            <IssueContent key={items.id} to={`/PostIssue/${items.id}`}>

                                <IssueCardBox>
                                    <h1>{items.title}</h1>
                                    <span>{new Date(items.updated_at).toLocaleDateString('pt-BR', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}</span>
                                </IssueCardBox>
                                <p>
                                    {items.body}
                                </p>
                            </IssueContent>
                    );
                })}
            </IssueContentFlex>
        </CardIssueComponent>
    )
}

export default CardIssue