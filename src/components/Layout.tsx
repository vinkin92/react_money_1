import Nav from './Nav';
import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;
type Prpops = {
    className?:string;
    scrollTop?:number
}
const Layout:React.FunctionComponent<Prpops> = (props)=>{
    const mainRef = useRef<HTMLDivElement>(null)
    useEffect(()=>{
        setTimeout(()=>{
            if(!mainRef.current){return}
            mainRef.current.scrollTop = props.scrollTop!; // 添加！表示不管
        },0)
    },[props.scrollTop])
    return(
        <Wrapper>
            <Main ref={mainRef} className={props.className}>
                {props.children}
            </Main>
            <Nav/>
        </Wrapper>
    )
}
Layout.defaultProps = {
    scrollTop:0
}
export default Layout