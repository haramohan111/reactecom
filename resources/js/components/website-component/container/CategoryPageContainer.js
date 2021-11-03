import React,{useState} from 'react'
import CategoryPage from '../main/CategoryPage'


 function CategoryPageContainer() {
    var pathArray = window.location.pathname.split('/');
    var seg1 = pathArray[2];
    
    const [seg, setSeg] = useState(seg1);
    return (
        <div>
            <CategoryPage name={seg}/>
    
        </div>
    )
}


export default CategoryPageContainer