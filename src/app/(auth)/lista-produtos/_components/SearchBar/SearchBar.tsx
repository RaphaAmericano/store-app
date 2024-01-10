import { useRouter } from "next/navigation"
import Form from "./Form"

const SearchBar = () => {
    const { push } = useRouter() 

    function search(query: string){
        push(`/lista-produtos?q=${query}`)
    }    

    return <Form callback={search} />
}
export default SearchBar