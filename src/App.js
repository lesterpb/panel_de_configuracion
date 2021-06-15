import './App.css'
import { useState,useEffect } from 'react'
import { Row,Col } from 'antd';
import ConfigurationForm from './components/ConfigurationForm'
import ShowChanges from './components/ShowChanges'


function App() {
  
  //states
  const [configurations,saveConfigurations] = useState({})

  const [auxiliars,saveAuxiliars] = useState({
    initialValues: {},
    messages: [],
    numberOfPeopleOptions: [],
    privacyOptions: [],
    colors: []
  })

  //auxiliars
  useEffect(()=>{
    //initial values
    saveConfigurations({
      optionButtonSelect: 3,
      colorSelect:7,
      panelOptionSelect:1,
      nameSpace:"Ep: Mi espacio de trabajo",
      url:"Ep: mi.dominio",
      fileSelect:null,
    })
    saveAuxiliars({
      initialValues: {
        initialOptionButtonSelect: 3,
        initialColorSelect: 7,
        initialPanelOptionSelect: 1,
        initialNameSpace: "Ep: Mi espacio de trabajo",
        initialUrl: "Ep: mi.dominio",
        initialFileSelect: null,
      },
      messages: ['Este logo identificará tu espacio del resto',
      'Preferiblemente sube una imagen .png igual o superior a 65px a 72ppp con findo transparente',
      'Puedes cambiar la URL de tu espacio (direccion web) en cualquier momento, pero por costesía hacia tus compañeros de trabajo y otros usuarios de Plankton, porfavor no lo hagas muy seguido :)',
      'Nota: Si cambias la URL de tu espacio, Plankton automaticamente rediccionará desde la antigua dirección hacia la nueva. En cualquier caso, deberias asegurarte que tus compañeros sepan acerca del cambio porque la dirección anterior pasará a estar libre y puede ser usada por otro espacio en el futuro'
     ],
      numberOfPeopleOptions: ['Solo yo','2 - 10','11 - 25','26 - 50','51 - 100','500+'],
      privacyOptions: [
        { option: 'Privado',
          description: 'El contenido sera visible solo para ti y los miembros de tu organización'},
        { option: 'Público',
          description: 'Cualquiera con el vínculo podrá ver la actividad de tu Organización'},
      ],
      colors: ['green','yellow','magenta','bisque','turquoise','goldenrod','violet','#2489C5','salmon']
    })
  },[])

  return(
    <Row gutter={[48,10]}>
        <Col xs={24} md={10}>
          <ConfigurationForm configurations={configurations} 
                             initialValues={auxiliars.initialValues}
                             saveConfigurations={saveConfigurations}
                             messages={auxiliars.messages}
                             numberOfPeopleOptions={auxiliars.numberOfPeopleOptions}
                             privacyOptions={auxiliars.privacyOptions}
                             colors={auxiliars.colors}
                              />
        </Col>
        <Col xs={0} md={14}>
          <ShowChanges configurations={configurations} colors={auxiliars.colors}/>
        </Col>
      </Row>
  );
}

export default App;
