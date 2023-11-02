import React from "react";
 type UserListPropsType = {
  users: Array<{id: number, name: string, age: number, address: {street: string, city: string}}>
 }


export const UserList = (props:UserListPropsType) => {
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>

      <ul>

        {props.users.map((u)=>
        <li key={u.id} id={`hw01-user-${u.id}`}>
          <strong>{u.name}</strong> (Age: {u.age})<strong>Address:</strong>
          {u.address.street}, {u.address.city}
        </li>
        )}

        
      </ul>
    </div>
  );
};
