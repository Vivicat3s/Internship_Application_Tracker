import "./ProgressTracker.jsx";

function ProgressTracker({status}){

const steps = ["Applied","Interview","Offer"];

const currentIndex = steps.indexOf(status);

return(

<div className="progress-container">

{steps.map((step,index)=>(

<div key={index} className="progress-step">

<div
className={
index <= currentIndex
? "circle active"
: "circle"
}
>
{index+1}
</div>

<p>{step}</p>

{index !== steps.length-1 && (
<div
className={
index < currentIndex
? "line active"
: "line"
}
/>
)}

</div>

))}

</div>

)

}

export default ProgressTracker;