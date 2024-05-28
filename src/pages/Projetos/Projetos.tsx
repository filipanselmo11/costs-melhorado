import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../../api/api";
import LinkButton from "../../components/LinkButton/LinkButton";
import Message from "../../components/Message/Message";
import Card from "../../components/Card/Card";
import Loading from "../../components/Loading/Loading";


export default function Projetos() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [projectMessage, setProjectMessage] = useState("");
    const location = useLocation();
    let message = "";
    if (location.state) {
        message = location.state;
    }

    useEffect(() => {
        setTimeout(() => {
            api.get("/projects")
                .then((res) => {
                    setProjects(res.data);
                    setLoading(true);
                })
                .catch((err) => console.log(err));
        }, 1000)
    }, []);

    const removeProject = (id) => {
        api.delete(`/projects/${id}`)
            .then(() => {
                setProjects(projects.filter((project) => project.id !== id));
                setProjectMessage("Projeto Removido com sucesso");
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="p-8">
            <div className="flex justify-between mb-8">
                <h1>Meus Projetos</h1>
                <LinkButton
                    to="/novo-projeto"
                    text="Criar Projeto"
                />
            </div>
            {message && <Message type="success" msg={message} />}
            {projectMessage && <Message type="success" msg={projectMessage} />}
            <div className="justify-start">
                {projects.length > 0 && projects.map((project) => (
                    <Card
                        id={project.id}
                        name={project.name}
                        budget={project.budget}
                        category={project.category.name}
                        key={project.id}
                        handleRemove={removeProject}
                    />
                ))}
                {!loading && <Loading />}
                {loading && projects.length === 0 && (
                    <p>
                        Não há projetos cadastrados
                    </p>
                )}
            </div>
        </div>
    );
}