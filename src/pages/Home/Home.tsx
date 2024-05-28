import savings from '../../assets/img/savings.svg'
import LinkButton from '../../components/LinkButton/LinkButton';

export default function Home() {
    return (
        <section className="w-full flex flex-col items-center justify-center">
            <h1 className="text-base mb-2 p-0.5">
                Bem vindo ao <span className="p-0.5">Costs</span>
            </h1>
            <p className="p-0.5">
                Comece a gerenciar os seus projetos agora mesmo
            </p>
            <img className="w-81 mt-7 ml-48" src={savings} alt="COSTS" />
            <LinkButton
                to="/novo-projeto"
                text="Criar Projeto" />
        </section>
    );
}