import './App.css'
import {useState} from 'react'
import { Row,Col } from 'antd';
import ConfigurationForm from './components/ConfigurationForm'
import ShowChanges from './components/ShowChanges'


function App() {
  
  //states
  const [configurations,saveConfigurations] = useState({
    optionButtonSelect: 3,
    colorSelect:2,
    panelOptionSelect:1,
    nameSpace:'Mi espacio personal',
    url:'mi_espacio_personal',
    fileSelect:null,
  })

  //auxiliars
  const initialValues = {
    initialOptionButtonSelect: 3,
    initialColorSelect:2,
    initialPanelOptionSelect:1,
    initialNameSpace:'Mi espacio personal',
    initialUrl:'mi_espacio_personal',
    initialFileSelect:null,
  }
  const messages=['Este logo identificará tu espacio del resto',
                 'Preferiblemente sube una imagen .png igual o superior a 65px a 72ppp con findo transparente',
                 'Puedes cambiar la URL de tu espacio (direccion web) en cualquier momento, pero por costesía hacia tus compañeros de trabajo y otros usuarios de Plankton, porfavor no lo hagas muy seguido :)',
                 'Nota: Si cambias la URL de tu espacio, Plankton automaticamente rediccionará desde la antigua dirección hacia la nueva. En cualquier caso, deberias asegurarte que tus compañeros sepan acerca del cambio porque la dirección anterior pasará a estar libre y puede ser usada por otro espacio en el futuro'
                ]
  const numberOfPeopleOptions = ['Solo yo','2 - 10','11 - 25','26 - 50','51 - 100','500+']
  const privacyOptions = [
    { option: 'Privado',
      description: 'El contenido sera visible solo para ti y los miembros de tu organización'},
    { option: 'Público',
      description: 'Cualquiera con el vínculo podrá ver la actividad de tu Organización'},
  ]
  const colors = ['green','yellow','magenta','bisque','turquoise','goldenrod','violet','#2489C5','salmon']
  

  return(
    <Row gutter={[48,10]}>
        <Col xs={24} md={10}>
          <ConfigurationForm configurations={configurations} 
                             initialValues={initialValues}
                             saveConfigurations={saveConfigurations}
                             messages={messages}
                             numberOfPeopleOptions={numberOfPeopleOptions}
                             privacyOptions={privacyOptions}
                             colors={colors}
                              />
        </Col>
        <Col xs={0} md={14}>
          <ShowChanges configurations={configurations} colors={colors}/>
        </Col>
      </Row>
  );
}

export default App;
