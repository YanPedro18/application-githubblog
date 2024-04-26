
import { useContext } from "react"
import { SearchContent, SearchFormComponent } from "./styles"
import { contextBlog } from "../../../context/ContextBlogGit";
import { useForm } from "react-hook-form";


interface typeForm {
  value: string;
}

function SearchForm() {

const { handleGetUsers , apiUsersGit } = useContext(contextBlog);

const filterPub = apiUsersGit.length;

const { register, handleSubmit} = useForm({
  defaultValues: {
    value: ""
  }
});

function handleGetValueUsers(data: typeForm) {

handleGetUsers(data.value);
}

  return (
    <SearchFormComponent onSubmit={handleSubmit(handleGetValueUsers)}>
      <SearchContent>
        <div>
          <h1>Publicações</h1>
          <p>{filterPub} Publicações</p>
        </div>
        <input
          type="text"
          id="value" 

          {...register('value')}
          placeholder="Buscar conteúdo"
          />
      </SearchContent>
    </SearchFormComponent>
  )
}

export default SearchForm