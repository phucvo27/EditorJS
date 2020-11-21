import React from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'; 
import List from '@editorjs/list'; 
import Embed from '@editorjs/embed';
import SimpleImage from './SimpleImage/SimpleImage';

class Editor extends React.Component {

    constructor(props){
        super(props);
        this.editor = null
    }
    componentDidMount(){
        this.editor = new EditorJS({
            holder: 'editorjs',
            tools: { 
                header: {
                    class: Header, 
                    inlineToolbar: ['marker', 'link'],
                    config: {
                        placeholder: 'Header'
                    },
                }, 
                embed: {
                    class: Embed,
                    config: {
                        services: {
                            youtube: true,
                            coub: true
                        }
                    }
                },
                list: { 
                  class: List, 
                  inlineToolbar: true 
                },
                // image: SimpleImage : old way for simple, we will custom with more advance right below
                image: {
                    class: SimpleImage,
                    inlineToolbar: true
                }
            }, 
            onReady: () => {console.log('editor is ready now')},
            placeholder: 'Enter your story now...',
            data: {
                "blocks": [
                    {
                        type: "paragraph",
                        data: {
                            text: "This is for testing image on EditorJS, the image below is added by using SimpleImage Class, because it's just a simple functionality, so we can only paste the URL of image that's mean we <b><i>have no backend</i></b>, with more advance we will need some logic that handle the upload image"
                        }
                    },
                    {
                        "type": "image",
                        "data": {
                            "url": "https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_1280.jpg",
                            "caption": "This is a beautifull girl",
                            "withBorder": false,
                            "withBackground": false,
                            "stretched": false
                        }
                    }
                ],
            }
        })
    }
    handleSaveData = ()=>{
        this.editor.save()
            .then(outputdata => {
                console.log('Here is the output data: ');
                console.log(outputdata);
                // const output = document.getElementById('output');
                // output.innerHTML = JSON.stringify(outputdata, null, 4);
            })
            .catch(e => {
                console.log('ok, now we have an error -> fuck shit :)) ');
                console.log(e)
            })
    }
    componentWillUnmount(){
        //this.editor.destroy();
    }
    render(){
        return (
            <React.Fragment>
                <div className="container">
                    <h1>Your Editor</h1>
                    <button onClick={this.handleSaveData}>Save Data</button>
                    <div id="editorjs"></div>
                    
                    <pre id="output"></pre>
                </div>
            </React.Fragment>
        )
    }
}

export default Editor;