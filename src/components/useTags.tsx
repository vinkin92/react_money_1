import {useEffect, useState} from 'react';
import {createId} from '../lib/createId';
import {useUpdate} from '../hooks/useUpdate';
const useTags = ()=>{
    const [tags, setTags] = useState<{ id:number;name:string }[]>([]);
    useEffect(()=>{
        let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]')
        if (localTags.length === 0){
             localTags = [
                {id:createId(),name:'衣'},
                {id:createId(),name:'食'},
                {id:createId(),name:'住'},
                {id:createId(),name:'行'}
            ]
        }
        setTags(localTags)
    },[])
useUpdate(()=>{
    window.localStorage.setItem('tags',JSON.stringify(tags))
},[tags])
    const findTag = (id:number)=>tags.filter(tag => tag.id === id)[0]
    const findTagIndex = (id:number)=>{
        let result = -1;
        for(let i=0;i<tags.length;i++){
            if(tags[i].id === id){
                result = i;
                break;
            }

        }
        return result
    }
    const updateTag = (id:number,obj:{name:string}) => {
        setTags(tags.map(tag =>{
            return tag.id === id ? {id,name:obj.name}:tag
        }))
    }
    const deleteTag = (id:number)=>{
        // 找到 tag.id 不为 id 的元素，然后把返回的新数组传给 setTags
        setTags(tags.filter(tag => tag.id !== id))
    }
    const addTag=()=>{
        const tagName = window.prompt('请输入新增的标签');
        if(tagName !== null && tagName !== ''){
            setTags([...tags, {id:createId(),name:tagName}])
        }
    }
    const getName = (id:number) =>{
        const tag = tags.filter(t=>t.id === id)[0];
        return tag?tag.name:''
    }
    return {tags,setTags,findTag,updateTag,findTagIndex,deleteTag,addTag,getName}
}
export {useTags}