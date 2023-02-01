import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Table() {
    const [Data, setData] = useState([]);

    useEffect(() => {
        fetch("https://localhost:44356/get-all-users")
            .then(response => response.json())
            .then(data => setData(data));
    }, [])
    return (
        <div id='table-template1' className='p-2'>
            <table className='table table-striped rounded border'>
                <thead>
                    <tr>
                        <th></th>
                        <th>#</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Data.map((item, ind)=>{
                            return (ind<20)? (
                                <tr key={ind}>
                                    <td>{}</td>
                                    <td>{ind + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.age}</td>
                                    <td>{}</td>
                                </tr>
                            ) : null
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
