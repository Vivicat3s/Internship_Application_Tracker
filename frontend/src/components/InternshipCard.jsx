function InternshipCard({logo,company,role,status}){

return(

<div className="card">

<img src={logo} className="company-logo"/>

<h3>{company}</h3>

<p>{role}</p>

<span className="status">{status}</span>

</div>

)

}

export default InternshipCard