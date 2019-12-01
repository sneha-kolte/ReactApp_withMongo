import React, { Component } from 'react';

/* eslint-disable */
class AddMember extends Component {

    newEmp(allEmp) {
        console.log(allEmp);
    }

    onSubmit(e) {
        const allEmp = {
            name: this.refs.name.value,
            designation: this.refs.designation.value
        }
        this.newEmp(allEmp);
        e.preventDefault();
    }
    render() {
        return (
            <div className="container AddMembersContainer">
                <div className="row">

                    <div className="AddNewMembers">

                        <form onSubmit={this.onSubmit.bind(this)}>
                            <div className="col-md-12 members">
                                Upload File: <input type="file" name="pic" accept="image/*" className="uploadFile" />
                            </div>
                            <div className="col-md-12 members">
                                Name: <input type="text" name="name" className="addName" ref="name" />
                            </div>
                            <div className="col-md-12 members">
                                Designation: <input type="text" name="designation" className="addDesignation" ref="designation" />
                            </div>
                            <div className="col-md-12 members">
                                <button type="submit" className="AddMember">Add Member</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}
export default AddMember;


