import Button from "../../components/ui/Button";
import { LinksStyles } from "./styles";
import retrato from '../../assets/images/retrato-tarcio.png';

const Links = () => {
  return (
    <LinksStyles>
      <div className="container">
        <div className="logo">
            <div className="image">
                <img src={retrato} alt="" />
            </div>
            <div className="nick">
                <h1>@star_teix</h1>
                <span className="p">Desenvolvedor Web | Transformo ideias em soluções digitais</span>
            </div>
        </div>
        <div className="buttons">
          <Button
            children="Meus serviços"/>
            <Button
            children="Portfólio"/>
            <Button
            children="Linkedin"/>
            <Button
            children="Whatsapp"/>
            
        </div>
      </div>
    </LinksStyles>
  );
}

export default Links;