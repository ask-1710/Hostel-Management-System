import { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";

const OutpassForm = props => {
  const [name, setName] = useState("") ;
  const [address, setAddress] = useState("") ; 
  const [reason, setReason] = useState("") ;
  const [fromDate, setFromDate] = useState(new Date()) ;
  const [toDate, setToDate] = useState(new Date()) ;

  // const handleSubmit = () => {
  //   alert(name+" , "+address+" , "+reason+" , "+fromDate+" , "+toDate) ;
  // }

  return (
    <Card className="bg-dark text-white">
        <h2>Outpass Application</h2>
        <form>
            <label className="p-1 m-2"> Name
            <input type="text" name="name" value={name} onChange={e=>setName(e.target.value)}/>
            </label><br/>
            <label className="p-1 m-2"> Address
            <input type="text" name="address" value={address} onChange={e=>setAddress(e.target.value)}/>
            </label><br/>
            <label className="p-1 m-2">
                Reason
                <input type="text" name="reason" value={reason} onChange={e=>setReason(e.target.value)}/>
            </label><br/>
            <label className="p-1 m-2">
                From
                <input type="date" name='fromDate' onChange={e=>setFromDate(e.target.value)}/>
            </label><br/>
            <label className="p-1 m-2">
                To 
                <input type='date' name='toDate' onChange={e=>setToDate(e.target.value)}/>
            </label><br/>
            <button type='submit' className="btn btn-info p-1 m-4">Submit</button>
        </form>
    </Card>
  );
}

export default OutpassForm;
