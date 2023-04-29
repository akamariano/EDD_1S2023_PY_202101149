function recuperarArregloDeLocalStorage3() {
    let arregloRecuperado = localStorage.getItem("miArreglo");
  
    if (arregloRecuperado !== null) {
      miArreglo = JSON.parse(arregloRecuperado);
      return miArreglo
    } else {
      console.log("No se encontró el arreglo en el Local Storage");
      return null
    }
  }
  function recuperarArregloDeLocalStorageb() {
    let arregloRecuperado = localStorage.getItem("miArreglob");
  
    if (arregloRecuperado !== null) {
      miArreglo = JSON.parse(arregloRecuperado);
      return miArreglo
    } else {
      console.log("No se encontró el arreglo en el Local Storage");
      return null
    }
  }
function filtrarYMostrarPorAtributo2(filtro) {
    const arregloDeLocalStorage3 = recuperarArregloDeLocalStorage3();
    const arregloDeLocalStorage2 = recuperarArregloDeLocalStorageb();
  
    if (arregloDeLocalStorage3 === null) {
      console.log("No se pudo recuperar el arreglo de localStorage3");
      return;
    }
  
    if (arregloDeLocalStorage2 === null) {
      console.log("No se pudo recuperar el arreglo de localStorage2");
      return;
    }
  
    const arregloFiltrado = arregloDeLocalStorage3.filter(elemento => elemento.atributo2 === filtro);
    const container = document.querySelector('.container');
    console.log('Elementos con el atributo 2 igual a', filtro, ':');
    arregloFiltrado.forEach(elemento => {
      console.log(elemento);
  
      arregloDeLocalStorage2.forEach(elemento2 => {
        if (elemento.atributo4 === elemento2.atributo1) {
          console.log('Atributo 2 del segundo arreglo:', elemento2.atributo2);
          const base64Regex = /^data:([^/]+)\/([^;]+);base64,/;
          const matches = elemento2.atributo2.match(base64Regex);

          if (matches) {
              const fileType = matches[2];

              // Crear un nuevo div.item
              const item = document.createElement('div');
              item.classList.add('item');
              container.appendChild(item);

              // Crear un nuevo h2 para el título
              const title = document.createElement('h2');
              item.appendChild(title);

              // Se determina el tipo de archivo y se muestra en el HTML
              if (fileType === 'plain') {
                  title.textContent = 'Archivo de texto '+elemento.atributo4;
                  const textarea = document.createElement('textarea');
                  textarea.readOnly = true;
                  textarea.style.width = '100%';
                  textarea.style.height = '200px';
                  textarea.textContent = atob(elemento2.atributo2.split(',')[1]);
                  item.appendChild(textarea);
              } else if (fileType === 'jpeg' || fileType === 'png' || fileType === 'gif') {
                title.textContent = 'Imagen '+elemento.atributo4;
                const img = document.createElement('img');
                img.src = elemento2.atributo2;
                img.alt = 'Imagen compartida';
                img.style.width = '100%'; // Cambio aquí: usa img.style.width en lugar de img.width
                item.appendChild(img);
              } else if (fileType === 'pdf') {
                  title.textContent = 'Archivo PDF '+elemento.atributo4;
                  const iframe = document.createElement('iframe');
                  iframe.src = elemento2.atributo2;
                  iframe.width = '100%';
                  iframe.height = '500px';
                  item.appendChild(iframe);
              }
          }
      }
      });
    });
  }
  document.addEventListener('DOMContentLoaded', () => {
    // Reemplaza 'valorFiltro' con el string que deseas utilizar para filtrar el atributo 2
   
    const valorFiltro =  getcurrentuserid2();
    filtrarYMostrarPorAtributo2(valorFiltro);
  });