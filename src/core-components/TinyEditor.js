import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

// export default function TinyEditor(props) {
//   const handleChange = (e) => {
//     console.log(
//       'Content was updated:',
//       e.target.getContent()
//     );
//   }
//     return (
//       <Editor
//         selector='textarea#my-tinymce-app'
//         textareaName='content'
//         apiKey="00p89mf63bn3crjj4gngb1nvwrt0yico56y84qb1646sajwy"
//         initialValue={props.content}
        
//         init={{
//         //   selector: 'textarea#my-tinymce-app',
//           height: 500,
//           menubar: true,
//           plugins: [
//             'advlist autolink lists link image charmap print preview anchor',
//             'searchreplace visualblocks code fullscreen',
//             'insertdatetime media table paste code help wordcount', 'image code', 'emoticons',
//           ],
//           toolbar:
//             'undo redo | formatselect | bold italic backcolor | \
//             alignleft aligncenter alignright alignjustify | \
//             bullist numlist outdent indent | emoticons | \
//             removeformat | image code | help'
//         }}
//         onEditorChange={this.handleChange}
//       />
//     );
// }

class TinyEditor extends React.Component {
  // handleEditorChange = (e) => {
  //   console.log(
  //     'Content was updated:',
  //     e.target.getContent()
  //   );
  // }

  render() {
    return (
      <Editor
        initialValue={this.props.content}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image',
            'charmap print preview anchor help',
            'searchreplace visualblocks code',
            'insertdatetime media table paste wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help'
        }}
        onChange={this.props.handleEditorChange}
      />
    );
  }
}

export default TinyEditor;