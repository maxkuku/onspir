import { useEffect } from "react";




const SortSkladItems = useEffect(() => {


    const reslt = [];


    fetch("http://127.0.0.1:3000/Items.js")
      .then(res => res.json())
      .then(
        (result) => {
          

            
        

          result.forEach((item) => {
            if (Number(item.sklad) > 0)
            reslt.skladList.push(+item.sklad);
            if (Number(item.pom) > 0)
            reslt.pomList.push(+item.pom);
            if (Number(item.stell) > 0)
            reslt.stellList.push(+item.stell);
            if (Number(item.section) > 0)
            reslt.sectionList.push(+item.section);
            if (Number(item.level) > 0)
            reslt.levelList.push(+item.level);
            if (Number(item.cell) > 0)
            reslt.cellList.push(+item.cell);
            });

        
            return reslt;
            
        })
    }, []);



export default SortSkladItems;