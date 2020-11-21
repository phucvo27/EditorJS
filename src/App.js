import React from 'react';
import Editor from './components/Editor/Editor.component'
class App extends React.Component {

    
    render(){
        return (
            <React.Fragment>
                <div className="container">
                    <Editor />
                    
                </div>
            </React.Fragment>
        )
    }
}

export default App;