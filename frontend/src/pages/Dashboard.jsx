import {useState,useEffect} from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ProgressTracker from "../components/ProgressTracker"

function Dashboard(){

const [internships,setInternships] = useState([]);

const [company,setCompany] = useState("");
const [role,setRole] = useState("");
const [date,setDate] = useState("");
const [status,setStatus] = useState("Applied");

const [editId,setEditId] = useState(null);
const [showModal,setShowModal] = useState(false);
const [search,setSearch] = useState("");

const API="http://localhost:5000/api/internships";


/* FETCH */

useEffect(()=>{
fetchInternships();
},[]);

async function fetchInternships(){

const res = await axios.get(API);
setInternships(res.data);

}


/* SAVE */

async function saveInternship(){

if(editId){

await axios.put(`${API}/${editId}`,{
company,role,date,status
});

}else{

await axios.post(API,{
company,role,date,status
});

}

fetchInternships();

setCompany("");
setRole("");
setDate("");
setStatus("Applied");

setEditId(null);
setShowModal(false);

}


/* DELETE */

async function deleteInternship(id){

await axios.delete(`${API}/${id}`);

fetchInternships();

}


/* EDIT */

function editInternship(i){

setCompany(i.company);
setRole(i.role);
setDate(i.date);
setStatus(i.status);

setEditId(i._id);
setShowModal(true);

}


/* SEARCH */

const filtered = internships.filter(i =>
i.company.toLowerCase().includes(search.toLowerCase())
);


/* STATS */

const applied = internships.filter(i=>i.status==="Applied").length;
const interview = internships.filter(i=>i.status==="Interview").length;
const offer = internships.filter(i=>i.status==="Offer").length;
const rejected = internships.filter(i=>i.status==="Rejected").length;


return(

<div className="dashboard-layout">

<Sidebar/>

<div className="dashboard-main">

<Navbar/>

<h1>Dashboard</h1>


<div className="stats-grid">

<div className="stat-card applied">
<h2>{applied}</h2>
<p>Applications</p>
</div>

<div className="stat-card interview">
<h2>{interview}</h2>
<p>Interviews</p>
</div>

<div className="stat-card offer">
<h2>{offer}</h2>
<p>Offers</p>
</div>

<div className="stat-card rejected">
<h2>{rejected}</h2>
<p>Rejected</p>
</div>

</div>


<div className="search-actions">

<input
placeholder="Search company..."
onChange={(e)=>setSearch(e.target.value)}
/>

<button onClick={()=>setShowModal(true)}>
+ Add Internship
</button>

</div>


<table>

<thead>

<tr>
<th>Company</th>
<th>Role</th>
<th>Date</th>
<th>Status</th>
<th>Actions</th>
</tr>

</thead>

<tbody>

{filtered.map(i=>(

<tr key={i._id}>

<td>{i.company}</td>
<td>{i.role}</td>
<td>{i.date}</td>
<td>
<span className={`status-badge ${i.status.toLowerCase()}`}>
{i.status}
</span>
</td>

<td>

<button onClick={()=>editInternship(i)}>
Edit
</button>

<button onClick={()=>deleteInternship(i._id)}>
Delete
</button>

</td>

</tr>

))}

</tbody>

</table>


{showModal && (

<div className="modal">

<div className="modal-content">

<h2>Add Internship</h2>


<input
placeholder="Company"
list="companies"
value={company}
onChange={(e)=>setCompany(e.target.value)}
/>

<datalist id="companies">

<option value="Google"/>
<option value="Amazon"/>
<option value="Microsoft"/>
<option value="Meta"/>
<option value="Apple"/>
<option value="Netflix"/>
<option value="Tesla"/>
<option value="Adobe"/>

</datalist>


<input
placeholder="Role"
list="roles"
value={role}
onChange={(e)=>setRole(e.target.value)}
/>

<datalist id="roles">

<option value="Software Engineer Intern"/>
<option value="Frontend Developer Intern"/>
<option value="Backend Developer Intern"/>
<option value="Full Stack Intern"/>
<option value="Data Science Intern"/>

</datalist>


<input
type="date"
value={date}
onChange={(e)=>setDate(e.target.value)}
/>

<select
value={status}
onChange={(e)=>setStatus(e.target.value)}
>

<option>Applied</option>
<option>Interview</option>
<option>Offer</option>
<option>Rejected</option>

</select>


<button onClick={saveInternship}>
Save
</button>

<button onClick={()=>setShowModal(false)}>
Cancel
</button>

</div>

</div>

)}

</div>

</div>

)

}

export default Dashboard;