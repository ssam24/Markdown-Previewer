import React, {Component} from 'react';
import Editor from './editor';
import Preview from './preview';

const textoinicial = `This is a paragraph

**This is bolded text**

> Block Quotes!

# Heading
## Heading 2

- list item 1
- list item 2
- list item 3


[Visit my website](https://github.com/ssam24)

This is a inline \`<div></div>\`
This is a block of code:

\`\`\`
let x = 1;
let y = 2;
let z = x + y;
\`\`\`

![React Logo w/ Text](https://goo.gl/Umyytc) `

class ContainerEditorPreview extends Component {
       constructor(props){
           super(props)
           this.state = {
               text: textoinicial
           }

       }
       handleChange = (e) => {
        this.setState({
          text: e.target.value,
        });
      }; 
       render () {
        const {text} = this.state;
          
        return(
            <div id="container-padre">
               <Editor text={text} event={this.handleChange}></Editor>
    
               <Preview text={text}></Preview> 
            </div>
            
        )
       }
    
}


export default ContainerEditorPreview