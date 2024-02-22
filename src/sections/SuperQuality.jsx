import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          Oferecemos a você
          <span className="text-coral-red"> Produtos </span>
          <span className="text-coral-red">de Alta </span> Qualidade
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Garantindo conforto e estilo premium, nossos calçados meticulosamente
          elaborados foi projetado para elevar sua experiência,
          proporcionando-lhe uma experiência incomparável qualidade, inovação e
          um toque de elegância.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Nossa dedicação ao detalhe e excelência garante sua satisfação
        </p>
        <div className="mt-11">
          <Button label="Ver detalhes" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
