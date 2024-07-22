import React from "react";
import "./OverviewComp.css"
interface IProps{
    image?:string,
    action?:string,
    remark?:string,
    completionCount?:string
}



export const OverviewChild:React.FC<IProps>=({action,remark,image,completionCount}):React.JSX.Element=>{



    return (
        <>
        <div className="card">
						<img src={image} alt="" className="card_icon" />
						<p className="card_text level" style={{fontSize:"18px",fontWeight:700}}>{completionCount}</p>
						<p className="card_text" style={{fontSize:"14px",fontWeight:400}}>{action}</p>
						<p className="card_text" style={{color:'#FF6161',fontSize:'12px'}}>{remark}</p>
		</div>
        </>
    )
}