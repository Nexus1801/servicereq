import { ChangeEvent, FormEvent, useState } from "react";

import './App.css'

interface DrugDeliveryData {
    employeeName: string;
    priority: string;
    roomLocation: string;
    drugName: string;
    drugQuantity: number;
}

function App() {
    const drugOrderData = [];


    const [drugOrder, setDrugOrder] = useState<DrugDeliveryData>({
        employeeName: '',
        priority: "",
        roomLocation: "",
        drugName: "",
        drugQuantity: 0,
    });

    /*const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        drugOrderData.push(drugOrder);
        setDisplayedDrugData(drugOrder);

        setDrugOrder({
            employeeName: "",
            priority: "",
            roomLocation: "",
            drugName: "Tylenol - $5",
            drugQuantity: "",
        });
    };*/

    function handleSubmit(e){
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        fetch('/some-api', { method: form.method, body: formData });

        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);

    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
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
                        <input type="number" value={drugOrder.drugQuantity} onChange={e => setDrugOrder({...drugOrder, drugQuantity: e.target.value})}/>
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
                             <option>Unassigned</option>
                             <option>Assigned</option>
                             <option>In Progress</option>
                             <option>Closed</option>
                         </select>
                     </label>
                </div>
                <button type="submit">Submit</button>
                <p>Employee Name: {drugOrder.employeeName}, Drug Name: {drugOrder.drugName}, Drug Quantity: {drugOrder.drugQuantity}, Room Location: {drugOrder.roomLocation}, Priority: {drugOrder.priority}</p>


            </form>


        </>
    );

}

export default App
