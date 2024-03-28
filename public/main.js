// function init(){
//     const input = document.getElementById('upload')
//     const fileReader = new FileReader()

//     fileReader.onloadend = () => {
//         let base64 = fileReader.result.replace(
//             /^data:image\/(png|jpeg|jpg):base64,/, ''
//         )
//         console.log(input.files[0])
//         console.log(base64)
//     }

//     input.addEventListener('change',() => {
//         fileReader.readAsDataURL(input.file[0])
//     })
// }

// init()

async function init() {
    let rustApp = null
    try {
        rustApp = await import('../pkg')
        
    } catch (e) {
        console.error(e)
        return;  
    }
    console.log(rustApp)
    const input = document.getElementById('upload');
    const fileReader = new FileReader();
  
    fileReader.onloadend = () => {
      const base64 = fileReader.result.replace(/^data:(image\/(png|jpeg|jpg));base64,/, '');
     let img_data_url = rustApp.grayscale(base64);
     document.getElementById('new-img').setAttribute(
      'src', img_data_url
     )
    };
  
    input.addEventListener('change', () => {
      if (input.files.length > 0) {
        fileReader.readAsDataURL(input.files[0]);
      } else {
        console.log('No file selected.');
      }
    });
  }
  
  init();