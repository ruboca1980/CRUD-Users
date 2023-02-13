import React from 'react'

const UserCard = ({ user , deleteUserById , setUpdateInfo , handleOpen }) => {

  const handleDelete = () => {
    deleteUserById(user.id)
  }

  const handleUpdate = () => {
    setUpdateInfo(user)
    handleOpen()
  }

  return (
    <article className='user'>
      <h2 className='user__title'>{`${user.first_name} ${user.last_name}`}</h2>
      <ul className='user__dates'>
        <li className='user__date'><span className='user__date-span'>EMAIL</span>{user.email}</li>
        <li className='user__date'><span className='user__date-span'>BIRTHDAY</span>{user.birthday}</li>
      </ul>
      <div className='user__btn-s'>
        <button className='user__btn user__btn-delete' onClick={handleDelete}><img src="./../../delete.png" alt="Delete" /></button>
        <button className='user__btn user__btn-update' onClick={handleUpdate}><img src="./../../edit.png" alt="Update" /></button>
      </div>
    </article>
  )
}

export default UserCard