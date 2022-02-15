import React from 'react';
import classnames from 'classnames'
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}
 // & React.SVGAttributes<SVGElement> 表示接收的属性还有 React 提供的 SVG 的所有属性
type Props = {
    name ?:string
} & React.SVGAttributes<SVGElement>
const Icon = (props:Props)=>{
    const {name,children,className,...rest} = props
    return(
        <svg className={classnames('icon',className)} {...rest} >
            {props.name &&  <use xlinkHref={'#'+props.name} />}
        </svg>
    )
}
export default Icon;