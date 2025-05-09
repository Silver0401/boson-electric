import styles from "./page.module.css";
import GMaps from "@/libs/GoogleMaps";

export default async function AboutPage() {
  return (
    <div className={styles.Body}>
      <h3>{"Descripción de la Empresa"}</h3>
      <p>
        {
          "En Boson Distribución nos especializamos en ofrecer productos y soluciones avanzadas en automatización industrial, con un enfoque en la distribución de tecnología de vanguardia de la marca HNC Electric. Nuestro objetivo es brindar a nuestros clientes productos innovadores diseñados para mejorar la precisión, el rendimiento y la eficiencia de sus procesos industriales. En Boson Distribución, apostamos por la calidad y la tecnología como motores del desarrollo industrial."
        }
      </p>

      <h3>{"Misión y Visión"}</h3>
      <p>
        {
          "En Boson Distribución, nuestra misión es impulsar el crecimiento industrial mediante la distribución de productos avanzados de automatización de HNC Electric. Nos enfocamos en proporcionar soluciones tecnológicas que optimicen la precisión, el rendimiento y la eficiencia de los procesos industriales, ofreciendo un servicio cercano, especializado y orientado a las necesidades de nuestros clientes.Nuestra visión es convertirnos en líderes regionales en la distribución de tecnología de automatización, siendo reconocidos por promover la innovación, la calidad y el desarrollo sostenible. Aspiramos a ser un puente hacia la transformación digital industrial, contribuyendo a un entorno industrial más eficiente, competitivo y tecnológicamente avanzado."
        }
      </p>

      <h3>{"Donde Encontrarnos"}</h3>
      <GMaps />
    </div>
  );
}
