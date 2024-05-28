import { useEffect, useState } from "react"
import api from "../../api/api";
import Input from "../Input/Input";
import Select from "../Select/Select";
import SubmitButton from "../SubmitButton/SubmitButton";

export interface ProjetoFormProps {
    btnText: string,
    handleSumbit: any,
    projectData?: any
}

export default function ProjetoForm({ btnText, handleSumbit, projectData }: ProjetoFormProps) {
    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});
    useEffect(() => {
        api.get("/categories")
            .then((res) => {
                setCategories(res.data);
            })
            .catch((error) => console.log(error));
    }, []);

    const submit = (e: Event | any) => {
        e.preventDefault();
        handleSumbit(project);
    }

    const handleChange = (e: Event | any) => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        });
    }

    const handleSelect = (e: Event | any) => {
        setProject({
            ...project, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
            }
        });
    }

    return (
        <form onSubmit={submit} className="w-full m-20">
            <Input
                type="text"
                text="Nome do Projeto"
                name="name"
                handleOnChange={handleChange}
                placeholder="Insira o nome do projeto"
                value={project.name ? project.name : ""}
            />
            <Input
                type="number"
                text="Orçamento do Projeto"
                name="budget"
                handleOnChange={handleChange}
                placeholder="Insira o orçamento total"
                value={project.budget ? project.budget : ""}
            />
            <Select
                name="category_id"
                text="Selecione a categoria"
                options={categories}
                handleOnChange={handleSelect}
                value={project.category ? project.category.id: ''}
            />
            <SubmitButton text={btnText}/>
        </form>
    );
}