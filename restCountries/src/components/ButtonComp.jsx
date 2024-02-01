/* eslint-disable react/prop-types */

const ButtonComp = ({countries,  onClickHandle, funct})=>{

    return (
        <button onClick={()=>onClickHandle(countries)}>{funct}</button>
    )
}

export default ButtonComp