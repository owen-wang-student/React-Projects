import { useEffect, useState } from 'react'

export function Dropdown(){

    const [dorm, setDorm] = useState("")
    const [floor, setFloor] = useState("")

    const dorm_options = []
    const floor_options = []

    return(
        <div>
            <div id="dorm">
                <h2>Please select dorm</h2>
                <select>
                    <option value="">-- none selected --</option> 
                    {dorm_options}
                </select>
            </div>

            <div id="floor">
                <h2>Please select floor:</h2>
                <select>
                    <option value="">-- none selected --</option>
                    {floor_options}
                </select>
            </div>
        </div>
    )
}