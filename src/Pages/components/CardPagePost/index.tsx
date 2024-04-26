import { ArrowSquareOut, CalendarDots, CaretLeft, ChatCircle, GithubLogo } from "@phosphor-icons/react"
import { CardIssueUser, CardPagePostComponent, ContentGithub, ContentSocialGithub } from "./style"
import { Link } from "react-router-dom";


interface PostContentProps {
    title: string;
    github: string;
    comment: number;
    date: string;
    giturl: string;
  }

function CardPagePost({ title, github, comment, date, giturl }: PostContentProps) {

    return (
        <CardPagePostComponent>

            <CardIssueUser>

                <ContentGithub>
                    <div>
                        <CaretLeft size={22} />
                        <Link to="/">VOLTAR</Link>
                    </div>

                    <div>
                        <Link to={giturl}>VER NO GITHUB</Link>
                        <ArrowSquareOut size={22} />
                    </div>

                </ContentGithub>
                <p>
                    {title}
                </p>

                <ContentSocialGithub>
                    <div>
                        <GithubLogo size={23} />
                        <p>{github}</p>
                    </div>

                    <div>
                        <CalendarDots size={23} />
                        <p>{new Date(date).toLocaleDateString('pt-BR', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric',
                                  
                                    })}</p>
                    </div>

                    <div>
                        <ChatCircle size={23} />
                        <p>{comment} comentários</p>
                    </div>
                </ContentSocialGithub>

            </CardIssueUser>

        </CardPagePostComponent>
    )
}

export default CardPagePost