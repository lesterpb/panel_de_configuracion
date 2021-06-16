import './App.css'
import { useState,useEffect } from 'react'
import { Row,Col } from 'antd';
import ConfigurationForm from './components/ConfigurationForm'
import ShowChanges from './components/ShowChanges'


function App() {
  
  //states
  const [configurations,saveConfigurations] = useState({
    optionButtonSelect: 3,
    colorSelect:7,
    panelOptionSelect:1,
    nameSpace:"Ep: Mi espacio de trabajo",
    url:"Ep: mi.dominio",
    fileSelect:null,
  })

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
      'Preferiblemente sube una imagen .png igual o superior a 65px a 72ppp con fondo transparente',
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
      colors: [{in:'#39B0FF',out:'#649ec5'},{in:'#04B58B',out:'#6dbba9'},{in:'#3E9C4B',out:'#7bc484'},{in:'#B6BC00',out:'#ced176'},{in:'#E59100',out:'#d8b476'},{in:'#E55C00',out:'#ca8e65'},{in:'#EE1F50',out:'#d46f87'},{in:'#D6198A',out:'#c07fa6'},{in:'#B321F1',out:'#a876bd'},{in:'#48B5FE',out:'#1890FF73'}]
    })
  },[])
//[{in:'#39B0FF',out:'#649ec5'},{in:'#04B58B',out:'#6dbba9'},{in:'#3E9C4B',out:'#7bc484'},{in:'#B6BC00',out:'#ced176'},{in:'#E59100',out:'#d8b476'},{in:'#E55C00',out:'#ca8e65'},{in:'#EE1F50',out:'#d46f87'},{in:'#D6198A',out:'#c07fa6'},{in:'#B321F1',out:'#a876bd'},{in:'#48B5FE',out:'#1890FF73'}]
//[{in:'#39B0FF',out:'#39B0FF'},{in:'#04B58B',out:'#04B58B'},{in:'#3E9C4B',out:'#3E9C4B'},{in:'#B6BC00',out:'#B6BC00'},{in:'#E59100',out:'#E59100'},{in:'#E55C00',out:'#E55C00'},{in:'#EE1F50',out:'#EE1F50'},{in:'#D6198A',out:'#D6198A'},{in:'#B321F1',out:'#B321F1'},{in:'#48B5FE',out:'#48B5FE'}]
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
