import React from 'react';
import {useParams} from 'react-router-dom';
import {useTags} from '../components/useTags';

type Params = {
    id:string;
}
const TagEdit:React.FunctionComponent=()=>{
    let {id} = useParams<Params>();
    console.log(id);
    const {findTag} = useTags()
    if(id){
        const tag = findTag(parseInt(id))
        return (
            <div>
                {tag.name}
            </div>
        )
    }else{
        return (
            <div>
                {id}
            </div>
        )
    }

}

export {TagEdit}