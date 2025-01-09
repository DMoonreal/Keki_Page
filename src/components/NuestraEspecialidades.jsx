import Section from "./Section";
import Heading from "./Heading";
import { servicio1, servicio2, servicio3, servicio4, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";
const NuestraEspecialidades = () => {
  return (
    <Section id="Conocenos">
      <div className="container">
        <Heading
          title="Un poco de nosotros"
          text="Una pequeña panadería con gran sabor. Nos dedicamos a crear panes deliciosos y frescos que alegran tu día."
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Caja de Keki"
                height={730}
                src={servicio1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Texto aqui bonito</h4>
              <p className="body-2 mb-[3rem] text-[#BF5098]">
                Mejorando el servicio desde 2020 para todo mexico
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          {/* Sección ampliada del bento box */}
          <div className="relative z-1 grid gap-5 lg:grid-cols-3">
            {/* Primera imagen */}
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={servicio2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="Browines"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Browines</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Pidelos con todos los Toppings que quieras especiales para ti
                  si asi lo deseas
                </p>
              </div>
              <PhotoChatMessage />
            </div>

            {/* Segunda imagen */}
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={servicio3}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="AI tool"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Cupcakes</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  literalmente de cualquier sabor que quieras no exageres
                  tampoco
                </p>
              </div>
            </div>

            {/* Tercera imagen (nueva) */}
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={servicio4}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="Creative AI"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Pasteles</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  El segundo mas pedido de la lista puedes pedirlo como quieras
                  donde quieras y cuando quieras
                </p>
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default NuestraEspecialidades;
