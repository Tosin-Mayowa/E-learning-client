import React from "react";
// import "./OverviewComp.css";

type IProject={
   
    image?: string;
    name?: string;
    course?: string;
    progressLevel?:string
}




export const ProjectCard:React.FC<IProject>=({image,name,course,progressLevel}):React.JSX.Element=>{

return (
    <>
        <div className="card_prjct">
						<div className="project-subwrapper">
							<img src={image} alt="" className="project_image" />
							<div className="project_text">
								<p style={{color:"#333333",fontSize:"15px",fontWeight:500,margin:0,padding:0}}>{name}</p>

								<p style={{color:'#969696',fontSize:'13px',fontWeight:400,margin:0,padding:0}}>{course}</p>
							</div>
							<div className="project_progress_bar_wrapper">
								<div style={{display:"flex",justifyContent:"space-between",margin:0,padding:0}}>
									<p style={{fontSize:"13px",color:"#333",fontWeight:500}}>Progress</p>
									<p className={progressLevel==="50%"?"progress_level_text_1":"progress_level_text_2"}>{progressLevel}</p>
								</div>
								<div className={progressLevel==="50%"?"project_progress_div":"project_progress_div_two"}>
									<div className={progressLevel==="50%"?"project_progress_indicator":"project_progress_indicator_two"}>
									</div>
								</div>
							</div>
						</div>
					</div>
    </>
)


}