import React from 'react'
import './Table.css'

const Table = ({posts}) => {

  return (
    <div>
      <table>
        <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
        </tr>
        <tbody>
            {posts?.map((post) => (
                <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
