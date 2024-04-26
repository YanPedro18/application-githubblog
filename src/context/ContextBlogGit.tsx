import { ReactNode, createContext, useEffect, useState } from "react";
import { apiGit } from "../Util/axios";
import React from "react";

interface PropsTypeContext {
  handleGetUsers: (user: string) => void;
  apiUsersGit: TypePropUsers[];
}
interface TypePropUsers {
  id: string;
  title: string;
  body: string;
  user: UserType;
  updated_at: string;
  comments: number;
  html_url: string;
}
interface UserType {
  login: string;
  id: number;
  // Adicione outras propriedades do usuário, se necessário
}
interface childrenType {
  children: ReactNode;
}

export const contextBlog = createContext({} as PropsTypeContext);

function ContextBlogGit({ children }: childrenType) {


  const [apiUsersGit, setApiUsersGit] = useState<TypePropUsers[]>([]);
  const [cloneApiUsersGit, setCloneApiUsersGit] = useState<TypePropUsers[]>([]);


  async function handleGetUsers(user: string) {

    const token = 'seutokenaqui';


    const response = await apiGit.get(`search/issues?q=${user}%20repo:YanPedro18/application-githubblog+is:issue`, {
      headers: {
        Accept: 'application/vnd.github+json',
        'Authorization': `Bearer ${token}`,
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })

    if (response.data.items && user) {
      // Filtra os itens cujo título corresponde ao que foi digitado pelo usuário
      const filteredItems = response.data.items.filter((item: TypePropUsers) => {
        return item.title.toLowerCase().includes(user.toLowerCase());
      });


      setApiUsersGit(filteredItems)
      console.log(apiUsersGit);
    } else {
      console.log(apiUsersGit)
      setApiUsersGit(cloneApiUsersGit);
    }


  }

  useEffect(() => {

    const token = 'seutokenaquis';

    async function fetchApiGit() {
      try {
        
        const response = await apiGit.get(`search/issues?q=repo:YanPedro18/application-githubblog+is:issue`, {
          headers: {
            Accept: 'application/vnd.github+json',
            'Authorization': `Bearer ${token}`,
            'X-GitHub-Api-Version': '2022-11-28'
          }
        })
        const items = response.data.items;
        console.log(response.data.items)
        setCloneApiUsersGit(items);
        setApiUsersGit(items);


      } catch (error) {
        console.log(error)
      }
    }
    fetchApiGit()

  }, [])

  return (
    <>
      <contextBlog.Provider value={{ handleGetUsers, apiUsersGit }}>
        {children}
      </contextBlog.Provider>
    </>
  )
}

export default ContextBlogGit;