import React from 'react';
import { Table } from 'reactstrap';

const Userlist = (props) => {
const { users } = props;
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>UserCreateDate</th>
          <th>UserLastModifiedDate</th>
        </tr>
      </thead>
      <tbody>
              {users && users.length > 0 && users.map((u, index) =>
                  <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{u.Username}</td>
                      <td>{u.UserCreateDate.split('T')[0]}</td>
                      <td>{u.UserLastModifiedDate.split('T')[0]}</td>
                  </tr>
            
              )}
        
      </tbody>
    </Table>
  );
}

export default Userlist;