import React from 'react';
import {useParams} from 'react-router-dom';
import {useTags} from '../components/useTags';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {Center} from '../components/Center';

type Params = {
    id:string;
}
const Tobar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background-color: white;
`
const InputWrapper = styled.div`
  background-color: white ;
  padding: 0 16px;
  margin-top: 16px;
`
const TagEdit:React.FunctionComponent=()=>{
    let {id} = useParams<Params>();
    const {findTag,updateTag,deleteTag} = useTags()
    if(id){
        const tag = findTag(parseInt(id))
        return (
           <Layout>
                   <Tobar>
                       <Icon name="left" />
                       <span>编辑标签</span>
                       <Icon />
                   </Tobar>
               <InputWrapper>
               <Input label="备注" type="text" placeholder="标签名" value={tag.name} onChange={(e)=>{updateTag(tag.id,{name:e.target.value})}}/></InputWrapper>
                <Center>
                    <Button onClick={()=>deleteTag(tag.id)}>删除标签</Button>
                </Center>
           </Layout>
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