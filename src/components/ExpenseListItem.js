//Export a stateless functional component
//description, amount, createdAt

import React from 'react'
import {connect} from 'react-redux'

const ExpenseDetails = ({description, amount, createdAt}) => (


        <div>
        <h3> {description}</h3>
        <p> Amount: {amount}</p>
        <p>Created At: {createdAt}</p>
        </div>

    )

export default ExpenseDetails;
