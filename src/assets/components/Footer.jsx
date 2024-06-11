import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <small>sitio creado por Enrique Cervantes</small>

      <div className="webs">
        <a href="mailto:cervantes.enri.0201@gmail.com?subject=Hello%20World&body=This%20is%20a%20test%20email">
          <small>Enviar Correo </small>
        </a>
        <a
          href="https://wa.me/5591004288?text=hola"
          target="_blank"
          rel="noopener noreferrer">
          <small> whatsapp</small>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
