import React from 'react';
import a from './About.module.css'





  class About extends React.Component{
    render(){
        // получаем параметры
        const id = this.props.match.params.id;
        const name = this.props.match.params.name;

        if(id == 3){
            return <h2 className={a.demo}>Toyota camry</h2>;
        }
        else if(id == 4){
            return <h2 className={a.demo}>Nissan patroul</h2>;
        }
        else if(id == 5){
            return <h2 className={a.demo}>BMW</h2>;
        }
        else
        return <h2 className={a.demo}>id: {id}  Name: {name}</h2>;
    }
}

  export default About;