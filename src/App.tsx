import { FormEvent, useState } from "react";

import './App.css'

interface DrugDeliveryData {
    employeeName: string;
    priority: string;
    roomLocation: string;
    drugName: string;
    drugQuantity: number;
    drugStatus: string;
}

function App() {
    //const drugOrderData = [];


    const [drugOrder, setDrugOrder] = useState<DrugDeliveryData>({
        employeeName: '',
        priority: "",
        roomLocation: "",
        drugName: "",
        drugQuantity: 0,
        drugStatus: "",
    });

    const [submittedRequests, setSubittedRequests] = useState<DrugDeliveryData[]>([]); // Read the form data

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubittedRequests([...submittedRequests, drugOrder]);
        setDrugOrder({
            employeeName: "",
            priority: "",
            roomLocation: "",
            drugName: "Tylenol - $5",
            drugQuantity: 0,
            drugStatus: "",
        });
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <h1>Drug Delivery Service Request</h1>
                    <label>
                        Employee Name: <input type="text" value={drugOrder.employeeName} onChange={e => setDrugOrder({...drugOrder,employeeName: e.target.value})}/>
                    </label>
                </div>
                <div>
                    <label>
                        Drug Name:
                        <select value={drugOrder.drugName} onChange={e => setDrugOrder({...drugOrder,drugName: e.target.value})}>
                            <option>Tylenol</option>
                            <option>Advil</option>
                            <option>Melatonin</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Drug Quantity:
                        <input
                            type="number" value={drugOrder.drugQuantity} onChange={e => setDrugOrder({...drugOrder, drugQuantity: parseInt(e.target.value) || 0})}
                        />
                    </label>
                </div>

                <div>
                <label>
                        Room Location: <input type="text" onChange={e => setDrugOrder({...drugOrder,roomLocation: e.target.value})}/>
                    </label>

                </div>
                <div>
                     <label>
                         Priority:
                         <select value={drugOrder.priority} onChange={e => setDrugOrder({...drugOrder,priority: e.target.value})}>
                             <option>Low</option>
                             <option>Medium</option>
                             <option>High</option>
                             <option>Emergency</option>
                         </select>
                     </label>
                </div>
                <div>
                    <label>
                        Status:
                        <select value={drugOrder.drugStatus} onChange={e => setDrugOrder({...drugOrder, priority: e.target.value})}>
                            <option>Unassigned</option>
                            <option>Assigned</option>
                            <option>InProgress</option>
                            <option>Closed</option>
                        </select>
                    </label>
                </div>
                <button type="submit">Submit</button>

                <h2> Submitted Service Requests </h2>
                <ul>
                    {submittedRequests.map((request, index) => (
                        <li key={index}>
                            Employee Name: {request.employeeName}, Drug Name: {request.drugName}, Drug
                            Quantity: {request.drugQuantity}, Room Location: {request.roomLocation},
                            Priority: {request.priority}, Status: {request.drugStatus}
                        </li>
                    ))}
                </ul>


            </form>


        </>
    );

}

export default App;
