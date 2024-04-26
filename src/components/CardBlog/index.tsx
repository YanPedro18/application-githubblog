import { CardBlogComponente, CardBlogContainer, CardImg, CardInformations, ContentSocialMedia, TextInformation } from "./styles"
import imgCard from "../../assets/photoTest.jpeg"
import { ArrowSquareOut, Building, GithubLogo, Users } from "@phosphor-icons/react"
import { Link } from "react-router-dom";


function CardBlog() {

  return (
    <CardBlogComponente>
    
                 <CardBlogContainer>
                 <CardImg>
                    <img src={imgCard} alt="" />
                 </CardImg>
                    <CardInformations>
                        <TextInformation>
                            <h2>Yan Pedro</h2>
                            <div>
                                <Link to="https://github.com/YanPedro18">GITHUB</Link>
                                <ArrowSquareOut size={22} />
                            </div>
                           
                        </TextInformation>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, atque quia veritatis consequuntur ad quisquam tenetur quaerat consectetur sapiente, corporis eius dolore distinctio, expedita a iure nisi ea! Sunt, inventore.</p>
        
                        <ContentSocialMedia>
                            <span>
                                <GithubLogo size={23} />
                                <p>YanPedro18</p>
                            </span>
                            <span>
                                <Building size={23} />
                                <p>Reply</p>
                            </span>
                            <span>
                                <Users size={23} />
                                <p>40 seguidores</p>
                            </span>
                        </ContentSocialMedia>
                    </CardInformations>
                </CardBlogContainer>
       
        {/* {apiUsersGit.map(items => {
            return (
                <CardBlogContainer key={items.id}>
                <CardImg>
                   <img src={items.avatar_url} alt="" />
                </CardImg>
                   <CardInformations>
                       <TextInformation>
                           <h2>{items.login}</h2>
                           <div>
                               <Link to={items.html_url }  >GITHUB</Link>
                               <ArrowSquareOut size={22} />
                           </div>
                 
                       </TextInformation>
                       <p>{items.bio}</p>
       
                       <ContentSocialMedia>
                           <span>
                               <GithubLogo size={23} />
                               <p>{items.login}</p>
                           </span>
                           <span>
                               <Building size={23} />
                               <p>{items.company}</p>
                           </span>
                           <span>
                               <Users size={23} />
                               <p>{items.followers} seguidores</p>
                           </span>
                       </ContentSocialMedia>
                   </CardInformations>
               </CardBlogContainer>
            );
        })} */}
    </CardBlogComponente>

  )
}

    export default CardBlog