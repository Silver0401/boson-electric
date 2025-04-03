import styles from "./page.module.css";

export default async function AboutPage() {
  return (
    <div className={styles.Body}>
      <h3>{"FAQ"}</h3>
      <h4>{"¿Cómo puedo solicitar una cotización?"}</h4>
      <p>
        {
          "Puede agregar los productos de su interés al carrito de compras en nuestro sitio web y luego proceder a solicitar una cotización. Alternativamente, puede contactarnos directamente a través de nuestro formulario de contacto o por teléfono para recibir asistencia personalizada"
        }
      </p>

      <h4>{"¿Ofrecen soporte técnico para los productos?"}</h4>
      <p>
        {
          "Sí, proporcionamos soporte técnico especializado para todos los productos que distribuimos. Nuestro equipo está capacitado para asistirle en la instalación, configuración y resolución de problemas que pueda encontrar.​"
        }
      </p>

      <h4>{"¿Cuál es el tiempo de entrega de los productos?"}</h4>
      <p>
        {
          "El tiempo de entrega varía según la disponibilidad del producto y la ubicación del cliente. Generalmente, los pedidos se procesan y envían dentro de los 3 a 5 días hábiles posteriores a la confirmación del pago.​"
        }
      </p>

      <h4>{"¿Ofrecen garantías en sus productos?"}</h4>
      <p>
        {
          "Sí, todos nuestros productos cuentan con la garantía oficial de HNC Electric. La duración y términos de la garantía dependen del producto específico. Para más detalles, consulte nuestra sección de garantías o contáctenos directament"
        }
      </p>

      <h4>{"¿Proporcionan capacitación para el uso de los equipos?"}</h4>
      <p>
        {
          "Ofrecemos sesiones de capacitación para asegurar que nuestros clientes puedan utilizar los equipos de manera eficiente y segura. Estas capacitaciones pueden ser programadas según sus necesidades y pueden realizarse de forma presencial o virtual."
        }
      </p>

      <h4>{"¿Cómo puedo acceder a los manuales de los productos?"}</h4>
      <p>
        {
          "Los manuales de los productos están disponibles para su descarga en nuestro sitio web, en la sección de descargas. Si tiene dificultades para encontrar un manual específico, no dude en contactarnos para obtener asistencia.​"
        }
      </p>

      <h4>{"¿Qué debo hacer si mi producto presenta una falla?"}</h4>
      <p>
        {
          "En caso de que un producto presente una falla, le recomendamos ponerse en contacto con nuestro equipo de soporte técnico para diagnosticar el problema y determinar la mejor solución, ya sea reparación o reemplazo, "
        }
      </p>
    </div>
  );
}
