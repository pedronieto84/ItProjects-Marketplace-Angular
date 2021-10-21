/* Angular Imports */
import { Pipe, PipeTransform } from '@angular/core';


/* App Imports */
import { Project } from '../interfaces/interfaces';

@Pipe({
  name: 'listFilterPipe'
})

/* Pipe para poder filtar proyectos por su nombre */
export class ListFilterPipe implements PipeTransform {

  transform(list: Project[], filterText: string): Project[] {
    
    
    if(Array.isArray(list)){

      if(filterText){

        const trimmedText = filterText.trim();

         

        return list.filter((eachObject)=>{
              console.log('each object', eachObject)
              const allValuesArray: any[] = Object.values(eachObject);
              const stringsArray = allValuesArray.filter((each)=>{ 

                if(typeof each === 'string'){
                  return true
                }else{return false}
               })
              const longString = stringsArray.reduce((a, b)=> a + b);
              console.log('long string', longString)
              //conso

              if(eachObject.title){ 
                return longString.trim().toLowerCase().includes(trimmedText.toLowerCase())
              }else{
                return false
              }
            
        })




      }else{
        // no hay nada que filtrar, pues devolvemos el array tal cual
        return list
      }







    }else{
      return []
    }

  }
}
