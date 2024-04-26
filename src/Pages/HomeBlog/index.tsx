import CardBlog from "../../components/CardBlog"
import Header from "../../components/Header"
import CardIssue from "../../components/CardIssue"
import SearchForm from "../components/SearchForm"
import { HomeComponent } from "./styles"
import React from "react"

// interface PropsTypeContext{
//   handleGetUsers: (user: string) => void;
//   users: string;
//   apiUsersGit: TypePropUsers[];
// }

// interface TypePropUsers{
//   id: string;
//   title: string;
//   body: string;


// }

// export const contextBlog = createContext({} as PropsTypeContext);

function HomeBlog() {

  // const [users, setUsers] = useState("");

  // const [apiUsersGit, setApiUsersGit] = useState<TypePropUsers[]>([]);



  // async function handleGetUsers(user: string) {

  //   setUsers(user);

  //   setApiUsersGit([]);

  // }

//   useEffect(() => {

//     const token = 'sua chave da api';

//     async function fetchApiGit() {
//       try {

// // /users/${users}
//         const response = await apiGit.get(`search/issues?q=repo:YanPedro18/application-githubblog+is:issue`, {
//           headers: {
//              Accept: 'application/vnd.github+json',
//             'Authorization': `Bearer ${token}`,
//             'X-GitHub-Api-Version': '2022-11-28'

//           }
//         })

//         console.log(response.data.items)
//         setApiUsersGit(response.data.items);
      
//       } catch (error) {
//         console.log(error)
//       }
//     }
//       fetchApiGit()
    
//   }, [users])
  return (
   <HomeComponent>
    {/* <contextBlog.Provider value={ { handleGetUsers, users, apiUsersGit } }> */}
      <Header />
      <CardBlog />
      <SearchForm />
      <CardIssue />
    {/* </contextBlog.Provider> */}
   </HomeComponent>
  )
}

export default HomeBlog