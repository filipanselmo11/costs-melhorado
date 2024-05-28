import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import ProjetoForm from "../../components/ProjetoForm/ProjetoForm";


export default function NovoProjeto() {
    const navigate = useNavigate();
    const createProject = (project) => {
        project.cost = 0;
        project.services = [];
        const body = JSON.stringify(project);
        api.post("/projects", body)
            .then((res) => {
                console.log(res.data);
                navigate("/projetos", { state: ["Projeto Criado com sucesso !"] });
            })
            .catch((err) => console.log(err));
    }
    return (
        <div className="w-96 m-0 p-12">
            <h1 className="mb-2">
                Criar Projeto
            </h1>
            <p className="text-gray-600">
                Crie seu projeto para depois adicionar os serviços
            </p>
            <ProjetoForm
                handleSumbit={createProject}
                btnText="Criar Projeto"
            />
        </div>
    );
}